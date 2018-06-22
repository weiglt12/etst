<template>
<div>

    <!-- node-status -->
    <div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">NODE STATUS</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter mar-bot-20">
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                 <md-field>
                  <label>Label</label>
                  <md-input v-model="node.label" v-bind:disabled="!editNodeLabel"></md-input>
                  <span class="md-suffix" @click="nodeLabelIconClick()">
                     <md-icon class="sw-hover">{{editSave()}}</md-icon>
                     <md-tooltip md-direction="top">Edit</md-tooltip>
                   </span>
                </md-field>
              </div>
              <div class="md-layout-item md-medium-size-50 md-small-size-50 md-xsmall-size-100">
                 <md-field>
                  <label>Key</label>
                  <md-input v-model="node.key" disabled></md-input>
                   <span class="md-suffix">
                     <md-icon>file_copy</md-icon>
                     <md-tooltip md-direction="top">Copy to clipboard</md-tooltip>
                   </span>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">

              <!-- card 1 -->
              <sw-info-card icon="cloud_done"> 
                <div slot="sw-info-card-content">
                  <span>Status: Online</span><br>
                  <span>Sent: {{node.sent}} {{node.sentUnit}}</span><br>
                  <span>Received: {{node.received}} {{node.receivedUnit}}</span>
                </div>
              </sw-info-card>
              <!-- card 2 -->

              <sw-info-card icon="import_export"> 
                <div slot="sw-info-card-content">
                  <span>Type: {{node.type}}</span><br>
                  <span>Node IP: {{node.ip}}</span><br>
                  <span>Manager IP: {{node.manager_ip}}</span>
                </div>
              </sw-info-card>

              <!-- card 3 -->
              <sw-info-card icon="access_time"> 
                <div slot="sw-info-card-content">
                  <span>Last Seen: {{calculateSince(node.last_ack_time)}} ago</span><br>
                  <span>Started: {{calculateSince(node.start_time)}} ago</span>
                </div>
              </sw-info-card>
              
             </div>
          </md-card-content>
        </md-card>
      </div>

      <!-- operations -->
      <div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">OPERATIONS</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter">
        
               <!-- card 1 -->
              <sw-action-card-button-event icon=""> 
                <div slot="sw-action-card-text">
                      <div class="md-tilte sw-black-text">Check Update</div>
                </div>
                <div slot="sw-action-card-icon" @click="checkUpdates()">
                    <md-icon class="md-size-2x" v-show="!this.checkingUpdate" >system_update_alt</md-icon>
                  <div v-show="this.checkingUpdate" class="preloader-wrapper active">
                    <div class="spinner-layer spinner-black-only">
                      <md-icon class="md-size-2x">autorenew</md-icon>
                    </div>
                  </div>
                </div>
              </sw-action-card-button-event>

              <!-- card 2 -->
              <sw-action-card-single icon="autorenew" text="Reboot" v-on:click.native="reboot"> </sw-action-card-single>
              <!-- card 3 -->
              <sw-action-card-single icon="settings" text="Settings" v-on:click.native="settings"> </sw-action-card-single>
              <!-- card 4 -->
              <sw-action-card-single icon="computer" text="Terminal" v-on:click.native="terminal"> </sw-action-card-single>

            </div>
          </md-card-content>
        </md-card>
      </div>
    
       <!-- Apps -->
      <div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">APPS</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter">

              <!-- card 1 -->
              <sw-action-card-double text1="Shadowsocks" icon1="near_me" text2="Shadowkkksocks Client" icon2="near_me" > </sw-action-card-double>
              <!-- card 2 -->
              <sw-action-card-double text1="SSH" icon1="settings_system_daydream" text2="SSH Client" icon2="settings_system_daydream"> </sw-action-card-double>

            </div>
          </md-card-content>
        </md-card>
      </div>

</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter, namespace } from 'vuex-class';
import { constants } from 'http2';
import { resolve, relative } from 'path';
import { NodeInfo } from '@/services/api';
import { read } from 'fs';
import Util from '@/services/util';
import SwInfoCard from '@/components/SwInfoCard.vue';
import SwActionCardButtonEvent from '@/components/SwActionCardButtonEvent.vue';
import SwActionCardSingle from '@/components/SwActionCardSingle.vue';
import SwActionCardDouble from '@/components/SwActionCardDouble.vue';


const nodes = namespace('nodes');

@Component({
  components: {
    'sw-info-card': SwInfoCard,
    'sw-action-card-button-event': SwActionCardButtonEvent,
    'sw-action-card-single': SwActionCardSingle,
    'sw-action-card-double': SwActionCardDouble,
  },
})
export default class Node extends Vue {

  @nodes.Getter('getCurrentNode') private node: any;
  @nodes.Action('fetchCurrentNode') private fetchCurrentNode: any;
  @nodes.Action('changeNodeLabel') private changeNodeLabel: any;
  @nodes.Action('rebootNode') private rebootNode: any;

  private editNodeLabel: boolean = false;
  private checkingUpdate: boolean = false;

  private mounted() {
    this.fetchCurrentNode(this.$route.params.id);
  }

  private editSave() {
    if (this.editNodeLabel) {
      return 'save';
    } else {
      return 'create';
    }
  }

  private calculateSince(millis: number) {
    return Util.calculateTimeDelta(millis);
  }

  private nodeLabelIconClick() {
    if (this.editNodeLabel) {
      this.changeNodeLabel(this.node.label);
      this.editNodeLabel = false;
    } else {
      this.editNodeLabel = true;
    }
  }

    private checkUpdates() {
  // console.log('checkUpdates');
    if (this.checkingUpdate === true) {
      this.checkingUpdate = false;
    } else {
      this.checkingUpdate = true;
    }
  }

  private reboot() {
   // console.log('reboot');
    this.rebootNode(this.node.key);
  }

  private settings() {
   // console.log('settings');
  }

  private terminal() {
   // console.log('terminal');
  }

  private shadowSocks() {
   // console.log('shadowsocket ');
  }

  private shadowSocksClient() {
   // console.log('shadowsocket client');
  }

  private ssh() {
  //  console.log('ssh');
  }

  private sshClient() {
   // console.log('ssh client');
  }

}

</script>

<style>
.mar-l-r-card {
  margin-left: 3px;
  margin-right: 3px;
}

.mar-bot-0 {
    margin-bottom: 0em;
}

.pad-top-bot-0 {
  padding-top: 0em;
  padding-bottom: 0em;
}

.txt-overf {
  text-overflow: ellipsis
}

.mar-bot-20 {
  margin-bottom: 20px;
}
</style>
