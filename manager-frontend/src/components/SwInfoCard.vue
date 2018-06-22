<template>
              <div class="md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-100">
                <md-card class="sw-black-text">
                  <md-card-header>
                    <!-- icon -->
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item md-size-30">
                        <div class="md-layout md-layout-item md-alignment-center-right">
                           <md-icon class="md-size-2x">{{icon}}</md-icon>
                        </div>
                      </div>
                      <div class="md-layout-item md-size-70">
                        <div class="">
                            <slot name="sw-info-card-content"></slot>
                        </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SwInfoCard extends Vue { 
    @Prop({type: String}) private icon: any ;
}
</script>


