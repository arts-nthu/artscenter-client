<template lang="pug">
  .event-page
    .container
      .title2
        .en Publication
        .ch 出版與典藏
      Publications
</template>

<script>
import Publications from "../components/publications"
//import EventTag from "../components/event_tag"
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
    Publications,
    //EventTag
  },
  mounted() {
      this.$vuetify.goTo(0)
    }
}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.event-page
  background-color: $dark_brown
  padding: 100px 90px 0 90px
  .container
      border-style: solid
      border-width: 3px 0 0 0
      border-color: $hight-light
      position: relative
      .title2
        @include flexCenterRow
        justify-content: center
        flex-direction: column
        color: $hight-light
        position: absolute
        background-color: $dark_brown
        position: absolute
        width: 220px
        right: 50%
        transform: translateX(50%) translateY(-70%)
        letter-spacing: 3.4px
        .ch
          font-size: 32px
          //right: 50%
          //transform: translateX(50%) translateY(-50%)

        .en
          font-size: 20px
</style>
