<template>
<div class = "main-div-login" v-bind:class="{'main-div-login-light-mode': colorPreference}">
  <div class="check-wrapper">
                  <input class="checkbox" type="checkbox" v-model="colorPreference" v-if="!colorPreference"> <p class="check-message" v-bind:class="{'collection-stats-light-mode': colorPreference}" v-if="!colorPreference">Check for Light mode</p>
                  <input class="checkbox" type="checkbox" v-model="colorPreference" v-if="colorPreference"> <p class="check-message" v-bind:class="{'collection-stats-light-mode': colorPreference}" v-if="colorPreference">Uncheck for Dark mode</p>
              </div>
  <div id="login" class="text-center">
    <h1 class = "welcome-back" v-bind:class="{'welcome-back-light-mode': colorPreference}">Welcome Back!</h1>
    <form class="form-signin" @submit.prevent="login" v-bind:class="{'form-signin-light-mode': colorPreference}">
      <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
      <div
        class="alert alert-danger"
        role="alert"
        v-if="invalidCredentials"
      >Invalid username and password!</div>
      <div
        class="alert alert-success"
        role="alert"
        v-if="this.$route.query.registration"
      >Thank you for registering, please sign in.</div>
      <label for="username" class="sr-only">Username</label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
      />
      <label for="password" class="sr-only">Password</label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <router-link :to="{ name: 'register' }">Need an account?</router-link>
      <button type="submit" v-bind:class="{'button-light-mode': colorPreference}">Sign in</button>
    </form>
  </div>
</div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login",
  components: {},
  data() {
    return {
      colorPreference: true,
      user: {
        username: "",
        password: ""
      },
      invalidCredentials: false
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then(response => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/dashboard/overview");
          }
        })
        .catch(error => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    }
  }
};
</script>

<style scoped>

a{
  text-decoration: none;
  margin-bottom: 3%;
  font-size: 13px;
  text-align: center;
  -webkit-transition: color 1s;
  -moz-transition:    color 1s;
  -ms-transition:     color 1s;
  -o-transition:      color 1s;
  transition:         color 1s;
}

button {
  color: #BE080E;
  font-style: arial;
  font-weight: bolder;
  padding: 4px;
  background: #0000ff;
  border-style: none;
  border-radius: 4%;
  padding: 5%;
  background: #fbca03;
  cursor: pointer;
}

.button-light-mode{
  color: white;
  font-style: arial;
  font-weight: bolder;
  padding: 4px;
  border-style: none;
  border-radius: 4%;
  padding: 5%;
  background: #27477C;
  cursor: pointer;
}

.welcome-back {
  font-family: Bangers;
  font-size: 4em;
  margin-top: 0%;
  padding-right: 100px;
  z-index: 1;
  color: #fff;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  margin-bottom: 0%;
}

.welcome-back-light-mode {
   color: black;
  text-shadow: white;
  margin-left: 100px;
  -webkit-text-stroke: 0.5px white; 
}

.main-div-login {
background-color: #820303;
background-image: url("../images/background.jpg");
background-size: 2250px;
padding-bottom: 200px;
max-width: 100%;
height: 100vh;
background-repeat: no-repeat;
}

.main-div-login-light-mode{
  background-color: #27477C;
  background-image: url("../images/new-backrground-less-moody.jpg");
}

.form-signin{
  display: flex;
  flex-direction: column;
  background: #BE080E;
  padding: 2%;
  border-radius: 2%;
  box-shadow: 0 0 5px 2px #fff;
}

.form-signin-light-mode {
  background: #00A2DD;
  margin-left: 400px;
}

#login {
  display: flex;
  justify-content: center;
  margin: 0%;
  padding-top: 100px;
  padding-bottom: 100px;
}

.h3 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 1px;
  margin: 2px;
  color: aliceblue;
  font-size: 16px;
}

input {
  margin: 4%;
  padding: 2%;
  background: #fff;
}

a:hover {
  color: aliceblue;
}

.h3 {
  text-align: center;
}

/* * CHECK BOX */ 
.checkbox{
  margin: 2px;
}

.check-wrapper{
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
}

.check-message{
    font-size: 13px;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: white;
    text-shadow: black;
  -webkit-text-stroke: 0.2px black; 
  }

</style>