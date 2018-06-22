<template>        
          <!-- card -->
          <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
            <md-card>
              <md-card-header>
                <!-- text -->
                <div class="md-layout md-layout-item md-alignment-center-center">
                  <div class="md-tilte sw-black-text">{{text}}</div>
                </div>
                  <!-- icon -->
                <div class="md-layout md-layout-item md-alignment-center-center sw-hover" >
                  <md-icon class="md-size-2x">{{icon}}</md-icon>
                  <slot name="sw-action-card-2-button-event"></slot>
                </div>
              </md-card-header>
            </md-card>
          </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SwActionCardSingle extends Vue { 
    @Prop({type: String}) private icon: any ;
    @Prop({type: String}) private text: any ;
}
</script>
