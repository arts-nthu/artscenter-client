<template lang="pug">
  .people-page
    b-container()._container
      .title2
        .en Faculty
        .ch 組織人員
      .center
        ul.tab
          li(@click="clickTab(0)" v-bind:class="{ active: tabState == 0 }") 中心主任
          li(@click="clickTab(1)" v-bind:class="{ active: tabState == 1 }") 企劃與執行
        h3(v-if="tabState == 0") 中心主任
        h3(v-if="tabState == 1") 企劃與執行
      //.content(v-if="tabState == 0")
        p.title 江怡瑩
        p.subtitle  | 清大藝術中心主任，藝術與設計學系 教授  | 美國紐約州雪城大學藝術碩士
        p Beatrice Chiang, Director of Arts Center, Department of Arts and Design, NTHU MFA, Syracuse University, U. S.
        br
        p E-mail　　　　
          a(href="iychiang@mx.nthu.edu.tw") &nbsp;&nbsp;&nbsp;iychiang@mx.nthu.edu.tw
        p 文創設計實驗室
          a(href="http://pinklab.artdesign.nthu.edu.tw/") &nbsp;&nbsp;&nbsp;http://pinklab.artdesign.nthu.edu.tw/
        p 個人網頁　　　　
          a(href="http://pinklab.artdesign.nthu.edu.tw/Beatrice_Chiang/homepage.html") http://pinklab.artdesign.nthu.edu.tw/Beatrice_Chiang/homepage.html
      //.content(v-if="tabState == 0")
        p.title 蕭銘芚
        p.subtitle | 清大藝術中心主任，藝術與設計學系 教授 | 日本國立千葉大學教育學碩士
        p Shiau,Ming-Twen, Director of Arts Center, Department of Arts and Design, NTHU M.Ed, National Chiba University, Japan.
        br
        p E-mail&nbsp;&nbsp;
          a(href="twen@mail.nd.nthu.edu.tw") &nbsp;&nbsp;&nbsp;twen@mail.nd.nthu.edu.tw
          a(href="mtshiau@mx.nthu.edu.tw") &nbsp;&nbsp;&nbsp;mtshiau@mx.nthu.edu.tw
        p 個人網頁
          a(href="http://art.nthu.edu.tw/?page_id=814") &nbsp;&nbsp;&nbsp;http://art.nthu.edu.tw/?page_id=814
        p &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          a(href="http://artdesign.web.nthu.edu.tw/files/11-1966-12568.php?Lang=zh-tw") &nbsp;&nbsp;&nbsp;http://artdesign.web.nthu.edu.tw/files/11-1966-12568.php?Lang=zh-tw
        //-副主任
        //張晴文

          | 清大藝術中心副主任，藝術與設計學系 助理教授 | 國立臺灣藝術大學文化政策與藝術管理博士

          Ching-Wen CHANG, Vice Director of Arts Center, Assistant Prof. of Department of Arts and Design, NTHU

          PhD. of National Taiwan University of Arts
        br
        br
        br
        h3(style="text-align:center") 中心副主任
        p.title 張晴文
        p.subtitle | 清大藝術中心副主任，藝術與設計學系 助理教授 | 國立臺灣藝術大學文化政策與藝術管理博士
        p Ching-Wen CHANG, Vice Director of Arts Center, Assistant Prof. of Department of Arts and Design, NTHU PhD. of National Taiwan University of Arts
        br
      .content(v-if="tabState == 0")
        p.title 邱誌勇
        p.subtitle | 清大藝術中心主任，藝術學院學士班 教授 | 美國俄亥俄大學跨領域藝術系博士
        p Chiu, Chih-Yung, Director of Arts Center, Interdisciplinary Program of Technology and Art, College of Arts, National Tsing Hua University/ PhD in School of Interdisciplinary Arts, Ohio University, USA
        br


      .content(v-if="tabState == 1")
        p.title 林怡君
        p.subtitle | 表演藝術企劃 | 美國密蘇里大學音樂碩士
        p Sophia Lin, MA, Performing Arts Curator;University of Missouri
        p E-mail ： ichunlin@mx.nthu.edu.tw
        br
        p.title 賴小秋
        p.subtitle | 視覺藝術企劃 | 加拿大西安大略大學圖資科學碩士，曾任職台北市立美術館編譯、助理研究員
        p Autumn Lai, Visual Art Curator;MLIS, University of Western Ontario, Canada
        p E-mail ： hclai@mx.nthu.edu.tw
        br
        p.title 林甫珊
        p.subtitle | 視覺藝術企劃 | 紐約大學藝術創作碩士
        p Fu-Shan Lin, Visual Art Curator;New York University, MA
        p E-mail ： fslin@mx.nthu.edu.tw
        br
        p.title 鄭叡恕
        p.subtitle | 表演藝術企劃 | 文化大學戲劇碩士
        p Jui-Shu Cheng, Performing Arts Curator, MA of Chinese Culture Univerity
        p E-mail ： jscheng@mx.nthu.edu.tw
        br
        p.title 陳若怡
        p.subtitle | 電影藝術企劃 | 台北藝術大學傳統藝術研究所博物館組碩士
        p Lori Chen, Visual Art Curator, MA of Taipei National University of the Arts
        p E-mail ： jichen@mx.nthu.edu.tw
        br
        p.title 李書瑜
        p.subtitle |行政助理 | 國立臺南大學美術碩士
        p Shu-Yu Lee, Administrative Assistant, MA, National University of Tainan
        p E-mail ： shuyu@gapp.nthu.edu.tw
</template>

<script>
//import Event from "../components/events"
export default {

  metaInfo: {
    title: '組織及人員', // set a title
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
      this.moveTo()
    },
    moveTo: function(){
      $('html, body').animate({
        scrollTop: $(".title").offset().top-150
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
.people-page
  display: flex
  justify-content: center
  align-items: center
  ._container
    min-height: 100vh
    border-style: solid
    border-width: 3px 0 0 0
    border-color: $hight-light
    margin-top: 100px
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



    h2
      color: white
      font-size: 30px
      display: block
      margin-top: 80px
      letter-spacing: 4.8px
    h3
      color: $hight-light
      font-size: 24px
      display: block
      margin-bottom: 20px
      font-weight: 100

    .tab
      list-style: none
      color: white
      display: flex
      justify-content: center
      align-items: center
      margin: 60px  0  30px  0

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
          color: $dark-brown
          background-color: white

    .center
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column

    .content
      color: #e4dfdb
      font-weight: 100
      letter-spacing: 1.8px
      font-size: 20px
      .title
        font-size: 28px
        display: inline-block
      .subtitle
        font-size: 22px
        display: inline-block
  @media all and (max-width: 900px)
    padding: 0 20px
    word-wrap: break-word
    ._container
      .content
        word-wrap: break-word
  @media all and (max-width: 500px)
    ._container
      .tab
        flex-wrap: wrap
        li
          border-radius: 100px
          margin: 20px
          &:first-child
            border-radius: 100px
          &:last-child
            border-radius: 100px
</style>
