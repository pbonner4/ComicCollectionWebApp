<template>
  <div class="home-container" v-bind:class="{'home-container-light-mode': colorPreference}">
    <main class="comics-grid">
      <!-- This is all the logic to populate the comics grid -->
      <div class="comics-in-collections">
        <h4 class="collection-name-heading" style="text-decoration: underline; text-decoration-color: white;">{{this.$store.state.clickedCollection}}</h4>
        <h4>Amount of Comics in selected Collection: {{selectedComics.length}}</h4>
      </div>
      <div class="comic-wrapper -shadow"  v-for="comic in filteredComics" :key="comic.comicTitle">
        <div class="comic-info" v-show="collectionName == clickedCollection" v-bind:class="{'comic-info-light-mode': colorPreference}">
          <div>
            <!-- conditionally show description -->
              <h2> {{comic.comicTitle}} </h2>
              <img class="comic-thumbnail" v-show="selectedComic != comic" v-bind:src="comic.comicThumbnail.path + '.' +comic.comicThumbnail.extension"/>
              <input type="checkbox" v-on:click="description = comic.comicDescription" v-model="descriptionBool"> <p class="info">info</p>
          </div>
        </div>
      </div>
    </main>
    <nav class="menu" v-bind:class="{'nav-light-mode': colorPreference}">
            <div class="sidebar">
                <div class="explore">
                  <!-- These are the checks for light mode -->
              <div class="check-wrapper">
                  <input type="checkbox" v-model="colorPreference" v-if="!colorPreference"> <p class="collection-stats" v-bind:class="{'check-text-light-mode': colorPreference}" v-if="!colorPreference">Check for Light mode</p>
                  <input type="checkbox" v-model="colorPreference" v-if="colorPreference"> <p class="collection-stats" v-bind:class="{'check-text-light-mode': colorPreference}" v-if="colorPreference">Uncheck for Dark mode</p>
              </div>
                <!-- These are the search bars -->
                    <div class="search">
                    <i class="fa-solid fa-magnifying-glass fa-1x"><input id="search" type="text" placeholder="Search Collections..." v-model="searched"/></i>
                    <i class="fa-solid fa-magnifying-glass fa-1x"><input id="search" type="text" placeholder="Search Comics..." v-show="selectedComics.length > 0" v-model="searchedComics"/></i>
                    <h2 v-show="description" v-if="descriptionBool" class="description"><h1> SUMMARY:</h1> {{description.slice(0,404)+'...'}}</h2>
                    <h2 v-show="description.length == 0" class="description">If no summary appears after clicking info, none is available.</h2>
                    </div>
                  <div class = "register-container" v-bind:class="{'register-container-light-mode': colorPreference}">
                    <h3 class="register-hook">Register/login for more content</h3>
                    <li id= "links-login-register" v-bind:class="{'links-login-register-light-mode': colorPreference}"><router-link v-bind:to="{ name: 'register' }">Register</router-link></li>
                    <li id= "links-login-register" v-bind:class="{'links-login-register-light-mode': colorPreference}"><router-link v-bind:to="{ name: 'login' }">Login</router-link></li>
                  </div>
                  <h6 class= "collection-stats" v-bind:class="{'collection-stats-light-mode': colorPreference}">Number of Public Collections: {{filteredCollections.length}}</h6>
                  <h3 class="left-nav-header" style="text-decoration: underline" v-bind:class="{'left-nav-header-light-mode': colorPreference}">Explore User's Public Comic Collections Below:</h3>
                  <!-- this is where I gather the buttons for every collection -->
                    <div class="public-collections">
                      <button v-for="collection in filteredCollections" :key="collection.name" class="collection-buttons" v-on:click="loggedCollectionClick(collection.name)" v-bind:class="{'collections-buttons-light-mode': colorPreference}" >
                          {{ collection.name }}
                          </button>
                    </div>
                    </div>
                
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "home",
  components:{  
  },
  data() {
    return {
      //
      comicDescription: false,
      // The property that switches the light/dark layout - vmodel on check marks - vbind on all necessary classes
      colorPreference: true,
      // this is the property for the searched through collections filter functions
      searched: "",
      // This is the property to filter the comics once a collection is clicked in search bar
      searchedComics: "",
      //this is the property that stores the comics in the collections after button is clicked
      selectedComics: [],
      //captures description
      description: '',
      //v-show description boolean
      descriptionBool: false,
    }
    },   
    methods: {

      //this function is what allows us to not have nested for loops to retrieve comics in a collection
    loggedCollectionClick(collectionName){
      //mutation property found in the store that allows us to keep track of the button clicked
      this.$store.commit("SET_CLICKEDCOLLECTION", collectionName)
      //this find function goes through the data and finds the collection that was clicked in the array
      const selectedCollection = this.$store.state.collectionsData.find(
      collection => collection.name === collectionName
      );
      
      //the returned comics - purpose is to essentially draw one for loop out of the html tags so we can access the comics in the comic wrapper right away
      this.selectedComics = selectedCollection.comics

      },
    },
    computed: {

      //filter function for the first search bar for collections
      filteredCollections(){
        return this.$store.state.collectionsData.filter(collection => {
          return collection.name.toLowerCase().includes(this.searched.toLowerCase())
        })
      },

    //filter function for the second search bar for comic titles
      filteredComics(){

        if(this.selectedComics.length == 1){
          return [];
        }

        return this.selectedComics.filter(comic => {
          return comic.comicTitle.toLowerCase().includes(this.searchedComics.toLowerCase())
        })
      },

      // loggedClick(){
      //   return this.$store.state.collectionsData.filter(collection => {
      //     return collection.name.includes(this.collectionName)
      //   })
      // }
      
    }
  }
</script>
<style scoped>
#nav {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  display: flex;
justify-content: flex-end;
padding-top: 1px;
background-color: #ce2017;
}

html{
    margin:0;
    height:100%;
    background: rgb(206,32,19);
    background: linear-gradient(90deg, rgba(206,32,23,1) 0%, rgba(130,3,3,1) 35%);
  }

.home-container{
     display: grid;

    grid-template-areas: 
        "nav content";
    grid-template-columns: 250px 1fr;
    grid-template-rows: 300px 1fr;
    gap:0;
    height: 100vh;
    background: rgb(206,32,23);
    background: url('../images/background.jpg');
    background-size: 2250px;
    background-color: rgb(206,32,19);
}

.home-container-light-mode{
   background-color: #27477C;
  background-image: url("../images/new-backrground-less-moody.jpg");
  background-position: center center; 
  height: 100vh;
  background-repeat: no-repeat; 
  background-attachment: fixed; 
  background-size: cover;
}


/* LEFT NAV BAR */

nav {
    grid-area: nav;
    background-color: brown;
    opacity: 0.90;
    height: 101.6vh;
    overflow: hidden;
}

.nav-light-mode{
  background: #28699D;
}

.left-nav-header {
  text-align: center;
  font-family: bangers;
  font-size: 2em;
  margin-top: 7%;
  z-index: 1;
  color: #fff;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  margin-bottom: 5%;
}

.left-nav-header-light-mode{
color: black;
  text-shadow: white;
  -webkit-text-stroke: 0.02px white; 
}

.check-wrapper{
  font-size: 13px;
  display: flex;
  justify-content: space-evenly;
}

.explore {
  text-align: center;
}

.explore li {
  display: block;
  margin: auto;
}

.search{
    top:550px;
    left:10px;
  }
  
  input{
  border-radius: 5px;
  }

  .register-container{
    margin-top: 20px;
    background-color: #BE080E;
    padding: 0px 10px 10px 10px;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
    border-radius: 15%;
    color: #fff;
  }

  .register-container-light-mode{
    background-color: #51C2EC;
  }

  #links-login-register{
    font-size: 20px;
  }

  #links-login-register-light-mode a {
    color: #00A2DD;
    text-decoration: none;
  }

  .collection-stats{
    font-size: 13px;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: white;
    text-shadow: black;
  -webkit-text-stroke: 0.2px black; 
  }

  .comics-in-collections{
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: white;
    text-shadow: black;
    -webkit-text-stroke: 0.3px black; 
  }

  .collection-stats-light-mode{
color: black;
background-color: white;
font-weight: bolder;
    text-shadow: white;
  -webkit-text-stroke: 0.01px white; 
  }


.sidebar{
    margin:20px;
}
.switch{
    background: rgb(206,32,23);;
}

/* COLLECTION BUTTONS */
.public-collections {
    overflow-y: scroll;
    height: 265px;
    border-top: none;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-radius: 25%;
  background-color: #333;
}

.collection-buttons{
  background-color: #fbca03;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-shadow: black;
  color: #BE080E;
  font-size: 16px;
  -webkit-text-stroke: 0.2px black;
  margin-top: 5px;
  cursor: pointer;
}

.collections-buttons-light-mode{
  background-color: #51C2EC;
  color: black;
  font-weight: bolder;
  -webkit-text-stroke: 0.1px white;
  text-shadow: white;
}

/* MAIN CONTENT GRID */
.comics-grid{
  padding: 10px 10px 0px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 15px;
  height: 100vh;
  overflow: scroll;
}

.info{
  font-size: 12px;
  color: black;
  font-weight: bolder;
  -webkit-text-stroke: 0.1px white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.comic{
  height: 100%;
}

.comic-wrapper {
  display: flex;
  width: 146px;
  height: 310px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 10px;
  cursor: pointer;
}

.comic-wrapper:hover{
  transform: scale(1.01);
  box-shadow: 1 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.comic-thumbnail {
  height: 200px;
  width: 170px
}

.comic-info{
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  justify-content: space-around;
  background-color: rgb(206,32,19);
  border: 1px black solid;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 8px;
  -webkit-text-stroke: 0.5px black;
  color: #fff;
  animation: fadeIn 1.5s;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.comic-info-light-mode{
  color: black;
   -webkit-text-stroke: 0.1px white;
  background-color: #B3E1F9;
}

.description{
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-around;
  background-color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-size: 13px;
  -webkit-text-stroke: 0.5px black;
  color: black;
  animation: fadeIn 1.5s;
}

</style>