<template lang="pug">
  .event-content-page
      PublicationsPage
</template>

<script>
import PublicationsPage from "../components/publications_page"
export default {
  metaInfo: {
    title: '活動月曆', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {
      msg: "活動月曆"
    }
  },
  components: {
    PublicationsPage
  },
  mounted () {

  }
}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.publications-content-page

</style>
