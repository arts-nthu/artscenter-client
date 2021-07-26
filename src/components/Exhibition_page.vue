<template lang="pug">
    .event-page-content
        .pic-modal(v-if="isOpenPic")
            Gallary(:images="exhibition.groupImages" @closeModal="closePicModal")
        ._container
            b-container(fluid)

                b-row
                    b-col(cols="12" lg="1")
                    b-col.cover-pic(:style="setBackgroundImage(exhibition.cover)" cols="12" lg="5" @click="showBigPic()")

                    b-col(cols="12" lg="5")
                        .info1
                            .title-info
                                button.type {{convertType(exhibition.type)}}
                                .time {{exhibition.start_date + " ～ " +exhibition.end_date}}
                                .title1(v-if="this.$i18n.locale == 'ch'") {{exhibition.title}}
                                .title1(v-if="this.$i18n.locale == 'en'") {{exhibition.en_title}}
                                .hint(v-if="this.$i18n.locale == 'ch'") {{exhibition.subtitle}}
                                .hint(v-if="this.$i18n.locale == 'en'") {{exhibition.en_subtitle}}
                            .date-info
                                .left

                                .right
                                    .sub-title
                                        .slash
                                        .title1 {{$t('page_exhibition_detail.information')}}
                                    .li
                                        ._left {{$t('page_exhibition_detail.host')}}
                                        ._right(v-if="this.$i18n.locale == 'ch'") {{exhibition.host}}
                                        ._right(v-if="this.$i18n.locale == 'en'") {{exhibition.en_host}}

                                    .li
                                        ._left {{$t('page_exhibition_detail.performer')}}
                                        ._right(v-if="this.$i18n.locale == 'ch'") {{exhibition.performer}}
                                        ._right(v-if="this.$i18n.locale == 'en'") {{exhibition.en_performer}}
                                    .li
                                        ._left {{$t('page_exhibition_detail.time')}}
                                        ._right {{ timeformatting(exhibition.daily_start_time) }} ~ {{ timeformatting(exhibition.daily_end_time) }}
                                    .li
                                        ._left {{$t('page_exhibition_detail.location')}}
                                        ._right(v-if="this.$i18n.locale == 'ch'") {{exhibition.location}}
                                        ._right(v-if="this.$i18n.locale == 'en'") {{exhibition.en_location}}
                                    .li(v-show="exhibition.ticket_info")
                                        ._left {{$t('page_exhibition_detail.ticket_info')}}
                                        ._right(v-if="this.$i18n.locale == 'ch'") {{exhibition.ticket_info}}
                                        ._right(v-if="this.$i18n.locale == 'en'") {{exhibition.en_ticket_info}}
                                    .li(v-show="exhibition.registration_link")
                                        ._left {{$t('page_exhibition_detail.registration_link')}}
                                        a(class='_right' target="_blank" :href="exhibition.registration_link") 按我報名




                    b-col(cols="12")
                      .down
                          .left
                              .sub-title
                                  .slash
                                  .title1 {{$t('page_exhibition_detail.detail')}}
                          .right
                              .content-title(v-if="this.$i18n.locale == 'ch'") {{exhibition.title}} | {{exhibition.subtitle}}
                              .content-title(v-if="this.$i18n.locale == 'en'") {{exhibition.en_title}} | {{exhibition.en_subtitle}}
                              //- .content 西班牙藝術家Juanjo Novella即將於今年內動工在清大南校園大草原設置一件優雅的公共藝術，造形為一片紫荊樹葉，一片早就存在於校園樹種的樹葉。此項國際公共藝術設置計畫是集結合併校內多項建築物的公共藝術經費，計有六棟建物: 教學大樓新建工程、多功能運動館
                              //- .content-pic(:style="setBackgroundImage(event)")
                              //.content(v-html="exhibition.description")
                              VueMarkDown.content(v-if="this.$i18n.locale == 'ch'" :source="exhibition.description")
                              VueMarkDown.content(v-if="this.$i18n.locale == 'en'" :source="exhibition.en_description")

</template>
<script>
import ExhibitionService from '@/services/ExhibitionService'
import MediaService from '@/services/MediaService'
import VueMarkDown from 'vue-markdown'
import Gallary from '../components/Gallary'
export default {
  components:{VueMarkDown, Gallary},
  data () {
    return {
        exhibition: [],
        image: [],
        isOpenPic: false
      }
    },
    /*
  async mounted() {
    try {
        const pid = this.$route.params.pid
        this.exhibition = (await ExhibitionService.show(pid)).data
        this.image = (await MediaService.show(this.exhibition.coverId)).data
        //console.log(this.image)
    } catch (err){
        console.log(err)
    }

  },
  */
  methods : {
    closePicModal() {
      this.isOpenPic = false
      console.log("close")
    },
    showModal() {
      this.isOpenPic = true
      console.log(this.isOpenPic)
      console.log("click")
    },
    getMediaURL(file){
      return process.env.BASE_API + '/static/uploads/' + file
    },
    convertType: function(type){
        var temp
        if(this.$i18n.locale == 'ch'){
          if(type=="public_art") return "公共藝術"
          else if(type=="visual_art") return "視覺藝術"
          else if(type=="performing_art") return "表演藝術"
          else if(type=="film_art") return "電影藝術"
        }
        else if(this.$i18n.locale == 'en'){
          if(type=="public_art") return "Public Art"
          else if(type=="visual_art") return "Visual Art"
          else if(type=="performing_art") return "Performing Art"
          else if(type=="film_art") return "Film Art"
        }

    },
    async getExhibition(id) {
        this.exhibition = (await ExhibitionService.show(id)).data
        //this.image = (await MediaService.show(this.exhibition.coverId)).data
    },
    timeformatting(time) {
        if(time == null || time == "")  return ""
        else if(typeof(time)!= "undefined") {
            var new_time = time.split(':')
            //var time_zone_time = parseInt(new_time[0]) + 8
            //if(time_zone_time > 24)  time_zone_time-=24
            return new_time[0] + ':' + new_time[1]
        }
        else
            return ""
    },
    setBackgroundImage(filename) {
        return {
            'background-image': 'url("' + filename + '")'
        }
    }
  },

  watch : {
      '$route' (to,from) {
          this.getExhibition(to.params.pid)
          console.log(this.exhibition)
      }
    },
   async created() {
     this.exhibition = (await ExhibitionService.show(this.$route.params.pid)).data
     //this.image = (await MediaService.show(this.exhibition.coverId)).data
     console.log(this.exhibition)
     this.tempRoute = Object.assign({}, this.$route)
   }
  }


</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.event-page-content
    @include flexCenterRow
    padding-top: 60px
    background-color: $dark-brown
    .pic-modal
        position: absolute
        background: white
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 1000
        color: white
    .cover-pic
        background-image: url("../assets/cover.png")
        background-size: cover
        width: 760px
        height: 862px
        //width: 100%
        //height: auto
        -webkit-clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0 100%)
        clip-path: polygon(15% 0, 100% 0%, 85% 100%, 0 100%)
        margin-left: -10px
    .info1
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: flex-end
        color: $light_white
        padding-left: 80px
        min-height: 90vh
        // position: absolute
        // right: 80px
        // top: 50vh
        .type
            @include flexCenterCol
            align-items: center
            //width: 96px
            height: 36px
            padding: 10px 20px
            border-radius: 18px
            border-width: 0px
            background-color: #ef9350
            letter-spacing: 1.6px
            color: $dark-brown
            margin-bottom: 10px
        .title-info
            width: 100%
            .time
                font-size: 20px
                letter-spacing: 3px
                font-weight: 400
            .title1
                margin-top: 26px
                font-size: 32px
                letter-spacing: 5.6px
            .hint
                margin-top: 13px
                margin-bottom: 50px
                font-size: 18px
                letter-spacing: 1.4px
                font-weight: 400
        .date-info
            @include flexCenterRow
            align-items: flex-start
            letter-spacing: 2.7px
            line-height: 2
            width: 100%
            margin-bottom: 60px
            .left

            .right
                @include flexCenterCol
                justify-content: flex-start
                align-items: flex-start

                font-size: 18px
                font-weight: 400
                width: 100%
                .li
                    @include flexCenterRow
                    align-items: flex-start
                    ._left
                        font-weight: 500
                        margin-right: 25px
                        white-space: nowrap
                        min-width: 110px
                    ._right
                        margin-right: 5px
                .img-block


    .down
        display: flex
        justify-content: space-between
        align-items: flex-start
        padding: 90px
        color: $light_white
        .right
            width: 75%
            .content-title
                line-height: 1.32
                letter-spacing: 1.8px
                margin-bottom: 38px
                font-size: 22px
            .content
                font-size: 16px
                line-height: 1.81
                letter-spacing: 1.3px
            .content-pic
                width: 100%
                height: 316px
                background-size: cover
                background-image: url("../assets/c1.png")
                margin: 60px 0


    .slash
        position: absolute
        border-style: solid
        border-width: 2px 0 0 0
        border-color: $hight-light
        width: 68px
        height: 68px
        transform: rotateZ(-70deg) translateY(-50%)
        left: 0
    .sub-title
        position: relative
        color: $hight-light
        width: 120px
        font-size: 24px
        margin-right: 30px
        margin-bottom: 20px

    @media all and(max-width: 1000px)
        padding: 2px
        .cover-pic
            margin-left: 0
            height: 500px
            width: 100%
            margin-bottom: 40px
        .info1
            padding: 0px
            justify-items: flex-start
            align-items: flex-start
            .title-info
              .time
                font-size: $font_small
                letter-spacing: 2px
                font-weight: 400
              .title1
                font-size: 22px
            .date-info
                flex-direction: column
                .right
                    font-size: 14px !important
                ._left
                  min-width: 80px !important
                .sub-title
                    .title1
                        margin: 40px 0


        .down
            margin-top: 10px
            padding: 0px
            flex-direction: column
            .right
                width: 100% !important
            .title1
                margin: 40px 0

</style>
