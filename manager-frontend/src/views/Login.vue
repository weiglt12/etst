<template>
<div>
    <div class="container">
        <div class = "row">
            <div class="col s6 offset-s3 valign-wrapper">
                <div class="row valign-wrapper">
                    <div class ="col s3 valign-wrapper" >
                        <a class="btn-floating red btn-large pulse"><i class="material-icons">security</i></a>
                    </div>
                    <div class = "col s9">
                        <h4>Privacy Information</h4>
                        <p>Hmm.. Actually there is not much too say. You own your data, Have fun! <i class="material-icons">insert_emoticon</i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <div class = "sw-header-banner  z-depth-5">
    <div class = "header center sw-black row">
      <h1 class="white-text sw-login-header row"><img src="../assets/skywire.svg"/> Skywire</h1>
      <div class ="row red-text" v-show="loginError" >
          {{loginError}}
      </div>
      <div class = "row">
        <form class="col s8 offset-s4" v-on:submit.prevent="onSubmit">
          <div class="row">
            <div class="input-field col s6 sw-black">
              <input id="password" type="password" v-model="password" class="sw-input-lighten" @keyup.enter="login">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="center-align col s6">
              <a to="/app/dashboard" @click="login" class="btn sw-blue"><i class="material-icons right">cloud</i>Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>   
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, Getter, namespace} from 'vuex-class';
const auth = namespace('auth');

@Component
export default class Login extends Vue {
  
@auth.Getter('isLoggedIn') private isLoggedIn: boolean | undefined;
@auth.Getter('loginError') private loginError: any;
@auth.Action('login') private loginAction: any;
  
  private password: string = '';

  private login() {
    this.loginAction(this.password);
  }


  constructor(config: any) {
    super(config);
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sw-header-banner {
  
}
.sw-login-header {
  padding: 1em;
}
</style>