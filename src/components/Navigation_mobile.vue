<template lang="pug">
    nav.menu-mobile
        .m-container
            //- router-link.brand(tag="a" to="/")
            .brand
                router-link.left(tag="div" to="/")
                    img.pic(src="../assets/menu/logo.png")
                    .content
                        .ch 國立清華大學清華學院藝術中心
                        .en ARTS CENTER,TSING HUA COLLEGE, NTHU
                .right(@click="toggleMenu") 三
            transition(name="slide-fade")
                .main(v-show="isVisible")
                    .m-item(@click="toggleSubMenu(0)") 關於我們 About us
                        .submenu(v-show="isSubMenu[0]==true")
                            router-link.sub-item(tag="div" to="/history") 中心簡史 History
                            router-link.sub-item(tag="div" to="/activity") 活動概述 Activity
                            router-link.sub-item(tag="div" to="/people") 組織人員 Faculty
                            router-link.sub-item(tag="div" to="/place?tab=0") 展演場地 Exhibition Venue
                            router-link.sub-item(tag="div" to="/collect/music") 清華樂集 NTHU Chamber Ensemble
                            router-link.sub-item(tag="div" to="/collect/art") 清華藝集 NTHU Art Salon
                    .m-item(@click="toggleSubMenu(1)") 展演節目 Program
                        .submenu(v-show="isSubMenu[1]==true")
                            router-link.sub-item(tag="div" to="/exhibitions/index") 展演節目 Program
                            router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=public_art") 公共藝術 Public Art
                            router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=visual_art") 視覺藝術 Visual Art
                            router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=show") 表演藝術 Performing Art
                            router-link.sub-item(tag="div" to="/exhibitions?typeOfArt=film") 電影藝術 Film Art
                    router-link.m-item(tag="div" to="/publications") 出版典藏 Publication
                    router-link.m-item(tag="div" to="/friends") 清藝之友 Friends

                    //-.mail(@click="epaper")
                        img(src="../assets/menu/mail.svg")
                        span 電子報
                    //-.calander(@click="calender")
                        img(src="../assets/menu/calander.svg")
                        span 活動月曆
                    .row
                        //input.search(placeholder="搜尋...")
                        .lang(@click="changeLang()") {{langToChange}}


</template>


<script>
export default {
  data: function() {
    return {
        tempList: [],
        isVisible: false,
        isSubMenu: [false, false]
    }
  },
  methods: {
    changeLang(){
      if(this.$i18n.locale == 'en') this.$i18n.locale='ch'
      else if(this.$i18n.locale == 'ch') this.$i18n.locale='en'
      this.isVisible = !this.isVisible
    },
    epaper: function(path){
        this.$router.push("/epaper")
    },
    calender: function(path){
        this.$router.push("/calender")
    },
    toggleMenu: function(){
        this.isVisible = !this.isVisible;
    },
    toggleSubMenu: function(index){
      for(let i=0; i<this.isSubMenu.length; i++){
        if(i!=index){
          this.$set(this.isSubMenu, i, false)
        }else{
          this.$set(this.isSubMenu, index, !this.isSubMenu[index])
        }
      }
    }
  },
  watch:{
    $route (to, from){
        this.isVisible = false
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


<style scoped lang="sass">
@import "../assets/sass/base.sass"

.menu-mobile
    @include flexCenterRow
    @include setLinkStyleAll
    background-color: $dark-brown
    color: $light_white
    border-style: solid
    border-color: $hight_light
    border-width: 0 0 6px 0
    padding: 10px
    position: fixed
    z-index: 10000
    width: 100%
    top: 0px
    left: 0
    display: none
    .m-container
        max-width: 1280px
        margin: 0 auto
        width: 100%
        +flexLayout('between', 'col')
        .brand
            +flexLayout('between', 'row')
            width: 100%
            .left
                +flexLayout('start', 'row')
            .right
                font-size: 30px
            .pic
                width: 50px
                margi-left: 20px
            .content
                margin-left: 20px
                color: $light_white
                font-weight: 200
                .ch
                    font-size: 16px
                .en
                    font-size: 14px
        .main
            +flexLayout('center', 'col')
            flex: 1
            max-width: 600px
            width: 90%
            .m-item
                +flexLayout('center', 'col')
                position: relative
                cursor: pointer
                padding: 20px 0
                .submenu
                    +flexLayout('center', 'col')
                    display: flex
                    // top: 0
                    // left: -50%
                    // position: absolute
                    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.5)
                    background-color: #231917
                    border: solid 1px #ef9350
                    width: 141px
                    .sub-item
                        color: $light_white
                        padding: 10px 0
                        &:hover
                            color: #ef9350
                &:hover
                    color: #ef9350
                    .submenu
                        color: $light_white
                        display: flex
            // +flexLayout('between', 'row')
            .mail
                @include flexCenterRow
                cursor: pointer
                padding: 20px 0
                img
                    width: 20px
                    margin-right: 5px
            .calander
                @include flexCenterRow
                cursor: pointer
                padding: 20px 0
                img
                    width: 18px
                    margin-right: 5px
            .row
                +flexLayout('center', 'col')

                width: 100%

            .search
                border-radius: 100px
                background-color: rgba(0,0,0,0)
                font-size: 14px
            .lang
                +flexLayout('center', 'row')
                width: 28px
                height: 28px
                font-size: 12px
                border-radius: 100%
                background-color: #ef9350
                border: solid 1px #ffb954
                color: #231917
                // margin-left: 10px
                cursor: pointer
                margin-top: 20px
            .search
                border-radius: 100px
                border: solid 1px #ffffff
                outline: none
                color: #ffffff
    @media all and (max-width: 900px)
        display: flex
    @media all and (max-width: 500px)
        .content
          .en
            font-size: 12px !important
        .row
            max-width: 100% !important
            width: 100%
        .submenu
            width: 200px !important
            padding: 10px !important
</style>
