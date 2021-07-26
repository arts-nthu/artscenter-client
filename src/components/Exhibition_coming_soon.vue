<template lang="pug">
    .events
        ._container
            b-container(fluid)
                b-row.justify-content-md-start
                    b-col.event-item(v-for="(item,index) in exhibitions" :key="index" xl="4" md="6" sm="12" cols="12")
                        .event-container
                            .info1
                                .type(:style="changeBtnType()") {{convertType(item.type)}}
                                .date(v-if="$i18n.locale == 'ch'") {{item.start_date}}
                                .date(v-if="$i18n.locale == 'en'" :style="changeStyleDate()") {{dateEnFormat(item.start_date)}}
                            .pic(:style="setBackgroundImage(index)")
                            h2.title1 {{item.title}}
                            .slash
                            h3.sub-title {{item.subtitle}}
                            p.text {{item.description}}
                            router-link(:to="'/exhibitions/'+item.id" tag="div")
                              .more(v-if="$i18n.locale == 'ch'") 查看更多
                              .more(v-if="$i18n.locale == 'en'") More

</template>

<script>
import ExhibitionService from '@/services/ExhibitionService'

export default {
    data: function() {
        return {
            exhibitions: [],
            images: [],

        }
    },
    methods : {
      changeStyleDate(){
        if(this.$i18n.locale == 'ch'){
          return {
            'width': '120px',
            'padding': '5px 0 5px 10px'
          }
        }
        else if(this.$i18n.locale == 'en'){
          return {
            'width': '90px',
            'padding': '0 0'
          }
        }
      },
      dateEnFormat(date){
        var data = date.split('-')
        console.log(data[0])
        return data[1] +"/" + data[2];
      },
      changeBtnType(){
        if(this.$i18n.locale == 'ch'){
          return {
            'width': '96px',
          }
        }
        else if(this.$i18n.locale == 'en'){
          return {
            'width': '150px',
          }
        }
      },
        convertType: function(type){
        var temp
        if(this.$i18n.locale == 'ch'){
          if(type=="public_art") return "公共藝術"
          else if(type=="visual_art") return "視覺藝術"
          else if(type=="show") return "表演藝術"
          else if(type=="film") return "電影藝術"
        }
        else if(this.$i18n.locale == 'en'){
          if(type=="public_art") return "Public Art"
          else if(type=="visual_art") return "Visual Art"
          else if(type=="show") return "Performing Art"
          else if(type=="film") return "Film Art"
        }

    },
    setBackgroundImage(id){
        return {
            'background-image': 'url("'+filename+'")'
        }
    }

  },
  async mounted() {
    try {

        this.exhibitions = (await ExhibitionService.showComingSoon()).data
        
        console.log("images")
        //console.log(this.images)

    }catch (err){
      this.error = err
      console.log(err)
    }
  },

}
</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.events
    // @include flexCenterRow
    // justify-content: start
    padding: 100px 0
    margin: auto
    ._container
        @include flexCenterRow
        justify-content: start
        .event-item
            @include flexCenterCol
            justify-content: start
            color: $light-white
            box-sizing: border-box
            width: 230px
            min-width: 230px
            margin-bottom: 40px
            .event-container
                width: 230px
                min-width: 230px
                margin: auto
                .info1
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
                        width: 120px
                        text-align: center
                        color: #ef9350
                .pic
                    width: 100%
                    height: 280px
                    background-size: cover
                    background-position: 50% 50%

                .title1
                    margin-top: 50px
                    font-size: $font_mid_title
                    font-weight: 600
                    color: $light-white
                    letter-spacing: 2.1px
                    position: relative
                    text-align: center
                    min-height: 1.8*2em
                .slash
                    position: absolute
                    border-style: solid
                    border-width: 2px 0 0 0
                    border-color: $hight-light
                    height: 68px
                    transform: rotateZ(-60deg) translateY(-54%)
                    top: 419px
                    width: 70px
                    left: 65px
                .sub-title
                    margin-top: 8px
                    margin-bottom: 40px
                    letter-spacing: 1.4px
                    color: $hight-light
                    font-size: $font_sub_title
                    text-align: center
                    height: 2em*1.2
                    overflow: hidden
                .text
                    color: $dark-white
                    margin-bottom: 42px
                    height: 1.8*5em
                    width: 100%
                    overflow: hidden
                    line-height: 1.8
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
                    margin: auto
                    &:hover
                        color: $black
                        background-color: $hight-light
        @media all and (max-width: 900px)
            .event-item
                .event-container


</style>




