<template lang="pug">
  .event-content-page
      ExhibitionPage(@changeTitle="changeTitle")
</template>

<script>
import ExhibitionPage from "../components/Exhibition_page"
export default {
  data: function() {
    return {
      eventTitle: ""
    }
  },
  metaInfo: {
    title: this.eventTitle, // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },  
  components: {
    ExhibitionPage
  },
  methods: {
    changeTitle: function (t) {
      if(t!=undefined){
        // this.eventTitle = t
        document.title = t + " - 清大藝文中心"
        
      }
    }
  },
  mounted() {
      
    }
}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.event-content-page
  
</style>