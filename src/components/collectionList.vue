<template>
  <div class="display-collections">
      <div v-for="collection in collections" v-bind:key="collection.id" class="collection">
        <p>{{collection}}</p>
      </div>
  </div>
</template>

<script>
import collectionService from '../services/collectionService'
export default {
    name: 'display-collection',
    data(){
        return{
            collections: []
        }
    },
    created(){
        collectionService.listCollection().then(response=>{
            this.collections = response.data;
            
        });        
    }

}
</script>

<style scoped>


</style>