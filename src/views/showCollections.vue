<template>
  <div class="display-collection">
      <h2>This will display all collection. we can reuse this on any page that needs to display collections I think?</h2>
      <p><collection-list /></p>
  </div>
</template>

<script>
import collectionList from '../components/collectionList.vue'
export default {
  components: {
    collectionList
  }
}
</script>

<style scope>

</style>