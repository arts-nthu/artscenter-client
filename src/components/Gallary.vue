<template>
  <div id="myModal" class="modal">
    <span class="close cursor" @click="closeModal">&times;</span>
    <div class="modal-content">

      <div v-for="(image,index) in slideImages" :key="index" class="mySlides" >
        <div class="numbertext">{{ index }} / {{ images.length }}</div>
        <img :src="getMediaURL(image.file)" style="width:100%" class="demo">
      </div>

      <!-- Next/previous controls -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>

      <!-- Caption text -->
      <div class="caption-container">
        <p id="caption"></p>
      </div>

      <!-- Thumbnail image controls -->
      <!--
      <div v-for="(image,index) in images" :key="index" class="column">
        <img class="demo" :src="getMediaURL(image.file)" @click="currentSlide(1)" alt="Nature">
      </div>
      -->

    </div>
  </div>
</template>

<script>
export default {
    props: {
      images: Array
    },
    data() {
      return {
        slideIndex: 1,
        slideImages: []
      }
    },
    mounted() {
      this.slideIndex = 1
      this.slideImages = this.images
      this.$nextTick(() => {
        this.showSlides(this.slideIndex)
      })

    },
    methods: {
      closeModal() {
        this.$emit('closeModal')
        console.log("close modal in Gallary")
      },
      plusSlides(n) {
        this.showSlides(this.slideIndex += n);
      },

      // Thumbnail image controls
      currentSlide(n) {
        this.showSlides(this.slideIndex = n);
      },

      showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        console.log(this.slideIndex-1)
        console.log(slides)
        slides[this.slideIndex-1].style.display = "block";
        dots[this.slideIndex-1].className += " active";
        captionText.innerHTML = dots[this.slideIndex-1].alt;
      },
      getMediaURL(file){
        return process.env.BASE_API + '/static/uploads/' + file
      },
    }
  }
</script>

<style lang="scss" scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

/* Hide the slides by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

img.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
