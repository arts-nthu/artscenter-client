<template lang="pug">
  .activity
    b-container(fluid).container
      .title2
        .en Activity
        .ch 活動概述
      .center
        p {{$t('page_activity.abstract')}}
        //p 藝術中心希望透過各種層次的「藝術參與」，營造活潑的社區藝術生活。不管是由我們自行策劃，或與專業單位合作，都以創造藝術社群與清大的互動為主要目標。一方面，藝術中心策劃主辦精彩的藝術活動；另一方面，我們也在校園內參與改造許多藝術空間，如清大合勤廳、教育館藝術空間、陽光走廊、大禮堂等，鼓勵更多元的藝文管道，例如藝術性學生社團、商業團體、藝術基金會等類型的展演，也都能在校園蓬勃發展。
        ul.tab
          li(@click="clickTab(0)" v-bind:class="{ active: tabState == 0 }") {{$t('page_activity.visual_art')}}
          li(@click="clickTab(1)" v-bind:class="{ active: tabState == 1 }") {{$t('page_activity.music')}}
          li(@click="clickTab(2)" v-bind:class="{ active: tabState == 2 }") {{$t('page_activity.performing_art')}}
          li(@click="clickTab(3)" v-bind:class="{ active: tabState == 3 }") {{$t('page_activity.film_art')}}
      b-row.content
        b-col(cols="12" lg="6")
          .cover-pic.cover-pic1(v-if="tabState == 0")
          .cover-pic.cover-pic2(v-if="tabState == 1")
          .cover-pic.cover-pic3(v-if="tabState == 2")
          .cover-pic.cover-pic4(v-if="tabState == 3")
        b-col#target(cols="12" lg="6")
          h3(v-if="tabState == 0") {{$t('page_activity.visual_art')}}
          h3(v-if="tabState == 1") {{$t('page_activity.music')}}
          h3(v-if="tabState == 2") {{$t('page_activity.performing_art')}}
          h3(v-if="tabState == 3") {{$t('page_activity.film_art')}}
          .intro(v-if="tabState == 0")
            p {{$t('page_activity.visual_art_content')}}
            //p 藝術中心目前展覽廳每年度約展出六大檔期，主要以臺灣中青輩藝術家的作品為主要目標，教育館後方的藝術工坊每年度也有數檔展覽， 特別鼓勵較無機會參與商業畫廊體系的藝術家參展。觀眾除了校內教職員生外，附近社區及市區也是主要的欣賞族群。藝術中心規劃每檔展覽（含邀請展與申請展） 展現多元形式與豐富的藝術內容，堅毅執著地介紹當代藝術深度內涵與視野，體現藝術真、善、美的一面，網頁載有展覽論述與相關資料， 期待呈現出藝術家與觀眾都具互動性與意義的視覺藝術文本。除了展覽廳與藝術工坊之外，校內其他展覽場地尚有陽光走廊，教育館一F空間與人文社會學院藝文空間。
          .intro(v-if="tabState == 1")
            p {{$t('page_activity.music_content')}}
            //p 音樂表演節目，以多元化為主，藝術中心為盡到在校園中藝術大使之角色，多方的介紹並邀請不同的演出團體至校園中演出，讓學生近距離就可欣賞到國際級與地方團體的種種表演。多年來，藝術中心所舉辦之音樂表演含括古典音樂、爵士音樂、國樂、流行創作音樂、電影配樂、民族風音樂等各類型音樂演出，並以自由入場形式讓學生、教職員以及新竹地區民眾們可以選擇喜愛的音樂會參加。
          .intro(v-if="tabState == 2")
            .text(v-html="$t('page_activity.performing_art_content')")
            //p 藝術中心表演藝術展演與學習，以專題方式企劃「workshop」、「示範演出」、「專題講座」三方向，兼具創意學習、專業知識、實驗精神，提供深入多元的藝術參與機會。以期開發表演藝術創作與應用的能力，展現表演藝術在劇場與各種場域演出的應用，連結表演藝術於生活。
            //p 1. Workshop：
            //p 針對校內師生與教職員，企劃藝術教育推廣課程，例如：創意、肢體、聲音、現代舞、默劇、相聲、阿根廷探戈、音樂劇、編劇、排演、劇場技術與管理實務、燈光、音響…等主題，開設表演藝術相關工作坊訓練，每次招收 20 位學員，十周的訓練課程，另需參與正式展演呈現學習成果。
            //p 2. 表演藝術活動：
            //p (1) 邀請優質表演藝術團隊蒞校示範演出，舉辦專題講座。
            //p (2) 與國家兩廳院場館、台中歌劇院、衛武營國家藝術文化中心合作，安排師生聆賞國際表演團體演出、觀摩交流。
          .intro(v-if="tabState == 3")
            .text(v-html="$t('page_activity.film_art_content')")
            //p ─ 夜貓子電影院
            //p 夜貓子電影院自2006年成立之初，決定從作者論出發，按導演作品年表選映，呈現導演完整的創作脈絡；此外，亦策劃主題性影展與類型影展，包括科幻影展、林強電影配樂、黃文英影像美術特展等。平均一個月一檔專題影展，邀請導演蒞臨分享，以及舉辦影像創作工作坊。影展創辦已逾十年，我們所選映的電影大部分皆已購入圖書館館藏，藉由影展的推介與館藏資料庫，培養觀眾的觀影品味，推動電影藝術。
            //p
              a(href="http://nightcats.blogspot.tw/") 部落格：http://nightcats.blogspot.tw/
            //p
              a(href="https://www.facebook.com/NTHUNIGHTCATS/") 粉絲團：https://www.facebook.com/NTHUNIGHTCATS/


</template>

<script>

export default {
  metaInfo: {
    title: '活動概述', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'en'
    }
  },
  data: function() {
    return {
      tabState: 0
    }
  },
  components: {

  },
  methods: {
    clickTab: function(event){
      this.$data.tabState = event
      this.moveTo();
    },
    moveTo: function(){
      $('html, body').animate({
        scrollTop: $("#target").offset().top - 50
      }, 800)
    }
  },
  mounted() {
      this.$vuetify.goTo(0)
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
    border-style: solid
    border-width: 3px 0 0 0
    border-color: $hight-light
    position: relative
    min-height: 100vh
    h3
      color: $hight-light
      font-size: 30px
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
          color: black
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
          margin: 75px 0
        .text

          color: #e4e0de
          font-size: $font_middle
          letter-spacing: 2.4px
          font-weight: 100
          margin: 25px 0
          p
            margin: 75px 0 !important
      h3
          color: $hight-light
          font-size: 30px
          margin: 50px 0 30px 0
      .teacher
        color: white
        list-style: none
        font-weight: 100
        letter-spacing: 2.4px
        padding: 0
        li
          line-height: 3
      .cover-pic
        background-size: cover
        width: 480px
        height: 670px
        -webkit-clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        clip-path: polygon(30% 0, 100% 0%, 70% 100%, 0 100%)
        margin-left: -50px
        // margin: 20px
      .cover-pic1
        background-image: url("../assets/b2.png")
      .cover-pic2
        background-image: url("../assets/music.jpg")
      .cover-pic3
        background-image: url("../assets/pre.jpg")
      .cover-pic4
        background-image: url("../assets/movie.jpg")
  @media all and(max-width: 900px)
    padding: 100px 20px 0 20px
    .container
      .tab
        flex-wrap: wrap
        li
          border-radius: 100px
          margin: 20px
          &:first-child
            border-radius: 100px
          &:last-child
            border-radius: 100px
      .content
        .cover-pic1
          width: 90%
          max-width: 90%
          margin: auto
          height: 300px
          -webkit-clip-path: none
          clip-path: none

</style>
<style lang="scss" scoped>
  .text{
    p {
      margin:100px 0!important;
    }
  }
</style>

