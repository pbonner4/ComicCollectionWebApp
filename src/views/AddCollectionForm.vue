<template>
  <div class="collection-form">
    
    <div class="form-container">
      <add-new-collection />
      
    </div>
      
  </div>
</template>

<script>
import AddNewCollection from '../components/AddNewCollection.vue'
export default {
  name: 'AddCollection',
  components:{
    AddNewCollection
  }
  

}
</script>

<style scoped>
.new-collection{
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