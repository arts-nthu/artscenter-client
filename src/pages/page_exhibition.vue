<template lang="pug">
  .event-page
    b-container(fluid).container
      .title2
        .en Program
        .ch 全部展演
      ExhibitionTag
      ExhibitionWaterfall


</template>

<script>
import ExhibitionWaterfall from "../components/Exhibition_waterfall"
import ExhibitionTag from "../components/Exhibition_tag"
export default {
  metaInfo: {
    title: '全部展演', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {

    }
  },
  components: {
    ExhibitionWaterfall,
    ExhibitionTag
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
      width: 100%
      right: 50%
      margin-bottom: 10px
      transform: translateX(50%) translateY(-70%)
      letter-spacing: 3.4px
      .ch
        font-size: 32px
        //right: 50%
        //transform: translateX(50%) translateY(-50%)

      .en
        font-size: 20px
        white-space: noWrap
    .event-tag
      margin-top: 80px
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px
</style>
