<template>
  <div>
      <nav class="sw-black lighten-1" role="navigation">
    <div class="nav-wrapper container">
      <router-link tag="a" id="logo-container " to="/app/dashboard" class="brand-logo ">
        <i class="material-icons sw-blue-text">cloud</i>Skywire
      </router-link>
      <ul class="right hide-on-med-and-down">
        <li class="active">
          <router-link tag="a" to="/app/dashboard">
            <i class="material-icons left white-text">dashboard</i>Dashboard
          </router-link>
        </li>
        <li>
          <router-link tag="a" to="/app/nodes">
            <i class="material-icons left white-text">dns</i>Nodes
          </router-link>
        </li>
        <li>
          <router-link tag="a" to="/login">
            <i class="material-icons left white-text">power_settings_new</i>Logout
          </router-link>
        </li>
      </ul>
      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Nodes</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
   <router-view /> 
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MainApp extends Vue {

}

</script>

