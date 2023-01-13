<template>
  <div class="body-container">
    <div class="My-collection">
          <h2>My Collections</h2>
          
          
          
      </div>
      
      <div class="Favorite-collections">
          <h2>Favorite Collections</h2>
          
      </div>
      <div class="history">
          <h2>View again</h2>
          
      </div>
    
  </div>
</template>

<script>

export default {
name: 'dashoverview',
components: {

}
}
</script>

<style scope>

.My-collection{
  margin-top:2rem;
    margin-left: 5rem;
    border: 2px solid black;
    border-radius: 10px;
    width: 700px;
    height: 200px;
    padding: 20px;
}
.Favorite-collections{
  margin-top:2rem;
    margin-left: 5rem;
    border: 2px solid black;
    border-radius: 10px;
    width: 700px;
    height: 200px;
    padding: 20px;
}

.history{
  margin-top:2rem;
    margin-left: 5rem;
    border: 2px solid black;
    border-radius: 10px;
    width: 700px;
    height: 200px;
    padding: 20px;
}
.body-container{
  height: 100%;
  width: 100%;
  margin:20px;
}

.edit{
  text-align: right;
}



</style>