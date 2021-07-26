<template lang="pug">
  .friend-page
    .container
      .title2
        .en Friends
        .ch 清藝之友
      Friends

</template>

<script>
import Friends from "../components/Friends"

export default {
  metaInfo: {
    title: '清藝之友', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {
      friendData: {}
    }
  },
  components: {
    Friends
  },
  mounted() {
      
    }
}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.friend-page
  background-color: $dark_brown
  padding: 100px 90px 0 90px
  font-size: $font_middle
  .container
    border-style: solid
    border-width: 3px 0 0 0
    border-color: $hight-light
    position: relative
    margin: auto
    .title2
      @include flexCenterRow
      justify-content: center
      flex-direction: column
      color: $hight-light
      position: absolute
      background-color: $dark_brown
      position: absolute
      width: 200px
      right: 50%
      transform: translateX(50%) translateY(-70%)
      letter-spacing: 4.6px
      .ch
        font-size: 32px
      .en
        font-size: 20px
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px
    .container
      padding: 0
</style>
