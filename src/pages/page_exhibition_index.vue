<template lang="pug">
.shows
  ._container
    .event-container
      .title2
        .en Program
        .ch 展演節目
      .cat-container
        b-container(fluid)
          b-row.cat-group.desktop
            b-col.cat.cat1(@click="go('public_art')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 公共藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Public Art
            b-col.cat.cat2(@click="go('visual_art')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 視覺藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Visual Art
            b-col.cat.cat3(@click="go('show')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 表演藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Performing Art
            b-col.cat.cat4(@click="go('film')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 電影藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Film Art
          .cat-group-m.mobile
            .cat-m.cat-m1(@click="go('public_art')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 公共藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Public Art
            .cat-m.cat-m2(@click="go('visual_art')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 視覺藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Visual Art
            .cat-m.cat-m3(@click="go('show')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 電影藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Film Art
            .cat-m.cat-m4(@click="go('film')")
              h3.subtitle(v-if="$i18n.locale == 'ch'") 電影藝術
              h3.subtitle(v-if="$i18n.locale == 'en'") Film Art
      .down
        .center-between
          //- router-link.apply(tag="div" to="/events/public_art") 查看全部
          //- .apply(@click="moveTo") 展演申請
        .sub-title
          .text(style="font-size: 22px") Application for Exhibition and Performance<br>藝中展演申請表單
        .download
          //a.file(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2172/411945219.doc")
            .file-name 1. 國立清華大學藝術中心展覽申請簡章與表格
            img.link(src="../assets/download.png")
          a.file(href="https://arts.nthu.edu.tw/static/file/國立清華大學藝術中心展覽申請簡章.doc")
            .file-name 1. 國立清華大學藝術中心展覽申請簡章與表格
            img.link(src="../assets/download.png")
          a.file(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2172/206183883.docx")
            .file-name 2. 國立清華大學藝術中心表演藝術活動申請審查作業要點
            img.link(src="../assets/download.png")
          a.file(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2172/102106336.doc")
            .file-name 3. 國立清華大學藝術中心表演藝術申請表格
            img.link(src="../assets/download.png")
          a.file(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2172/432183289.docx")
            .file-name 4. 國立清華大學藝術中心表演藝術切結書
            img.link(src="../assets/download.png")


</template>
<script>
export default {
  metaInfo: {
    title: '展演節目', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {
    }
  },
  methods: {
    go: function(event) {
        this.$router.push('/exhibitions?typeOfArt='+event)
    },
    moveTo: function(){
      $('html, body').animate({
        scrollTop: $(".sub-title").offset().top-150
      }, 800);
    }
  },
  mounted() {
      this.$vuetify.goTo(0)
    }
}
</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.shows
  @include flexCenterRow
  overflow: hidden
  background-color: $dark_brown
  padding-top: 100px
  .mobile
      display: none
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
  .event-container
    border-style: solid
    border-width: 3px 0 0 0
    border-color: $hight-light
    position: relative
    .cat-container
      position: relative
      width: 100%
      height: 700px
      .cat-group
        margin-top: 70px
        position: absolute
        right: 50%
        transform: translateX(50%)
        width: 100%
        flex-wrap: nowrap
        display: flex
        justify-content: center
        align-items: center
        .cat
          position: relative
          height: 550px
          min-width: 380px
          max-width: 380px
          background-size: cover
          -webkit-clip-path: polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)
          clip-path: polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)
          filter: brightness(40%)
          cursor: pointer
          &:hover
            filter: brightness(100%)
          .subtitle
            position: absolute
            bottom: 5px
            right: 40%
            color: white

        .cat1
          background-image: url("../assets/publish/1.png")
          left: 110px
          .subtitle
            left: 29%
        .cat2
          background-image: url("../assets/b2.png")
          left: 0px
        .cat3
          background-image: url("../assets/b3.png")
          left: -110px
        .cat4
          background-image: url("../assets/b4.png")
          left: -220px
    .down
      @include flexCenterCol
      font-weight: 100
      padding: 0 0 80px 0
      .center-between
        @include flexCenterRow
      .apply
        @include flexCenterRow
        font-size: 20px
        letter-spacing: 1.6px
        color: $light-white
        width: 160px
        height: 50px
        border-radius: 25px
        border: solid 2px #ffffff
        margin-bottom: 60px
        cursor: pointer
        margin-right: 30px
        margin-left: 30px
        &:hover
          background-color: white
          color: black
      .sub-title
        position: relative
        margin: 70px  0
        border: solid 1px $hight_light
        border-width: 0 0 1px 0
        width: 100%
        text-align: center
        .text
          position: absolute
          left: 50%
          top: 50%
          transform: translateX(-50%) translateY(-50%)
          color: $hight-light
          font-size: 32px
          letter-spacing: 4.8px
          background-color: $dark_brown
          padding: 0 20px

      .download
        display: flex
        justify-content: space-between
        flex-direction: column
        .file
          @include flexCenterRow
          padding: 15px 15px
          justify-content: space-between
          cursor: pointer
          .file-name
            font-size: 20px
            letter-spacing: 3.3px
            color: #ffffff
          .link
            margin-left: 30px
            filter: brightness(0.6) grayscale(100)
          &:hover
            background-color: rgba(255, 255, 255, 0.1)
            .link
              filter: brightness(1) grayscale(0)
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px

    .event-container
      .cat-container
        height: initial
        margin-top: 40px
        .cat-group
          flex-direction: column
          height: 300px
          width: 100%
          .cat
            width: 100%
            height: 100%
            position: initial
            -webkit-clip-path: none
            clip-path: none
        .cat-group-m
          +flexLayout('center', 'col')
          width: 100%
          margin-bottom: 80px
          .cat-m
            width: 100%
            height: 300px
            margin: 10px 0
            background-image: url("../assets/b2.png")
            background-size: cover
            background-position: center
            color: white
            text-align: center
            padding-top: 20px
            text-shadow: 0.1em 0.1em 0.05em #333
          .cat-m1
            background-image: url("../assets/b1.png")
          .cat-m2
            background-image: url("../assets/b2.png")
          .cat-m3
            background-image: url("../assets/b3.png")
          .cat-m4
            background-image: url("../assets/b4.png")

    .mobile
      display: relative
    .desktop
      display: none !important
    .center-between
      flex-wrap: wrap !important
    .sub-title
      margin: 100px 0 80px 0 !important
    .down
      .sub-title
        .text
          font-size: 22px !important
</style>
