<template>

            <Flickity  class="carousel" ref="flickity" :options="flickityOptions">
                <div  v-for="image in images" :key="image">
                <img class="carousel-cell" v-bind:src="image"/>
                </div>
            </Flickity>
</template>

<script>



import Flickity from 'vue-flickity'

export default {
name: "carousel",
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
        groupCells: 3,
        autoPlay: true
      },
        images: [
"https://m.media-amazon.com/images/I/51Vk6ltW8EL._AC_SY780_.jpg",
"https://tools.toywiz.com/_images/_webp/_products/lg/75960620268300131.webp",
"https://img.buzzfeed.com/buzzfeed-static/static/2022-03/30/23/asset/759c159237df/sub-buzz-534-1648681892-8.jpg",
"https://m.media-amazon.com/images/I/61hM-N+yPfL._AC_SY780_.jpg",
"https://cdn.pastemagazine.com/www/system/images/photo_albums/bestcomiccovernov17/large/captainamerica695-chrissamnee.jpg?1384968217",
"https://s2982.pcdn.co/wp-content/uploads/2019/07/Strange-Tales-156.jpg.optimal.jpg",
"https://i.ebayimg.com/images/g/BJIAAOSwE7Bels48/s-l500.jpg",
"http://graphics.wsj.com/avengers/thumbs/7019.jpg",
"https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2020/03/11171601/CM-1942-602x840.jpg",
"https://cdn.tutsplus.com/cdn-cgi/image/width=360/psd/uploads/legacy/0651_Comics/1.jpg",
"https://media.comicbook.com/uploads1/2014/07/3823022-weaponetchedholofoilcov-102070.jpg",
"https://img.buzzfeed.com/buzzfeed-static/static/2022-03/25/17/asset/86456cf1bf79/sub-buzz-2388-1648229594-1.jpg?crop=540%3A800%3B696%2C144&downsize=700%3A%2A&output-quality=auto&output-format=auto"
]

    }
}
}

</script>

<style scoped>
flickity-enabled {
  position: relative;
}

.carousel-cell {
  width: 90%; /* half-width */
  height: 200px;
  margin-right: 10px;
}
</style>