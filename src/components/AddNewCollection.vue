<template>
<div class = "contains">
  <div class="collection-form">
      
      <form @submit.prevent="addNewCollection" class="new-collection">
                    <div class="title">
                    <label for="title">Collection Name: </label>
                    <input class="collection-title-input" name="title" type="text" placeholder="Title" v-model="newCollection.collectionIssueName"/>
                    </div>
                    <div class="visibility"> 
                    
                    <label for="visibility">Mark Disabled </label>
                    <input type="checkbox"  name="visibility" v-model="newCollection.isDisabled" /> Disabled
                    </div>
                    <div class="trade">
                    
                     <label for="Open-to-trade">Open to Trade: </label> 
                     <input type="checkbox"  name="Open-to-trade" v-model="newCollection.tradeable" /> Open to Trade
                    </div>
                    <div class="description">
                      <label for="description">Description</label>
                    <textarea name="description" v-model="newCollection.collectionDescription"/>   
                    </div>
                    <div class="btn"><input type="submit" value="Save" /></div>
        </form>
  </div>
  </div>
</template>

<script>
import collectionService from '../services/collectionService'
export default {
name: 'AddCollection',
  data(){
    return{
      newCollection:{
        collectionIssueName: '',
        tradeable : false,
        is_favorited : false,
        userId:'' ,
        collectionDescription: '',
        isDisabled: ''
      }
    }
  },
  methods:{
    addNewCollection(){
      collectionService
        .addCollection(this.newCollection)
        .then(response => {
           if(response.status === 200){
             alert("successfully added")
             this.$router.push('/addComic')
           } 
        });
         
        
    }
  }
}
</script>

<style scoped>

.new-collection{
  font-family: "Comic Sans MS", "Comic Sans", cursive;
    color: black;
    text-shadow: white;
    text-decoration: none;
    -webkit-text-stroke: 0.3px white;
  text-align: left;
}


.collection-form{
  height: 100%;
  width:100%;
}


</style>