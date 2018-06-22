<template>
  <div >
    <md-card class="mar-l-r-card">
      <md-card-content>

      <!-- main headline -->
      <div class="container">
        <md-card-header>
          <div class="md-layout md-alignment-center-center">
            <div class="sw-black-text md-title">Dashboard</div>
          </div>
        </md-card-header>
      </div>

      <!-- Node Status -->
      <div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">NODE STATUS</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter">

              <!-- card 1 -->
              <div class="md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-100">
                <md-card class="green sw-white-text">
                  <md-card-header>
                    <!-- icon -->
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item md-size-30">
                        <div class="md-layout md-layout-item md-alignment-center-right">
                          <md-icon class="md-size-2x">cloud_done</md-icon>
                        </div>
                      </div>
                      <div class="md-layout-item md-size-70">
                        <div class="">
                          <span>Status: Online</span><br>
                          <span>Bandwidth: 123 Mb/s</span>
                        </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>
        
              <!-- card 2 -->
              <div class="md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-100">
                <md-card>
                  <md-card-header>
                    <!-- icon -->
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item md-size-30">
                        <div class="md-layout md-layout-item md-alignment-center-right">
                          <md-icon class="md-size-2x">import_export</md-icon>
                        </div>
                      </div>
                      <div class="md-layout-item md-size-70">
                        <div class="">
                          <span>Type: TCP</span><br>
                          <span>Ping: &lt;0.1ms</span>
                        </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

              <!-- card 3 -->
              <div class="md-layout-item md-medium-size-33 md-small-size-33 md-xsmall-size-100">
                <md-card>
                  <md-card-header>
                    <!-- icon -->
                    <div class="md-layout md-gutter md-alignment-center">
                      <div class="md-layout-item md-size-30">
                        <div class="md-layout md-layout-item md-alignment-center-right">
                          <md-icon class="md-size-2x">access_time</md-icon>
                        </div>
                      </div>
                      <div class="md-layout-item md-size-70">
                        <div class="">
                          <span>Last Seen: 4min ago</span><br>
                          <span>Started: 17h ago</span>
                        </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

             </div>
          </md-card-content>
        </md-card>
      </div>

      <!-- Operations -->
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
                    <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                      <md-icon class="md-size-2x">system_update_alt</md-icon>
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


      <!-- Apps -->
      <div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">APPS</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter">

              <!-- card 1 -->
              <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
                <md-card>
                  <md-card-header>
                    <!-- text 1 -->
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-size-50">
                        <div class="md-layout md-gutter ">
                              <div class="md-layout-item md-alignment-center">
                                  <span>Shadowsocks</span>
                                  <md-icon class="">more_vert</md-icon>
                              </div>
                        </div>
                        <!-- icon 1 --> 
                        <div class="md-layout-item">
                          <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                            <md-icon class="md-size-2x">near_me</md-icon>
                          </div>
                        </div>
                      </div>
                      <!---->
                      <div class="md-layout-item md-size-50">
                        <div class="md-layout md-gutter ">
                              <div class="md-layout-item md-alignment-center">
                                  <span>Shadowsocks Client</span>
                                  <md-icon class="">more_vert</md-icon>
                              </div>
                        </div>
                        <!-- icon 1 --> 
                        <div class="md-layout-item">
                          <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                            <md-icon class="md-size-2x">near_me</md-icon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

              <!-- card 2 -->
              <div class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100">
                <md-card>
                  <md-card-header>
                    <!-- text 1 -->
                    <div class="md-layout md-gutter">
                      <div class="md-layout-item md-size-50">
                        <div class="md-layout md-gutter ">
                              <div class="md-layout-item md-alignment-center">
                                  <span>SSH</span>
                                  <md-icon class="">more_vert</md-icon>
                              </div>
                        </div>
                        <!-- icon 1 --> 
                        <div class="md-layout-item">
                          <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                            <md-icon class="md-size-2x">settings_system_daydream</md-icon>
                          </div>
                        </div>
                      </div>
                      <!---->
                      <div class="md-layout-item md-size-50">
                        <div class="md-layout md-gutter ">
                              <div class="md-layout-item md-alignment-center ">
                                  <span>SSH Client</span>
                                  <md-icon class="sw-hover">more_vert</md-icon>
                              </div>
                        </div>
                        <!-- icon 1 --> 
                        <div class="md-layout-item">
                          <div class="md-layout md-layout-item md-alignment-center-center sw-hover">
                            <md-icon class="md-size-2x">settings_system_daydream</md-icon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </md-card-header>
                </md-card>
              </div>

            </div>
          </md-card-content>
        </md-card>
      </div>


      <!-- Transports -->
      <div class="container">
        <md-card>
          <md-card-header>
            <div class="md-tilte sw-black-text">Transports</div>
          </md-card-header>
          <md-card-content class="mar-bot-20">
            <div class="md-layout md-gutter">
        
              <!-- table 1 -->
              <div class="md-layout-item md-size-100">
                <md-card>
                  <md-card-header>

                    <md-table>
                    <md-table-row>
                      <md-table-head md-numeric>#</md-table-head>
                      <md-table-head>Send</md-table-head>
                      <md-table-head>Recv</md-table-head>
                      <md-table-head>From App</md-table-head>
                      <md-table-head>From Node</md-table-head>
                      <md-table-head>To App</md-table-head>
                      <md-table-head>To Node</md-table-head>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell md-numeric>1</md-table-cell>
                      <md-table-cell>0 B/s</md-table-cell>
                      <md-table-cell>0 B/s</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell md-numeric>2</md-table-cell>
                      <md-table-cell>0 B/s</md-table-cell>
                      <md-table-cell>0 B/s</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell md-numeric>3</md-table-cell>
                      <md-table-cell>0 B/s</md-table-cell>
                      <md-table-cell>0 B/s</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                      <md-table-cell>0354530f0b758...</md-table-cell>
                    </md-table-row>

                    <md-table-row></md-table-row> <!-- necassary for styling purposes! -->

                  </md-table>
                  </md-card-header>
                </md-card>
              </div>

              <!-- table 2 -->
              <div class="md-layout-item md-size-100">
                <md-card>
                  <md-card-header>

                    <md-table>
                    <md-table-row>
                      <md-table-head md-numeric>#</md-table-head>
                      <md-table-head>Key</md-table-head>
                      <md-table-head>App</md-table-head>
                      <md-table-head>Remove</md-table-head>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell md-numeric>1</md-table-cell>
                      <md-table-cell>0354530f0b758fe88c65f9baf41d03d76beff88ce3681ada34324aed44deb90407</md-table-cell>
                      <md-table-cell><md-icon class="sw-blue-text">cloud</md-icon></md-table-cell>
                       <md-table-cell><div class="sw-hover"><md-icon class="red-text">delete</md-icon></div></md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell md-numeric>2</md-table-cell>
                      <md-table-cell>0354530f0b758fe88c65f9baf41d03d76beff88ce3681ada34324aed44deb90407</md-table-cell>
                      <md-table-cell><md-icon class="sw-blue-text">cloud</md-icon></md-table-cell>
                       <md-table-cell><div class="sw-hover"><md-icon class="red-text">delete</md-icon></div></md-table-cell>
                    </md-table-row>

                    <md-table-row>
                      <md-table-cell md-numeric>3</md-table-cell>
                      <md-table-cell>0354530f0b758fe88c65f9baf41d03d76beff88ce3681ada34324aed44deb90407</md-table-cell>
                      <md-table-cell><md-icon class="sw-blue-text">cloud</md-icon></md-table-cell>
                      <md-table-cell><div class="sw-hover"><md-icon class="red-text">delete</md-icon></div></md-table-cell>
                    </md-table-row>

                    <md-table-row></md-table-row> <!-- necassary for styling purposes! -->

                  </md-table>
                  </md-card-header>
                </md-card>
              </div>

            </div>
          </md-card-content>
        </md-card>
      </div>



      </md-card-content>
    </md-card> <!-- main card end -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component
export default class Dashboard extends Vue {
  private first: boolean = false;
  private second: boolean = false;
}
</script>

<style scoped lang="scss">

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

