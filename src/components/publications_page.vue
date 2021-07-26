<template lang="pug">
    .publications-page-content
        ._container
            b-container(fluid)
                b-row
                    b-col(cols="12" lg="6")
                        //-.cover-pic(:style="setBackgroundImage(publication.cover.url)")
                        .cover-pic(:style="setBackgroundImage(image.file)")

                        //- :style="background-image: url("+ this.publication.cover.url +" )"
                        //- .pics
                        //-     img(src="../../static/cover.png")
                        //-     img(src="../../static/cover.png")
                        //-     img(src="../../static/cover.png")
                    b-col(cols="12" lg="6")
                        .info1
                            .title-info1
                                .title {{publication.name}}
                                .hint 作者／{{publication.author}}
                            .date-info1
                                .left
                                    .sub-title
                                        .slash
                                        .title 典藏資訊
                                .right
                                    ._left
                                        .open-time 出版日期 {{publication.publish_date}}
                                        .phone 發行處&nbsp;&nbsp; {{publication.publisher}}
                                        .fex 售價&nbsp;&nbsp;&nbsp;&nbsp; {{publication.price}}
                                        .mail ISBN&nbsp;&nbsp;&nbsp; {{publication.isbn}}
                                        .address 規格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{publication.spec}}
                                    //- ._right
                                    //-     .open-time {{publication.publish_date}}
                                    //-     .phone {{publication.publisher}}
                                    //-     .fex {{publication.price}}
                                    //-     .mail {{publication.isbn}}
                                    //-     .address 平裝
                b-row.down
                    b-col.left(cols="4")
                        .sub-title
                            .slash
                            .title 簡介與作者簡歷
                    b-col.right(cols="8")
                        p(v-html="publication.description")
                        br
                        br
                        //- p.title {{publication.author}}
                        br
                        br

</template>


<script>
import PublicationService from '@/services/PublicationService'

export default {
  data () {
    return {
        publication: [],
        image: [],
        }
    },
  async mounted() {
    try {
        const pid = this.$route.params.pid
        this.publication = (await PublicationService.show(pid)).data
    } catch (err){
        console.log(err)
    }

  },
  methods : {
    async getPublication(id) {
        this.publication = (await PublicationService.show(id)).data
    },
    setBackgroundImage(filename) {
        return {
            'background-image': 'url("'+filename+'")'
        }
    }
  },
  watch : {
      '$route' (to,from) {
          this.getPublication(to.params.pid)
          console.log(this.image.id)
      }
    }
  }
</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.publications-page-content
    @include flexCenterRow
    padding-top: 60px
    background-color: $dark-brown

    .cover-pic
        background-image: url("../assets/cover.png")
        background-size: cover
        background-position: center
        width: 100%
        height: 500px

    .pics
        @include flexCenterRow
        justify-content: flex-start
        width: 100%
        margin-top: 20px
        img
            width: 32%
            margin: 0 1%


    .info1
        @include flexCenterCol
        height: 100%
        color: $light_white
        justify-content: flex-start
        align-items: flex-start
        margin-left: 60px
        .title-info1

            .time
                font-size: 20px
                letter-spacing: 3px
            .title
                font-size: 35px
                letter-spacing: 5.6px
            .hint
                margin-top: 26px
                margin-bottom: 80px
                font-size: 18px
                letter-spacing: 1.4px
        .date-info1
            @include flexCenterRow
            align-items: flex-start
            letter-spacing: 2.7px
            line-height: 2
            .left

            .right
                @include flexCenterRow
                justify-content: flex-start
                font-size: 18px
                ._left
                    font-weight: 500
                    margin-right: 38px
                ._right
                    margin-right: 20px
            .phone
                white-space: nowrap

    .down
        margin-top: 150px
        p
            color: #d8d8d8
            letter-spacing: 3px
            line-height: 2
            font-size: 16px
            font-weight: normal
            &.indent
                text-indent: 40px
        .title
            font-size: 20px
            text-indent: 0px
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
        margin-right: 30px
        font-size: 24px
</style>
