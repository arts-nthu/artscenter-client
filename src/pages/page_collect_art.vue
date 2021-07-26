<template lang="pug">
  .activity
    b-container(fluid).container
      .center
        h2 {{$t('page_collect_art.name')}}
        ul.tab
          li(@click="clickTab(0)" v-bind:class="{ active: tabState == 0 }" :style="changeLiStyle($i18n.locale)") {{$t('page_collect_music.name')}}
          li(@click="clickTab(1)" v-bind:class="{ active: tabState == 1 }" :style="changeLiStyle($i18n.locale)") {{$t('page_collect_art.name')}}
      b-row.content
        b-col(cols="12" lg="6")
          .cover-pic1
        b-col(cols="12" lg="6")
          h3 {{$t('page_collect_art.name')}}
          .intro
            p {{$t('page_collect_art.intro_1')}}
            p {{$t('page_collect_art.intro_2')}}
            p {{$t('page_collect_art.intro_3')}}
      .slider
        img(src="../assets/collect/1-1.png")
        img(src="../assets/collect/1-2.png")
        img(src="../assets/collect/1-1.png")
</template>

<script>

export default {
  metaInfo: {
    title: '清華藝集', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function () {
    return {
      tabState: 1
    }
  },
  components: {

  },
  methods: {
    clickTab: function(event){
      if(event==0){
        this.$router.push('/collect/music')
      }else if(event==1){
        this.$router.push('/collect/art')
      }
    },
    changeLiStyle(lang){
      if(lang == 'en'){
        return {
          'width':'300px'
        }
      }
      else if(lang == 'ch'){
        return {
          'width':'200px'
        }
      }
    }
  },
  mounted() {
      
    }
}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.activity
  background-color: $dark_brown
  padding: 100px 90px 0 90px
  min-height: 100vh
  .container
    position: relative
    min-height: 100vh
    .slider
      @include flexCenterRow
      justify-content: flex-start
      margin: 40px 0
      flex-wrap: wrap
      img
        width: 280px
        height: auto
        margin: 0 20px
    h2
      color: white
      font-size: 30px
      font-weight: 100
    .tab
      list-style: none
      color: white
      display: flex
      justify-content: center
      align-items: center
      margin: 30px 0
      cursor: pointer
      padding: 0
      li
        border: 1px solid white
        text-align: center
        height: 50px
        width: 200px
        font-size: 20px
        line-height: 50px
        &:first-child
          border-radius: 50px 0 0 50px
        &:last-child
          border-radius: 0 50px 50px 0
        &.active
          color: #e65e5e
          background-color: white
    .center
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      p
        color: white
        margin: 80px 0 30px 0
        font-size: $font_middle
        font-weight: 100
        letter-spacing: 1.3px
        color: #e4e0de
    .content
      margin-top: 70px
      .pic
        margin-bottom: 70px
        width: 120px
      .intro
        p
          color: #e4e0de
          font-size: $font_middle
          letter-spacing: 2.4px
          font-weight: 100
          margin: 25px 0
          line-height: 2
          text-indent: 30px
      h3
          color: #e65e5e
          font-size: 25px
          margin: 50px 0 30px 0
      .teacher
        color: white
        list-style: none
        font-weight: 100
        letter-spacing: 2.4px
        padding: 0
        li
          line-height: 3

      .cover-pic1
        background-image: url("../assets/collect/1-1.png")
        background-size: cover
        width: 480px
        height: 670px
        -webkit-clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        margin-left: -50px
        margin: 20px
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px
    .container
      .content
        .cover-pic1
          width: 90%
          margin: auto
      .slider

        img
          margin: 10px 20px
      .tab
        flex-wrap: wrap
        li
          margin: 20px
          border-radius: 100px
          &:first-child
            border-radius: 100px
          &:last-child
            border-radius: 100px
</style>
