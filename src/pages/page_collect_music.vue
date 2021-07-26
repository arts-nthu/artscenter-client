<template lang="pug">
  .activity
    b-container(fluid).container
      .center
        h2 {{$t('page_collect_music.name')}}
        ul.tab
          li(@click="clickTab(0)" v-bind:class="{ active: tabState == 0 }" :style="changeLiStyle($i18n.locale)") {{$t('page_collect_music.name')}}
          li(@click="clickTab(1)" v-bind:class="{ active: tabState == 1 }" :style="changeLiStyle($i18n.locale)") {{$t('page_collect_art.name')}}
      b-row.content
        b-col(cols="12" lg="6")
          .cover-pic1
           img.big-img(:src="bigImgURL")
        b-col(cols="12" lg="6")
          h3 {{$t('page_collect_music.name')}}
          h5(style="color: white") 【清華AI樂團 正式招募團員】
          a(target="_blank" href="https://drive.google.com/open?id=0B7nuVzsxOsuEbF9ZZ2JSRWJZX0xUazZia2xwYThSdEd5Tmhz")
            b-button.btnAI(variant="outline-primary") 詳情資訊
          a(target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSevmu1zI7_oXKvuE3O3gdmWWxBy7dgyYtsJV7_dRmiYKCqnNw/viewform")
            b-button.btnAI(variant="outline-success") 我想報名
          .intro
            p {{$t('page_collect_music.intro_1')}}
            p {{$t('page_collect_music.intro_2')}}
            p {{$t('page_collect_music.intro_3')}}
      b-row.slider
        ul(v-for="img in imgURLs")
         li(@click='getIndex(img)')
          img.small-img(:src="img.url" v-bind:class="{ active: isSelected(img.id) }")
      b-row(class="mb-5").links
        b-col.col(v-for="(link,index) in links" :key="index" cols="12" lg="6" style="height: 350px; position: relative;")
          a(:href="link.url" target="_blank")
            .img(:style="setBackgroundImage(link.img)")
            .p-block
              .p-text {{ link.title }}

</template>

<script>

export default {
  metaInfo: {
    title: '清華樂集', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {
      tabState: 0,
      bigImgURL: require('../assets/collect/2-7.jpg'),
      selectImgId: 7,
      imgURLs: [
        {id: 1, url: require('../assets/collect/2-1.jpg')},
        {id: 2, url: require("../assets/collect/2-2.jpg")},
        {id: 3, url: require("../assets/collect/2-3.jpg")},
        {id: 4, url: require("../assets/collect/2-4.jpg")},
        {id: 5, url: require("../assets/collect/2-5.jpg")},
        {id: 6, url: require("../assets/collect/2-6.jpg")},
        {id: 7, url: require("../assets/collect/2-7.jpg")},
        {id: 8, url: require("../assets/collect/2-8.jpg")},
      ],
      links: [
        {
          url: "https://www.youtube.com/watch?v=zKCVIYriTD0",
          img: require('../assets/collect/links-1.jpg'),
          title: "清華首創AI樂團 人機共探音樂新境界/Youtube"

        },
        {
          url: "https://udn.com/news/story/7266/3825701",
          img: require('../assets/collect/links-2.jpeg'),
          title: '清大成立AI樂團 不只會伴奏還能自動跟譜/udn聯合新聞網'
        },
        {
          url: "https://tw.news.yahoo.com/%E6%B8%85%E8%8F%AF%E5%A4%A7%E5%AD%B8ai%E6%A8%82%E5%9C%98%E6%88%90%E7%AB%8B-%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E8%AD%9C%E6%9B%B2-%E7%9C%9F%E4%BA%BA%E6%BC%94%E5%A5%8F-120408630.html",
          img: require('../assets/collect/links-3.jpg'),
          title: '清華大學AI樂團成立 人工智慧譜曲、真人演奏/Yahoo新聞'
        },
        {
          url: 'https://taronews.tw/2019/05/21/348049/',
          img: require('../assets/collect/links-4.jpg'),
          title: '清大推人工智慧樂團 開發音樂展演新型態/芋傳媒'
        }
      ]
    }
  },
  components: {

  },
  methods: {
    setBackgroundImage(img) {
      return {
        'background-image': 'url('+img+')'
      }
    },
    clickTab: function(event){
      if(event==0){
        this.$router.push('/collect/music')
      }else if(event==1){
        this.$router.push('/collect/art')
      }

    },
    getIndex(img) {
     this.bigImgURL = img.url;
     this.selectImgId = img.id;
    },
    isSelected(id) {
     return this.selectImgId === id;
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
      .btnAI
        margin: 20px 5px
        font-size: 25px
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
       height: 700px
       .big-img
        height: 100%
    .slider

     .small-img
      width: 100px
      height: 100px
      &.active
       border: 5px #ef9350 solid
    .links
      position: relative
      .col
        margin: 20px 0px
        .img
          height: 90%
          background-size: cover
          background-size: 100% 100%
          &:hover
            background-size: 120% 120%

        .p-block
          color: white
          position: absolute
          letter-spacing: 3px
          width: 100%
          .p-text
            font-size: $font_small
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px
    .container
      .content
        .cover-pic1
          width: 90%
          margin: auto
      .slider
          margin: 10px 20px
      .tab
        flex-wrap: wrap
        li
          margin: 20px
          width: 100px
          border-radius: 100px
          &:first-child
            border-radius: 100px
          &:last-child
            border-radius: 100px
</style>
