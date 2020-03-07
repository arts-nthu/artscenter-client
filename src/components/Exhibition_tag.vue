<template lang="pug">
    .event-tag
        .dropdown(@click="openTime")
            .item.default(v-if="this.$i18n.locale=='ch'") 選擇年度
            .item.default(v-if="this.$i18n.locale=='en'") Release Year
            .item-sub-menu(v-if="timeOpen != false")
                .menu-item(@click="changeTime(time)" v-for="(time, index) in timeList" :key="index") {{time}}

        .tag-group
            .item(@click="go('public_art')" :class="{active: ($route.params.type=='public_art')}") {{$t('navbar.navbar_content.program.public_art')}}
            .item(@click="go('visual_art')" :class="{active: ($route.params.type=='visual_art')}") {{$t('navbar.navbar_content.program.visual_art')}}
            .item(@click="go('show')" :class="{active: ($route.params.type=='show')}") {{$t('navbar.navbar_content.program.performing_art')}}
            .item(@click="go('film')" :class="{active: ($route.params.type=='film')}") {{$t('navbar.navbar_content.program.film_art')}}
        .search
            img.pic(src="../assets/magnifier.svg")
            input.input(type="text" v-model="searchString")
</template>

<script>
//import { mapGetters, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      currentType: "",
      currentTime: "選擇年度",
      timeList:["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000"],
      timeOpen: false,
      searchString:""

    }
  },
  methods: {
    go: function(event) {
        this.$router.push({query: {typeOfArt: event}})
    },
    openTime(){
        this.timeOpen = !this.timeOpen
    },
    changeTime(time){
        this.currentTime = time
        this.openTime()
        this.$router.push({query: {year: time}})
        this.searchString = ""
    }
  },
  props:{
      years: Array
  },
  watch:{
      searchString: function(item){
          this.$router.push({query: {searchStr: item}})
      }
      ,'$route' (to, from) {
        this.currentTime= to.query.year;
        this.timeOpen = false;
      }
  },

}
</script>


<style scoped lang="sass">
@import "../assets/sass/base.sass"
.event-tag
    color: white
    margin-top: 50px
    @include flexCenterRow
    .dropdown
        @include flexCenterRow
        position: relative
        width: 227px
        height: 36px
        border-radius: 18px
        border: solid 2px #ffffff
        cursor: pointer
        &:hover
            background-color: white
            color: black
        .item-sub-menu
            @include flexCenterCol
            justify-content: flex-start
            position: absolute
            top: 42px
            left: 0
            background-color: white
            width: 100%
            color: black
            max-height: 200px
            overflow: auto
            z-index: 50
            // padding-top: 50px
            .menu-item
                @include flexCenterRow
                min-height: 50px
                width: 100%
                &:hover
                    background-color: #DDD

    .tag-group
        @include flexCenterRow
        flex-wrap: wrap
        .item
            @include flexCenterRow
            width: 115px
            height: 36px
            border-radius: 18px
            background-color: #ffffff
            color: #231917
            margin: 10px 5px
            cursor: pointer
            &:hover
                background-color: $hight-light
        .active
            background-color: $hight-light
    .search
        @include flexCenterRow
        align-items: flex-end
        .pic
            margin-right: 10px
        .input
            width: 250px
            border-bottom-style: solid
            border-color: #ef9350
            border-bottom-width: 1px
            background-color: rgba(0,0,0,0)
            border-width: 0 0 1px 0
            color: white
            outline: none
            letter-spacing: 3px
    @media all and(max-width: 900px)
        flex-direction: column
        .tag-group
            margin: 40px 0
            .item
                margin: 10px 0
</style>
