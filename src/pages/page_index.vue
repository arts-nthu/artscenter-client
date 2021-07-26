<template lang="pug">
  .index-page
    .slider
      b-carousel(id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd")
        b-carousel-slide.s-item(v-for="(item,i) in banners" :key="i" :style="`background-image:url(${item.image}`")
          ///img(slot="img" class="d-block img-fluid w-100"
             :src="setBannerImage(i)" alt="image slot" @click="goTo(item)")
          //h1 {{exhibitions[i].data.title}}
          //h3 {{exhibitions[i].data.subtitle}}

    .event
      ._container
        .event-container
          .title2(v-if="this.$i18n.locale == 'ch'")
            .en {{$t('page_index.latest_news','en')}}
            .ch {{$t('page_index.latest_news','ch')}}
          .title2(v-if="this.$i18n.locale == 'en'")
            .en
            .ch {{$t('page_index.latest_news')}}
          //.content
            br
            br
            br
            b-row.post()
              b-col.post-img(cols="12" lg="6" style="")
                a(href="https://i.imgur.com/dF7ySXi.jpg" target="_blank")
                  img(src="https://i.imgur.com/dF7ySXi.jpg" style="width: 400px")
              b-col.post-text(cols="12" lg="6" style="text-align: left")
                h2(style="padding: 10px 0px") 清華AI樂團音樂會
                p 時間: 2020/1/19(日）14:30
                p 地點: 台北誠品松菸店表演廳（掃QR code, 索票入場）
                p
                  | 附件:
                  a(href="https://i.imgur.com/f4M83O8.jpg" target="_blank")  票券檔
                  | 也可以自行印出入場時使用

            //h4 2019【戲劇小丑工作坊】線上報名 錄取名單
            br
            //h5 李健偉 游雅筑 劉頤 陳姿穎 莊孔堃 陳文智 程郁霖 陳冠霖 謝昀庭
            br
            br
            br
            br
          //.content
            br
            br
            p 親愛的朋友們，感謝您的支持<br/>
              |《暗戀桃花源》30週年紀念版 成功索票名單，請見以下連結（姓名／電話末三碼對照），<br/>
            |請於開放領票時間，攜帶本人有效證件至藝術中心辦公室領票，不接受代領，逾時不候。<br/>
            |開放領票時間： <br/>
            |10月05日（五）09：00～12：30；14：00～20：00 <br/>
            |10月06日（六）09：00～12：00 <br/>
            |再次感謝您的支持。活動洽詢清大藝術中心03-5742899。<br/>

            a.link(href="https://drive.google.com/file/d/1lwMpizUOCcaeLzDSRNRXa-Yf4elvjEtO/view?usp=sharing") 成功索票連結
            br
            br
            br
            br
            br
        .event-container
          .title2(v-if="this.$i18n.locale == 'ch'")
            .en {{$t('page_index.upcoming_event','en')}}
            .ch {{$t('page_index.upcoming_event','ch')}}
          .title2(v-if="this.$i18n.locale == 'en'")
            .en
            .ch {{$t('page_index.upcoming_event')}}
          ExhibitionComingSoon
          .triple-line
            .line1
            .line2
            .line3

</template>

<script>
  import BannerService from '@/services/BannerService'
  import ExhibitionComingSoon from '../components/Exhibition_coming_soon'

  export default {
    components: {
      ExhibitionComingSoon
  },
    data () {
      return {
        banners:[
          {
            image: "https://i.imgur.com/zUgMs8j.jpg",
            title: "清華大學藝術祭"
          },
          {
            image: "https://i.imgur.com/wt88wrU.jpg",
            title: "應材文藝季"
          }
        ],
        exhibitions:[],
        images: [],
        slide:0,
        sliding:null
      }
    },
    methods : {
      onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    goTo(item) {
      console.log(item.exhibitionId)
      console.log("hi")
      this.$router.push('/exhibitions/'+ item.exhibitionId)
    },
    setBannerImage(filename){
        console.log(filename)
        return 'static/uploads/'+filename
      },
      index(){
        this.banners = this.$store.state.banners.bannerList
        console.log(this.banners)
        this.exhibitions = this.$store.state.banners.exhibitionList
        this.images = this.$store.state.banners.imageList
      }

    },
    /*
    async created() {
      await this.$store.dispatch('banners/fetchBanner',{self:this} )
      console.log(this.banners)

    },

    */
    async created() {
      //this.banners = await BannerService.showAll()
      //this.banners = this.banners.data
      console.log(this.banners)
    },
    mounted() {

    },
  }
</script>




<style lang="sass" scoped>
  @import "../assets/sass/base.sass"
  .index-page
    background-color: $dark_brown
    min-height: 100vh
    .slider
      height: 600px
      .s-item
        width: 100%
        height: 600px
        background-size: cover !important
        background-position: 50% 50% !important
        .bannerImage
          width: 1000px
          height: 650px
    .event
        @include flexCenterRow
        padding: 150px 90px 0 90px
        @media all and (max-width: 900px)
          padding: 100px 20px 0 20px
        .event-container
          border-style: solid
          border-width: 3px 0 0 0
          border-color: $hight-light
          position: relative
          .title2
            @include flexCenterRow
            justify-content: center
            flex-direction: column
            color: $hight-light
            position: absolute
            background-color: $dark_brown
            position: absolute
            right: 50%
            //width: 20%
            padding: 30px 20px 10px 20px
            transform: translateX(50%) translateY(-70%)
            letter-spacing: 4.3px
            .ch
              font-size: $font_title
              min-height: 10px
            .en
              font-size: $font_sub_title
              white-space: noWrap
          .content
            color: white
            letter-spacing: 3.4px
            font-size: $font_sub_title
            justify-content: center
            text-align: center
            .link
              font-size: $font_title

        .event-container
          border-style: solid
          border-width: 3px 0 0 0
          border-color: $hight-light
          position: relative
          .title
            @include flexCenterRow
            justify-content: center
            flex-direction: column
            color: $hight-light
            position: absolute
            background-color: $dark_brown
            position: absolute
            right: 50%
            width: 200px
            transform: translateX(50%) translateY(-70%)
            letter-spacing: 3.4px
            .ch
              font-size: $font_title
            .en
              font-size: $font_sub_title
              white-space: noWrap
</style>
