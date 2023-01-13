<template>
<div class="main-div" v-bind:class="{'light-mode': colorPreference}">
  <div class="check-wrapper">
                  <input class="checkbox" type="checkbox" v-model="colorPreference" v-if="!colorPreference"> <p class="check-message" v-bind:class="{'collection-stats-light-mode': colorPreference}" v-if="!colorPreference">Check for Light mode</p>
                  <input class="checkbox" type="checkbox" v-model="colorPreference" v-if="colorPreference"> <p class="check-message" v-bind:class="{'collection-stats-light-mode': colorPreference}" v-if="colorPreference">Uncheck for Dark mode</p>
              </div>
  <div id="register" class="text-center">
    <div>
      <h1 class="attention-hook" v-bind:class="{'attention-hook-light-mode': colorPreference}">Display your Comic Book Collection and trade with friends!</h1>
      <h4 class="under-hook">Join the growing community of comic collectors, to discover new comics, keep up to date with current releases, and trade with other members.</h4>
    </div>
    <form class="form-register" @submit.prevent="register" v-bind:class="{'form-register-light-mode': colorPreference}">
      <h1 class="h3 mb-3 font-weight-normal" v-bind:class="{'h3-light-mode': colorPreference}">Create Account</h1>
      <div class="alert alert-danger" role="alert" v-if="registrationErrors">
        {{ registrationErrorMsg }}
      </div>
      <label for="username" class="sr-only"></label>
      <input
        type="text"
        id="username"
        class="form-control"
        placeholder="Username"
        v-model="user.username"
        required
        autofocus
      />
      <label for="password" class="sr-only"></label>
      <input
        type="password"
        id="password"
        class="form-control"
        placeholder="Password"
        v-model="user.password"
        required
      />
      <input
        type="password"
        id="confirmPassword"
        class="form-control"
        placeholder="Confirm Password"
        v-model="user.confirmPassword"
        required
      />
      <router-link :to="{ name: 'login' }">Have an account? Login here.</router-link>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-bind:class="{'button-light-mode': colorPreference}" >
        Join Now
      </button>
    </form>
  </div>
   <section class="emoji-features" v-bind:class="{'emoji-features-light-mode': colorPreference}">
        <div class = "emoji-container" v-bind:class="{'emoji-container-light-mode': colorPreference}">
          <div class = "emoji-header-container">
            <h2 class="emoji-header">Join the Comic Book Community</h2>
          </div>
          <div class = "features">
          <div class = "flex-features" v-bind:class="{'flex-features-light-mode': colorPreference}">
            <div class="div-for-inside-circle">
            <i class="fa fa-solid fa-handshake-o fa-3x" aria-hidden="true" v-bind:class="{'i-light-mode': colorPreference}"></i>
            <h3 class="single-feature">
              Trade with Friends
            </h3>
            </div>
          </div>
          <div class = "flex-features" v-bind:class="{'flex-features-light-mode': colorPreference}">
            <div class="div-for-inside-circle">
              <i class="fa fa-solid fa-trophy fa-3x" aria-hidden="true" v-bind:class="{'i-light-mode': colorPreference}"></i>
            <h3 class="single-feature">
              Top the Leader boards
            </h3>
            </div>
          </div>
          <div class = "flex-features" v-bind:class="{'flex-features-light-mode': colorPreference}">
            <div class="div-for-inside-circle">
              <i class="fa fa-solid fa-user-circle fa-3x" aria-hidden="true" v-bind:class="{'i-light-mode': colorPreference}"></i>
            <h3 class="single-feature-2">
              Make new Friends
            </h3>
            </div>
          </div>
          <div class = "flex-features" v-bind:class="{'flex-features-light-mode': colorPreference}">
            <div class="div-for-inside-circle">
              <i class="fa fa-solid fa-book fa-3x" aria-hidden="true" v-bind:class="{'i-light-mode': colorPreference}"></i>
            <h3 class="single-feature">
              Display your Comics
            </h3>
            </div>
          </div>
        </div>
      </div>
        
    </section>
    <section class = "big-list-of-features" v-bind:class="{'big-list-of-features-light-mode': colorPreference}">
      <div class="superman">
        <img class="superman-img" src="https://toppng.com/public/uploads/thumbnail/superman-3222965-960-720-superman-silhouette-115628664734hoft5zmii.png" alt="superman.png">
        </div>
        <div class="bulleted-list-div">
          <ul class="bulleted-list" v-bind:class="{'bulleted-list-light-mode': colorPreference}">
            <h1 class = "header-list">Store Your Comics in Collections !</h1>
            <li class="list-li" v-bind:class="{'list-li-light-mode': colorPreference}">Sort In a Variety of Ways
              <p class="list-p" v-bind:class="{'list-p-light-mode': colorPreference}">By creator, maturity rating, release date, Alphabetically - you name it.</p>
            </li>
            <li class="list-li" v-bind:class="{'list-li-light-mode': colorPreference}">Intuitive Organization
              <p class="list-p" v-bind:class="{'list-p-light-mode': colorPreference}">Store in accessible collections on your personal profile.</p>
            </li>
            <li class="list-li" v-bind:class="{'list-li-light-mode': colorPreference}">Display in Mobile
              <p class="list-p" v-bind:class="{'list-p-light-mode': colorPreference}">Seamless integration on all devices, show off to your friends everywhere you go!</p>
            </li>
          </ul>
          </div>
    </section>
    <carousel/>
    <section class = "big-list-of-features2" v-bind:class="{'big-list-of-features2-light-mode': colorPreference}">
      <div class="spiderman">
        <img class="spiderman-img" src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/24749.png" alt="spiderman.png">
        </div>
        <div class="bulleted-list-div2">
          <ul class="bulleted-list2" v-bind:class="{'bulleted-list2-light-mode': colorPreference}">
            <h1 class = "header-list">Discover New Comics !</h1>
            <li class="list-li" v-bind:class="{'list-li-light-mode': colorPreference}">Discover new comics by your favorite Creator
              <p class="list-p" v-bind:class="{'list-p-light-mode': colorPreference}">Track new releases for comics by Author</p>
            </li>
            <li class="list-li" v-bind:class="{'list-li-light-mode': colorPreference}">Character Descriptions
              <p class="list-p" v-bind:class="{'list-p-light-mode': colorPreference}">A few clicks away learn more about your favorite characters, or new characters</p>
            </li>
            <li class="list-li" v-bind:class="{'list-li-light-mode': colorPreference}">Summaries before you read
              <p class="list-p" v-bind:class="{'list-p-light-mode': colorPreference}">Make sure you know that your interested beyond just the title.</p>
            </li>
          </ul>
          </div>
    </section>
    <carouseloftesimonials/>
    <div class = "final-sell" v-bind:class="{'final-sell-light-mode': colorPreference}">
    <h1 class="ready" v-bind:class="{'ready-light-mode': colorPreference}">Ready to sign Up and Join the growing community?</h1>
    <a id="sign-up" v-on:click="scrollToTop">
        Click to Sign Up!
      </a>
    </div>
  </div>
</template>

<script>
import authService from '../services/AuthService';
import Carousel from '../components/carousel.vue';
import carouseloftesimonials from '../components/carouseltestimonials.vue'

export default {
  name: 'register',
  components: {
  Carousel,
  carouseloftesimonials
},
  data() {
    return {
      colorPreference: true,
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        role: 'user',
      },
      registrationErrors: false,
      registrationErrorMsg: 'There were problems registering this user.',
    };
  },
  methods: {
    scrollToTop(){
      window.scrollTo(0,0);
    },
    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = 'Password & Confirm Password do not match.';
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: '/login',
                query: { registration: 'success' },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = 'Bad Request: Validation Errors';
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = 'There were problems registering this user.';
    },
  },
};
</script>

<style scoped>

.main-div {
  background-color: #820303;
background-image: url("../images/background.jpg");
background-size: 1900px;
max-width: 100%;
max-height: 100%;
background-repeat: no-repeat;
}

.light-mode {
  background-color: #01a6e2;
  background-image: url('../images/new-backrground-less-moody.jpg');
  background-size: 1900px;
  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
}

/* REGISTER FORM */
button {
  color: #BE080E;
  font-style: arial;
  font-weight: bolder;
  padding: 4px;
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

input {
  margin: 4%;
  padding: 2%;
  background: #fff;
}

a{
  text-decoration: none;
  margin-bottom: 3%;
  font-size: 13px;
  -webkit-transition: color 1s;
  -moz-transition:    color 1s;
  -ms-transition:     color 1s;
  -o-transition:      color 1s;
  transition:         color 1s;
}

a:hover {
  color: aliceblue;
}

.form-register {
  display: flex;
  flex-direction: column;
  background: #BE080E;
  margin-bottom: 2em;
  margin-left: 20%;
  padding: 3%;
  border-radius: 2%;
  text-align: center;
  box-shadow: 0 0 5px 2px #fff;
}

.form-register-light-mode {
  background: #00A2DD;
}

#register {
  display: flex;
 justify-content: space-around;
  margin: 0% 3%;
  padding-top:10px;
}


.h3 {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 1px;
  margin: 2px;
  color: aliceblue;
  font-size: 22px;
}

.h3-light-mode {
  color: #0F1929;
}

/* TOP HOOKS */

.attention-hook{
  font-family: Bangers;
  font-size: 4em;
  margin-top: 0%;
  z-index: 1;
  color: #fff;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  margin-bottom: 0%;
}

.attention-hook-light-mode{
  font-family: Bangers;
  font-size: 4em;
  margin-top: 0%;
  z-index: 1;
  color: black;
  text-shadow: white;
  -webkit-text-stroke: 0.5px white; 
  margin-bottom: 0%;
}

.under-hook{
  text-align: center;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color: black;
  margin-top: 6%;
  margin-left: 10%;
  background-color: white;
  font-size: 22px;
  animation: fadeIn 5s; 
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
  border-radius: 30px;
  opacity: .85;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: .75; }
}

@-ms-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: .75; }
}

a {
  text-decoration: none;
  cursor: pointer;
}

i{
  color: #dd949e;
}

.i-light-mode{
  color: #B3E1F9
}

/* FEATURE SECTION WITH CIRCLES */
.emoji-header{
  margin-top: 0px;
}
.emoji-features {
  background-color: #820303;
  text-align: center;
}

.emoji-features-light-mode{
  background-color: #28699D;
}

.emoji-container {
  background-color: #820303;
   font-family: "Comic Sans MS", "Comic Sans", cursive;
   color: white;
   margin-top: 375px;
   padding: 10px 3% 40px 3%;
}

.emoji-container-light-mode{
   font-family: "Comic Sans MS", "Comic Sans", cursive;
   box-shadow: 0px -2px 2px rgba(34,34,34,0.6);
   color: #0F1929;
   margin-top: 375px;
   background-image: linear-gradient(to bottom, #27477c, #275c95, #2273ae, #188ac6, #00a2dd);
   padding: 10px 3% 40px 3%;
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.single-feature{
  margin: 20px;
}
.single-feature2{
  margin: 20px;
}

.flex-features{
  background-color: #980809;
  border-radius: 40%;
  height:180px;
  width: 15%;
  margin: 0px;
}

.flex-features-light-mode{
  background-color: #00A2DD;
}

.div-for-inside-circle{
  padding-top: 10%;
}

/* FIRST HERO IMAGE WITH BULLETED LIST */
.big-list-of-features{
  display: flex;
  justify-content: space-around;
   background-color: #820303;
}

.big-list-of-features-light-mode {
  background-color:#00a2dd;
}

.superman{
  height: 390px;
  width: 76%;
  padding-left: 80px;
  position: absolute;
  z-index: 1;
  overflow: hidden;
}

.superman-img{
  top: 100%;
  position: relative;
  transition: all .9s ease-out;
  height: 100%;
}

.superman:hover > .superman-img{
  top: 0;
}

.bulleted-list-div:hover > .superman-img{
  top: 0;
} 

.bulleted-list-div{
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.bulleted-list{
  display: flex;
  flex-direction: column;
  font-family: Bangers;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  font-size: 28px;
   color: white;
}

.bulleted-list-light-mode{
  text-shadow: white;
  -webkit-text-stroke: 0.1px white; 
  color: black;
  font-size: 33px;
}

.list-li{
  color: #fbca03;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-weight: bolder;
  font-size: 16px;
}

.list-li-light-mode{
  color: black;
  font-size: 19px;
  font-weight: bolder;
}

.list-p{
  color: white;
}

.list-p-light-mode{
  color: #0F1929;
}

/* SECOND HERO IMAGE WITH BULLETED LIST */
.big-list-of-features2{
  display: flex;
  justify-content: space-around;
   background-color: #820303;
}

.big-list-of-features2-light-mode {
  background-color:#00a2dd;
}

.spiderman{
  height: 350px;
  width: 76%;
  margin-top: 30px;
  margin-left: 275px;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.spiderman-img{
  top: 100%;
  position: relative;
  transition: all .9s ease-out;
  height: 100%;
}

.spiderman:hover > .spiderman-img{
  top: 0;
}

.bulleted-list-div2:hover > .spiderman-img{
  top: 0;
} 

.bulleted-list-div2{
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

.bulleted-list2{
  display: flex;
  flex-direction: column;
  font-family: Bangers;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  font-size: 28px;
   color: white;
}

.bulleted-list2-light-mode{
 text-shadow: white;
 -webkit-text-stroke: 0.2px white;
 color: black;
}

/* BOTTOM SCROLL TO TOP BUTTON */

.final-sell{
  margin-top: 10px;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
 background-color:#820303;
 border: solid black 2px;
}

.final-sell-light-mode {
  background-color:#00a2dd;
}

.ready{
  text-align: center;
font-family: Bangers;
  font-size: 4em;
  margin-top: 0%;
  z-index: 1;
  color: #fff;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  margin-bottom: 0%;
}

.ready-light-mode{
  color: black;
  text-shadow: white;
  -webkit-text-stroke: 0.1px white;
}

#sign-up{
  justify-content: center;
  text-align: center;
   font-family: "Comic Sans MS", "Comic Sans", cursive;
   font-size: 44px;
   font-weight: bolder;
}

/* CHECK BOX */
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

