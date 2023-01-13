<template>
  <Flickity  class="carousel" ref="flickity" :options="flickityOptions">
    <div  v-for="testimonial in testimonials" :key="testimonial">
       <div class="carousel-cell">
         <h3> {{testimonial}} </h3>
       </div>
    </div>
  </Flickity>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: "carousel-of-testimonials",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        freeScroll: true,
        setGallerySize: true,
        groupCells: 1,
        autoPlay: true
      },
      testimonials: [
        " This App is awesome! It really helps me display my comics! -Conor M.",
        " Wow! I'd recommend this service to everyone! -Tom B.",
        " All my comics in one place, and I can trade and make friends along the way. Cool! -Michael J.",
        "I would rate this app a 10/10 its exactly what I needed -Kobe B.",
        "Exactly what I was looking for! -Derrick R.",
        "I can find comics I'm looking for, and discover new ones! Awesome! These reviews are NOT fake! Larry J."
      ]
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel .carousel-cell {
  width: 50%; /* full width */
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  background-color: white;
  border-radius: 8%;
  margin-right: -25px;
  margin-left: -25px;
}

.carousel-cell h3 {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  text-align: center;
}
</style>