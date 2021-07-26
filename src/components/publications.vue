<template lang="pug">
    .publications-waterfall
        .publications-item(v-for="(item, index) in publications" :key="index")
            .link(@click="go(item.id)")
                .info1
                    .date {{item.publish_date}}
                .pic.pic1(:style="setBackgroundImage(index)")
                .title {{item.name}}

                .sub-title {{item.author}}
                .text {{item.description}}
</template>

<script>
import PublicationService from '@/services/PublicationService'

export default {
  data: function() {
    return {
        publications: [],
        images: [],

    }
  },
  methods : {
    go: function(event) {
        console.log(event)
        this.$router.push('/publications/'+ event)
    },
    setBackgroundImage(filename){
        return {
            'background-image': 'url("'+filename+'")'
        }
    },
  },
  async mounted() {
    try {
        this.publications = (await PublicationService.showAll()).data
        
        
    }catch (err){
      this.error = err
      //console.log(err)
    }
  },
}
</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.publications-waterfall
    @include flexCenterRow
    flex-wrap: wrap
    padding: 100px 0
    .publications-item
        @include flexCenterCol
        width: 320px
        height: 610px
        color: $light-white
        margin: 0 24px
        box-sizing: border-box
        cursor: pointer
        .link
            width: 230px
        .info_1
            @include flexCenterRow
            justify-content: start
            width: 100%
            margin-bottom: 10px
            .type
                @include flexCenterCol
                align-items: center
                width: 96px
                height: 36px
                border-radius: 18px
                background-color: #ef9350
                letter-spacing: 1.6px
                color: $dark-brown
            .date
                padding: 5px 0 5px 10px
                letter-spacing: 0.7px
                text-align: center
                color: $light_white
        .pic
            width: 100%
            height: 270px
            background-image: url("../assets/new.png")
            background-size: auto 100%
            background-position: center
            position: relative
            &:after
                content: "閱讀更多"
                color: $hight-light
                font-size: 20px
                position: absolute
                opacity: 0
                top: 50%
                left: 50%
                transform: translateY(-50%) translateX(-50%)
        &:hover
            .pic
                background-size: auto 120%
                &:after
                    opacity: 1
        .title
            margin-top: 50px
            font-size: 26px
            font-weight: 600
            color: $light-white
            letter-spacing: 2.1px
            position: relative
            .slash
                position: absolute
                border-style: solid
                border-width: 2px 0 0 0
                border-color: $hight-light
                width: 68px
                height: 68px
                transform: rotateZ(-70deg) translateY(-50%)
                left: 16px
                top: -80px
        .sub-title
            margin-top: 8px
            margin-bottom: 40px
            letter-spacing: 1.4px
            color: $hight-light
        .text
            color: $dark-white
            height: 1.5*5em
            margin-bottom: 42px
            overflow: hidden
        .more
            @include flexCenterCol
            align-items: center
            width: 160px
            height: 50px
            border-radius: 25px
            border: solid 2px $hight-light
            color: $hight-light
            font-size: 20px
            letter-spacing: 1.6px
            cursor: pointer
            &:hover
                color: $black
                background-color: $hight-light
        // &:nth-child(even)
        //     margin-top: -34px
</style>
