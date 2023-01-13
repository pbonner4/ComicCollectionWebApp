<template>
  <div id="app">
    <div id="nav">
      <router-link v-bind:to="{ name: 'home' }">Browse Public Collections  | </router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'dashboard' }">Your Profile  | </router-link>&nbsp;|&nbsp;
      <router-link v-bind:to="{ name: 'logout' }" v-if="$store.state.token != ''">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
body {
  margin: 0px;
}

#nav {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  display: flex;
justify-content: flex-end;
padding-top: 1px;
background-color: black;
}

a {
  font-family: Bangers;
  text-decoration: none;
  color: white;
}
a:hover{
  color: gray;
}


</style>