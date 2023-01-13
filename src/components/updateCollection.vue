<template>
  <div class="collection-form">
      <h2>This is update form</h2>
      <form @submit.prevent="updateCollection" class="update-collection">
                    <div class="title">
                    <label for="title">Collection Name: </label>
                    <input class="collection-title-input" name="title" type="text" placeholder="Title" v-model="editedCollection.collectionIssueName" />
                    </div>
                    <div class="visibility"> 
                    
                    <label for="visibility">Mark Private </label>
                    <input type="checkbox"  name="visibility"  v-model="editedCollection.privateCol"/> Private
                    </div>
                    <div class="trade">
                    
                     <label for="Open-to-trade">Open to Trade: </label> 
                     <input type="checkbox"  name="Open-to-trade"  v-model="editedCollection.tradeable"/> Open to Trade
                    </div>
                    <div class="description">
                      <label for="description">Description</label>
                    <textarea name="description" v-model="editedCollection.collectionDescription"/>   
                    </div>
                    <div class="btn"><input type="submit" value="Save" /></div>
      </form>
  </div>
</template>

<script>
import collectionService from '../services/collectionService'
export default {
props:{
collectionID: Number
},
data(){
        return {
            editedCollection: {
                collectionIssueName: '',
                tradeable : false,
                is_favorited : false,
                userId:'' ,
                privateCol: false,
                collectionDescription: '',
            }
        }
    },
methods:{
    
    
    
    updateCollection(){
        const collection = {id:this.collectionID, collection: this.editCollection};
        collectionService.
        editCollection(collection.id,collection)
        .then(response =>{
            if(response.status === 200){
             alert("successfully edited")
           } 
        })
    }
}
}
</script>

<style scoped>
.update-collection{
  text-align: left;
}

.form-container{
    margin-top:2rem;
    margin-left: 5rem;
    border: 2px solid black;
    border-radius: 10px;
    width: 700px;
    height: 200px;
    padding: 20px;
}
.collection-form{
  height: 100%;
  width:100%;
}
</style>