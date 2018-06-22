<template>
  <div>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <div class="row">
    <div class="col s12 m12">
      <div class="card-panel">
        <h3>Nodes <i class="small material-icons sw-blue-text">autorenew</i></h3>
        <table>
        <thead>
          <tr>
              <th>#</th>
              <th>Label</th>
              <th>Status</th>
              <th>Key</th>
              <th>Started</th>
          </tr>
        </thead>
        <tbody>
          <router-link v-for="(node, index) in nodes" v-bind:key="index" tag="tr" :to="generateNodeUrl(node.key)" class="hoverable">
            <td>{{index+1}}</td>
            <td>{{node.label}}</td>
            <td><i class="material-icons green-text">cloud</i></td>
            <td><span class="truncate">{{node.key}}</span></td>
            <td>{{calculateSince(node.start_time)}} ago</td>
          </router-link>
        </tbody>
      </table>
      </div>
    </div>
  </div>
      
      
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {ApiService } from '../services/api';
import { resolve } from 'url';
import { Action, Getter, namespace } from 'vuex-class';
import Node from '@/views/Node.vue';
import Util from '@/services/util';


const nodes = namespace('nodes');

@Component
export default class Nodes extends Vue {

@nodes.Action('fetchAll') private fetchAll: any;
@nodes.Getter('getAllNodes') private nodes: Node[] | undefined;

  constructor(config: any) {
    super(config);
  }

  private mounted() {
    this.fetchAll();
  }

  private calculateSince(millis: number) {
    return Util.calculateTimeDelta(millis);
  }

  private generateNodeUrl(key: string) {
    return '/app/nodes/' + key;
  }
}

</script>

