<template lang="pug">
  .people-page
    b-container(fluid).container
      ._container
        .center
          h2 {{$t('page_place.title')}}
          ul.tab
            li(@click="clickTab(0)" v-bind:class="{ active: tabState == 0 }") {{$t('page_place.zyxel.building_name')}}
            li(@click="clickTab(1)" v-bind:class="{ active: tabState == 1 }") {{$t('page_place.exhibition_hall.building_name')}}
            li(@click="clickTab(2)" v-bind:class="{ active: tabState == 2 }") {{$t('page_place.art_workshop.building_name')}}
          h3.title(v-if="tabState == 0") {{$t('page_place.zyxel.building_name')}}
          h3.title(v-if="tabState == 1") {{$t('page_place.exhibition_hall.building_name')}}
          h3.title(v-if="tabState == 2") {{$t('page_place.art_workshop.building_name')}}
        .content(v-if="tabState == 0")
          b-row.content
            b-col(cols="12" lg="6")
              .pic#pic1
              .pic#pic2
              .pic#pic3
              .pic#pic4
            b-col(cols="12" lg="6")
              p.indent {{$t('page_place.zyxel.description_1')}}
              p.indent {{$t('page_place.zyxel.description_2')}}
              a.btn(target="_blank" href="https://2.bp.blogspot.com/-ltqkLqS9T0o/WLJriOCYAzI/AAAAAAAAAI4/ChmHFIzngy0YRJRnlC_unM-A5p5C9lFZgCLcB/s640/%25E8%2588%259E%25E5%258F%25B0%25E4%25BF%25AF%25E8%25A6%2596%25E5%259C%2596.jpg") {{$t('page_place.zyxel.floor_plan')}}
              .special-title
                .slash
                h3 {{$t('page_place.zyxel.equipment')}}
              ul
                li {{$t('page_place.zyxel.stage')}}　　{{$t('page_place.zyxel.other_equipment')}}
                li {{$t('page_place.zyxel.lights')}}　  {{$t('page_place.zyxel.spectatory')}}
                li {{$t('page_place.zyxel.sound_system')}}　　{{$t('page_place.zyxel.outfield')}}
                li {{$t('page_place.zyxel.projection')}}　　{{$t('page_place.zyxel.backstage')}}
              a.btn(target="_blank" href="http://artscenter.web.nthu.edu.tw/files/15-1898-70988,c82-1.php?Lang=zh-tw") {{$t('page_place.zyxel.technical_information')}}
              //a.special-title(target="_blank" href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/pictures/378/part_75607_3096767_76977.png")
              a.special-title(target="_blank" href="http://arts.nthu.edu.tw/static/file/合勤演藝廳收費標準(105新版).doc")
                .slash
                h3 {{$t('page_place.zyxel.using_and_charging_standard')}}
                .plus +
              //a.special-title(target="_blank" href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/pictures/547/part_109284_4971561_76341.png")
              a.special-title(target="_blank" href="http://arts.nthu.edu.tw/static/file/合勤演藝廳管理要點(105新版).doc")
                .slash
                h3 {{$t('page_place.zyxel.precautions')}}
                .plus +
              .special-title
                .slash
                h3 {{$t('page_place.zyxel.related_forms')}}
                ul.pop-table
                  //a(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2206/451250409.doc")
                  a(href="http://arts.nthu.edu.tw/static/file/合勤演藝廳管理要點(105新版).doc")
                    p {{$t('page_place.zyxel.management_guidelines')}}
                    img.link(src="../assets/download.png")
                  a(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2206/199104585.doc")
                    p {{$t('page_place.zyxel.facility_application_form')}}
                    img.link(src="../assets/download.png")
                  a(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2206/128458157.doc")
                    p {{$t('page_place.zyxel.planning_profile')}}
                    img.link(src="../assets/download.png")
                  a(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2206/149925217.doc")
                    p {{$t('page_place.zyxel.declaration')}}
                    img.link(src="../assets/download.png")
                  //a(href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/img/2206/253979761.doc")
                  a(href="http://arts.nthu.edu.tw/static/file/合勤演藝廳收費標準(105新版).doc")
                    p {{$t('page_place.zyxel.charges')}}
                    img.link(src="../assets/download.png")
        .content(v-if="tabState == 1")
          b-row.content
            b-col(cols="12" lg="6")
              .pic#pic5
              .pic#pic6
              .pic#pic7
            b-col(cols="12" lg="6")
              p.indent {{$t('page_place.exhibition_hall.description_1')}}
              p.indent {{$t('page_place.exhibition_hall.description_2')}}
              p.indent {{$t('page_place.exhibition_hall.description_3')}}
              .row-between
                a.btn(target="_blank" href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/pictures/974/part_75675_2566613_20558.jpg") {{$t('page_place.exhibition_hall.floor_plan_1')}}
                a.btn(target="_blank" href="http://artscenter.web.nthu.edu.tw/ezfiles/898/1898/pictures/974/part_75675_1295959_20558.jpg") {{$t('page_place.exhibition_hall.floor_plan_2')}}
              .special-title
                .slash
                h3 {{$t('page_place.exhibition_hall.opening_time')}}
              ul
                li | {{$t('page_place.exhibition_hall.exhibition_time')}} |
                br
                li {{$t('page_place.exhibition_hall.opening_time_1')}}
                li {{$t('page_place.exhibition_hall.opening_time_2')}}
                br
                li | {{$t('page_place.exhibition_hall.non_exhibition_period')}} |
                br
                li {{$t('page_place.exhibition_hall.not_open_to_public')}}
              .special-title
                .slash
                h3 {{$t('page_place.exhibition_hall.equipment')}}
              ul
                li
                  p {{$t('page_place.exhibition_hall.equipment_1')}}
                  p {{$t('page_place.exhibition_hall.equipment_2')}}
                  p {{$t('page_place.exhibition_hall.equipment_3')}}
                  p {{$t('page_place.exhibition_hall.equipment_4')}}
        .content(v-if="tabState == 2")
          b-row.content
            b-col(cols="12" lg="6")
              .pic#pic8
              .pic#pic9
              .pic#pic10
            b-col(cols="12" lg="6")
              p.indent {{$t('page_place.art_workshop.description')}}
              p.indent {{$t('page_place.art_workshop.description_1')}}
              p.indent {{$t('page_place.art_workshop.description_2')}}
              p.indent {{$t('page_place.art_workshop.description_3')}}
              p.indent {{$t('page_place.art_workshop.description_4')}}
              p.indent {{$t('page_place.art_workshop.description_5')}}
</template>

<script>
//import Event from "../components/events"
export default {

  metaInfo: {
    title: '展演場地', // set a title
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
      this.$router.push({query: {tab: event}})
      this.$data.tabState = event
      this.moveTo()
    },
    moveTo: function(){
      $('html, body').animate({
        scrollTop: $(".title").offset().top-150
      }, 800);
    }
  },
  mounted(){
    this.$vuetify.goTo(0)
    if(this.$route.query.tab){
      this.tabState = this.$route.query.tab
    }
  },
  watch:{
    $route(){
      this.tabState = this.$route.query.tab
      $('html,body').scrollTop(0)
    }
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
    margin: auto
    .row-between
      @include flexCenterRow
    .indent
      text-indent: 50px
    h2
      color: white
      font-size: 30px
      display: block
      margin-top: 80px
    h3
      color: $hight-light
      font-size: 24px
      display: block
      margin-bottom: 20px

    .tab
      list-style: none
      color: white
      display: flex
      justify-content: center
      align-items: center
      margin: 60px 0
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
      margin-top: 40px
      .title
        font-size: 28px
        display: inline-block
      .subtitle
        font-size: 26px
        display: inline-block
      .special-title
        display: block
        position: relative
        margin-left: 45px
        width: 280px
        .plus
          margin-left: 30px
          filter: brightness(0.6) grayscale(100)
        &:hover
          // background-color: rgba(255, 255, 255, 0.1)
          .plus
            filter: brightness(1) grayscale(0)
        a
          .link
            margin-left: 30px
            filter: brightness(0.6) grayscale(100)
          &:hover
            background-color: rgba(255, 255, 255, 0.1)
            .link
              filter: brightness(1) grayscale(0)
        .plus
          display: inline-flex
          justify-content: center
          align-items: center
          border: solid 1px $hight-light
          border-radius: 50%
          width: 45px
          height: 45px
          color: $hight-light
          font-size: 45px
          position: absolute
          padding-bottom: 8px
          padding-left: 4px
          right: 0
          top: -13px
        ul
          list-style: none
          padding: 0
          width: 100%
          a
            display: flex
            justify-content: space-between
            align-items: center
            line-height: 3.5
            color: $light_white
            text-decoration: none
            p
              margin: 0
              font-size: 16px


      .slash
        position: absolute
        border-style: solid
        border-width: 2px 0 0 0
        border-color: #ef9350
        width: 68px
        height: 40px
        -webkit-transform: rotateZ(-65deg) translateY(-54%)
        transform: rotateZ(-70deg) translateY(-54%)
        top: 0
        width: 76px
        left: -40px
      h3
        margin: 80px 0
        font-size: 20px
      .pic
        width: 100%
        max-width: 491px
        height: 327px
        background-size: cover
        margin-bottom:  80px
      ul
        list-style: none
      #pic1
        background-image: url("../assets/room/1-1.png")
      #pic2
        background-image: url("../assets/room/1-2.png")
      #pic3
        background-image: url("../assets/room/1-3.png")
      #pic4
        background-image: url("../assets/room/1-4.png")
      #pic5
        background-image: url("../assets/room/2-1.png")
      #pic6
        background-image: url("../assets/room/2-2.png")
      #pic7
        background-image: url("../assets/room/2-3.png")
      #pic8
        background-image: url("../assets/room/3-1.png")
      #pic9
        background-image: url("../assets/room/3-2.png")
      #pic10
        background-image: url("../assets/room/3-3.png")
      .btn
        @include flexCenterCol
        align-items: center
        display: inline-block
        height: 50px
        border-radius: 25px
        border: solid 2px $hight-light
        color: $hight-light
        font-size: 20px
        letter-spacing: 1.6px
        cursor: pointer
        margin: 40px 0
        padding: 0 40px
        line-height: 46px
        &:hover
            color: $black
            background-color: $hight-light
  @media all and(max-width: 900px)
    ._container
      .tab
        flex-wrap: wrap
        li
          margin: 20px
          border-radius: 100px
          &:first-child
            border-radius: 100px
          &:last-child
            border-radius: 100px
      .content
        .pic
          margin: 20px auto
          padding: 40px
          width: 100%
        .special-title
          width: 80%
</style>
