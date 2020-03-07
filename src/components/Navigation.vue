<template lang="pug">
    nav.menu
        .m-container
            router-link.brand(tag="a" to="/")
                img.pic(src="../assets/menu/logo.png")
                .content
                    //h5 {{$t('navbar.website_title','ch')}}
                    .ch 國立清華大學清華學院藝術中心
                    .en ARTS CENTER,TSING HUA COLLEGE, NTHU
            .main(v-if="this.$i18n.locale == 'ch'")
                .m-item 關於我們<br>About us
                    .submenu
                        router-link.sub-item(tag="div" to="/history") 中心簡史<br>History
                        router-link.sub-item(tag="div" to="/activity") 活動概述<br>activity
                        router-link.sub-item(tag="div" to="/people") 組織人員<br>Faculty
                        router-link.sub-item(tag="div" to="/place?tab=0") 展演場地<br>Exhibition<br>Venue
                        router-link.sub-item(tag="div" to="/collect/music") 清華樂集<br>NTHU<br>Chamber<br>Ensemble
                        router-link.sub-item(tag="div" to="/collect/art") 清華藝集<br>NTHU<br>Art Salon
                .m-item 展演節目<br>Program
                    .submenu
                        router-link.sub-item(tag="div" to="/exhibitions/index") 展演節目<br>Program
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=public_art") 公共藝術<br>Public Art
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=visual_art") 視覺藝術<br>Visual Art
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=show") 表演藝術<br>Performing<br>Art
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=film") 電影藝術<br>Film Art
                router-link.m-item(tag="div" to="/publications") 出版典藏<br>Publication
                router-link.m-item(tag="div" to="/friends") 清藝之友<br>Friends
                router-link.m-item(tag="div" to="/calendar") 活動月曆<br>Calendar
            .main(v-if="this.$i18n.locale == 'en'")
                .m-item About us
                    .submenu
                        router-link.sub-item(tag="div" to="/history") History
                        router-link.sub-item(tag="div" to="/activity") Activity
                        router-link.sub-item(tag="div" to="/people") Faculty
                        router-link.sub-item(tag="div" to="/place?tab=0") Exhibition<br>Venue
                        router-link.sub-item(tag="div" to="/collect/music") NTHU<br>Chamber<br>Ensemble
                        router-link.sub-item(tag="div" to="/collect/art") NTHU<br>Art Salon
                .m-item Program
                    .submenu
                        router-link.sub-item(tag="div" to="/exhibitions/index") Program
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=public_art") Public Art
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=visual_art") Visual Art
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=show") Performing<br>Art
                        router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=film") Film Art
                router-link.m-item(tag="div" to="/publications") Publication
                router-link.m-item(tag="div" to="/friends") Friends
                router-link.m-item(tag="div" to="/calendar") Calendar
            .right

              //.mail(@click="epaper")
                img(src="../../static/menu/mail.svg")
                span 電子報
              //.calander(@click="calendar()")
                img(src="../assets/menu/calander.svg")
                span 活動月曆<br>calendar
              .lang(@click="changeLang()") {{langToChange}}

</template>

<script>
export default {
  methods:{
    calendar: function(path){
      this.$router.push("/calendar")
    },
    changeLang(){
      console.log("change language")
      if(this.$i18n.locale == 'en') this.$i18n.locale='ch'
      else if(this.$i18n.locale == 'ch') this.$i18n.locale='en'
    }
  },
  computed:{

    langToChange(){
      if(this.$i18n.locale == 'en') return '中文'
      else if(this.$i18n.locale == 'ch') return 'EN'

    }
  }
}
</script>


<style lang="sass">
@import "../assets/sass/base.sass"
.menu
    @include flexCenterRow
    @include setLinkStyleAll
    background-color: $dark-brown
    color: $light_white
    border-style: solid
    border-color: $hight_light
    border-width: 0 0 6px 0
    padding: 10px
    position: fixed
    z-index: 500
    width: 100%
    top: 0px
    left: 0
    .m-container
        max-width: 1280px
        margin: 0 auto
        width: 100%
        +flexLayout('between', 'row')
        .brand
            +flexLayout('start', 'row')
            .pic
                width: 50px
                margi-left: 20px
            .content
                margin-left: 20px
                color: $light_white
                font-weight: 800
                .ch
                    font-size: 16px
                .en
                    font-size: 14px
        .main
            +flexLayout('around', 'row')
            flex: 1
            max-width: 450px
            margin-left: 120px
            @media screen and (max-width: 1020px)
                margin-left: 0px
            .m-item
                position: relative
                cursor: pointer
                margin-right: 10px
                .submenu
                    +flexLayout('center', 'col')
                    display: none
                    top: 0
                    left: -50%
                    position: absolute
                    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.5)
                    background-color: #231917
                    border: solid 1px #ef9350
                    width: 141px
                    z-index: 1
                    .sub-item
                        text-align: center
                        color: $light_white
                        padding: 10px 0
                        &:hover
                            color: #ef9350
                &:hover
                    color: #ef9350
                    .submenu
                        color: $light_white
                        display: flex

        .right
            +flexLayout('between', 'row')
            .mail
                @include flexCenterRow
                margin-right: 20px
                cursor: pointer
                img
                    width: 20px
                    margin-right: 10px
            .calander
                @include flexCenterRow
                margin-right: 20px
                cursor: pointer
                img
                    width: 18px
                    margin-right: 10px
            .search
                border-radius: 100px
                background-color: rgba(0,0,0,0)
                margin-right: 20px
                papdding: 5px 0 5px 15px
                font-size: 14px
            .search-list
                background-color: white
                max-height: 200px
                width: 150px
                position: absolute
                top: 60px
                right: 120px
                color: black
                overflow: auto
                font-size: 16px
                .search-item
                    +flexLayout('center', 'row')
                    width: 100%
                    min-height: 50px
                    cursor: pointer
                    padding: 10px
                    box-sizing: border-box
                    &:hover
                        background-color: #DDD
            .lang
                +flexLayout('center', 'row')
                width: 32px
                height: 32px
                font-size: 12px
                border-radius: 100%
                background-color: #ef9350
                border: solid 1px #ffb954
                color: #231917
                // margin-left: 10px
                cursor: pointer
            .search
                border-radius: 100px
                border: solid 1px #ffffff
                outline: none
                color: #ffffff
                padding-left: 10px
    @media all and (max-width: 900px)
        display: none

</style>
