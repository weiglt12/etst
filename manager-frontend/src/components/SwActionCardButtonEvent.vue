<template>        
          <!-- card n -->
          <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-50">
            <md-card>
              <md-card-header>
                <!-- text -->
                <div class="md-layout md-layout-item md-alignment-center-center">
                    <slot name="sw-action-card-text"></slot>
                </div>
                  <!-- icon -->
                <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                    <slot name="sw-action-card-icon"></slot>
                </div>
              </md-card-header>
            </md-card>
          </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SwActionCardEventButton extends Vue { 
    @Prop({type: String}) private icon: any ;
}
</script>

