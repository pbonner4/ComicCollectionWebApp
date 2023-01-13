<template>
<div class = "contains">
  <section class="dropdown-wrapper">
      <div @click="isVisible=!isVisible" class="selected-comic">
          <span @submit.prevent="addComicToCollection"></span>
          <span>Click Here to Search Our Comic Database To add to Your Collection!</span>
      </div>
      <div v-if="isVisible" class="dropdown">
          <i class="fa-solid fa-magnifying-glass fa-1x"><input v-model="searchQuery" v-on:keyup.enter="getListOfComicsBySearch(searchQuery)" id="search" type="text" placeholder="Search Comics..." /></i>
          <div class="options-from-search-result" >
              <ul>
                  <li class="dropdown-option" v-for="comic in dataReturnedFromSearch" v-bind:key="comic.comicId" v-on:click="selectedItem.push(comic.comicId); selectedComics.push(comics.comics)"><input type="checkbox">{{' ' + comic.comicTitle}}</li>
              </ul>  
          </div>
          <div class="options-from-search-result" >
              <h1>Your Collections</h1>
              <ul>
                 <li class="dropdown-option" v-for="collection in currentUserCollections" v-bind:key="collection.collectionId" v-on:click="selectedCollection = collection.collectionId"><input type="checkbox">{{' '+ collection.collectionIssueName}}</li>
              </ul>  
          </div>
          <button v-on:click="addComicToCollection">Add Comic to Your Collection!</button>
      </div>
  </section>
  </div>
</template>

<script>
import collectionService from '../services/collectionService'
export default {
    data(){
        return{
            
            currentUserCollections:[],
            searchQuery:'',
            selectedItem:[],
            selectedComics: [],
            selectedCollection: [],
            isVisible:false,
            dataReturnedFromSearch: []
        }
    },
    created() {
       collectionService.listCollection().then(response=>{
            this.currentUserCollections = response.data; 
        });        
    },   
    computed:{
        filteredComic(){
            
            if(this.searchQuery===""){
                return this.searchResult
            }else{
                return this.searchResult.filter((comic)=>{
                    return comic.comicTitle.toLowerCase().includes(this.searchQuery.toLowerCase())
                    });
                
            }
        },
        
    },
    methods:{
        selectItem(comic){
            this.selectedItem = comic;
        },
        addComicToCollection(){
            console.log(this.selectedItem)
            collectionService.addComicToCollection(this.selectedCollection,this.selectedItem).then(response=>{
                if(response.status===200){
                    alert(response.status)
                    alert("successfully added")
                    this.$router.push('/dashboard')
                }
            })
        },

        getListOfComicsBySearch(searchQuery){
            collectionService.getComicsBySearch(searchQuery).then(response=>{
            this.dataReturnedFromSearch = response.data; 
        });
        }
       
    }

}
</script>

<style scoped>

.contains{
    height: 100vh;
    width: 100%;
    background-image: url('../images/background.jpg');
    background-size: 2200px;
}

.dropdown-wrapper{
    grid-gap: 300px;
    max-width: 350px;
    position: relative;
    margin:0 auto;
}

.selected-comic{
    text-align: center;
  font-family: bangers;
  font-size: 2em;
  margin-top: 7%;
  z-index: 1;
  color: #fff;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  margin-bottom: 7%;
}

span:hover{
    color:black;
     text-shadow: white;
  -webkit-text-stroke: 0.5px white; 
}
.dropdown{
    position: absolute;
    border: 2px solid navy;
    top:46px;
    left:0;
    right:0;
    background-color: white;
    max-width: 100%;
    margin-top: 50px;
    align-items: center;
}
.dropdown {
    width: 90%;
    height: 30px;
    border: 2px solid navy;
    font-size: 16px;
    padding-left: 5px;
}
.options-from-search-result{
    width: 100%;
     text-align: center;
  font-family: bangers;
  margin-top: 7%;
  z-index: 1;
  color: #fff;
  text-shadow: black;
  -webkit-text-stroke: 0.5px black; 
  margin-bottom: 5%;
}
ul{
    list-style:none;
    text-align: left;
    padding-left:8px;
    max-height: 200px;
    overflow-y: scroll;
}

.dropdown-option{
    width: 100%;
    border-bottom: 1px solid black;
    padding: 10px;
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 22%, rgba(0,212,255,1) 100%);
    cursor: pointer;
    background: rgb(206,32,19);
    
    }

li {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: white;

    text-shadow: black;
    text-decoration: none;
    -webkit-text-stroke: 0.3px black;
}

i{
    margin-top: 50px;
    align-items: center;
}

button{
background-color: #fbca03;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-shadow: black;
  color: #BE080E;
  font-size: 16px;
  -webkit-text-stroke: 0.2px black;
  margin-top: 5px;
  cursor: pointer;
}
</style>