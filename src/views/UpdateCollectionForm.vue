<template>
  <div class="collection-form">
    
    <div class="form-container">
      <update-collection />
      
    </div>
      
  </div>
</template>

<script>
import updateCollection from '../components/updateCollection.vue'
export default {
components:{
    updateCollection
}
}
</script>

<style scoped>
.update-collection{
  text-align: left;
  color: pink;
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