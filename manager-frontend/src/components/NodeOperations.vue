<template>
<div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">OPERATIONS</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter">
        
              <!-- card 1 -->
              <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                <md-card>
                  <md-card-header>
                    <!-- text -->
                    <div class="md-layout md-layout-item md-alignment-center-center">
                      <div class="md-tilte sw-black-text">Check Update</div>
                    </div>
                      <!-- icon -->
                    <div class="md-layout md-layout-item md-alignment-center-center sw-hover" @click="checkUpdates()">
                      <md-icon class="md-size-2x" v-show="!this.checkingUpdate" >system_update_alt</md-icon>
                      <div v-show="this.checkingUpdate" class="preloader-wrapper active">
                      <div class="spinner-layer spinner-black-only">
                        <md-icon class="md-size-2x">autorenew</md-icon>
                      </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

              <!-- card 2 -->
              <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                <md-card>
                  <md-card-header>
                    <!-- text -->
                    <div class="md-layout md-layout-item md-alignment-center-center">
                      <div class="md-tilte sw-black-text">Reboot</div>
                    </div>
                      <!-- icon -->
                    <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                      <md-icon class="md-size-2x">autorenew</md-icon>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

              <!-- card 3 -->
              <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                <md-card>
                  <md-card-header>
                    <!-- text -->
                    <div class="md-layout md-layout-item md-alignment-center-center">
                      <div class="md-tilte sw-black-text">Settings</div>
                    </div>
                      <!-- icon -->
                    <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                      <md-icon class="md-size-2x">settings</md-icon>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

              <!-- card 4 -->
              <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
                <md-card>
                  <md-card-header>
                    <!-- text -->
                    <div class="md-layout md-layout-item md-alignment-center-center">
                      <div class="md-tilte sw-black-text">Terminal</div>
                    </div>
                      <!-- icon -->
                    <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                      <md-icon class="md-size-2x">computer</md-icon>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

            </div>
          </md-card-content>
        </md-card>
      </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { constants } from 'http2';

@Component
export default class NodeOperations extends Vue {
  private checkingUpdate: boolean = false;

  private checkUpdates() {
    console.log("test");
    if(this.checkingUpdate == true) {
      this.checkingUpdate = false;
    } else {
      this.checkingUpdate = true;
    }
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
  text-overflow: ellipsis;
}

.mar-bot-20 {
  margin-bottom: 20px;
}
</style>

