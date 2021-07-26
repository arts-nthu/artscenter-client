<template lang="pug">
  .history
    b-container(fluid).container
      .title2
        .en History
        .ch 中心簡史
      b-row.content
        b-col(xl="6" cols="12")
          .cover-pic1
          .cover-pic2
        b-col(xl="6" cols="12")
          img.pic(src="../assets/menu/logo.png")
          .intro
            p {{$t('page_history.p1')}}
            p {{$t('page_history.p2')}}
            p {{$t('page_history.p3')}}
            p {{$t('page_history.p4')}}
            p {{$t('page_history.p5')}}
            p {{$t('page_history.p6')}}
            p {{$t('page_history.p7')}}
          h3 歷代主任
          ul.teacher
            li 邱誌勇 (2020 -     )
            li 蕭銘芚 (2019 - 2020)
            li 江怡瑩 (2017 - 2019)
            li 王小璠 (2012 - 2017)
            li 劉瑞華 (2006 - 2012)
            li 黃朝熙 (2002 - 2006)
            li 李家維 (2000 - 2002)
            li 楊敏京 (1998 - 2000)
            li 李家維 (1997 - 1998)
            li 彭明輝 (1994 - 1996)
            li 徐小虎 (1990 - 1993)
            li 宋文里 (1988 - 1990)
</template>

<script>

export default {
  metaInfo: {
    title: '中心簡史', // set a title
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

  },
  mounted() {
      
    }
}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.history
  background-color: $dark_brown
  padding: 100px 90px 0 90px
  min-height: 100vh
  .container
    border-style: solid
    border-width: 3px 0 0 0
    border-color: $hight-light
    position: relative
    min-height: 100vh
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
      letter-spacing: 4.8px
      .ch
        font-size: 32px

      .en
        font-size: 20px

    .content
      margin-top: 70px
      .pic
        margin-top: 10px
        margin-bottom: 70px
        width: 120px
      .intro
        p
          color: white
          font-size: $font_middle
          letter-spacing: 2.8px
          font-weight: 100
          margin: 75px 0
          line-height: 1.8
      h3
          color: $hight-light
          font-size: 32px
          margin: 50px 0 30px 0
      .teacher
        color: white
        list-style: none
        font-weight: 100
        letter-spacing: 2.4px
        padding: 0
        li
          font-size: $font_middle
          line-height: 2.1


      .cover-pic1
        background-image: url("../assets/center1.jpg")
        background-size: cover
        width: 480px
        height: 670px
        -webkit-clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        margin-left: -50px
        margin: 20px

      .cover-pic2
        background-image: url("../assets/center2.jpg")
        background-size: cover
        width: 480px
        height: 670px
        -webkit-clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        margin-left: 20px
        margin-top: 60px
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px
    .container
      max-width: initial
      .content
        .cover-pic1
          width: 100%
          height: 50vw
          -webkit-clip-path: none
          clip-path: none
        .cover-pic2
          width: 100%
          height: 50vw
          -webkit-clip-path: none
          clip-path: none
</style>
