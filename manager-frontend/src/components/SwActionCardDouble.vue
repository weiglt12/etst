<template>
          <!-- card -->
          <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
              <md-card>
                <md-card-header>
                  <!-- text 1 -->
                  <div class="md-layout md-gutter">
                    <div class="md-layout-item md-size-50">
                      <div class="md-layout md-gutter ">
                        <div class="md-layout-item md-alignment-center">
                          <div class="md-tilte sw-black-text">{{text1}}
                            <md-icon class="">more_vert</md-icon>
                          </div>
                        </div>
                      </div>
                      <!-- icon 1 --> 
                      <div class="md-layout-item">
                        <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                          <md-icon class="md-size-2x">{{icon1}}
                          </md-icon>
                        </div>
                      </div>
                    </div>
                    <!-- text 2 -->
                    <div class="md-layout-item md-size-50">
                      <div class="md-layout md-gutter ">
                        <div class="md-layout-item md-alignment-center">
                          <div class="md-tilte sw-black-text">{{text2}}
                            <md-icon class="">more_vert</md-icon>
                          </div>
                        </div>
                      </div>
                      <!-- icon 2 --> 
                      <div class="md-layout-item">
                        <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                          <md-icon class="md-size-2x">{{icon2}}</md-icon>
                        </div>
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
export default class SwActionCardDouble extends Vue { 
    @Prop({type: String}) private text1: any ;
    @Prop({type: String}) private icon1: any ;
    @Prop({type: String}) private text2: any ;
    @Prop({type: String}) private icon2: any ;
}
</script>