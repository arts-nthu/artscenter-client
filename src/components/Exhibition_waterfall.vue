<template lang="pug">
  .event-waterfall
    b-row.justify-content-md-start
      b-col.event-item(v-for="(item,index) in exhibitions" :key="index" xl="4" md="6" sm="12" cols="12")
        .card
          .link(@click="go(item.id)")
            .info1
              .date {{item.start_date}}
            .img(:style="setBackgroundImage(item.cover)")
            .title1 {{item.title}}
              .slash
            .sub-title {{item.subtitle}}


</template>

<script>
import ExhibitionService from '@/services/ExhibitionService'
export default {
  data: function() {
    return {
        exhibitions: [],
        images: [],
        start: 1,
        size: 9

    }
  },
  methods : {
    go: function(event) {
        //console.log(event)
        this.$router.push('/exhibitions/'+ event)
    },
    setBackgroundImage(filename){
        return {
            'background-image': 'url("'+filename+'")'
        }
    },
    async getExhibitions(typeOfArt,year,searchStr) {
        console.log(this.exhibitions)
        this.exhibitions = (await ExhibitionService.showAll(typeOfArt,year,searchStr, 1, 9)).data
        console.log(this.exhibitions)
        
    },
  },
  watch : {
      '$route' (to,from) {
        this.exhibitions.length = 0
        this.getExhibitions(to.query.typeOfArt,to.query.year,to.query.searchStr)
      }
    },
  async mounted() {
    try {
        let response = await ExhibitionService.showAll(this.$route.query.typeOfArt,this.$route.query.year,this.$route.query.searchStr, 1, 7)
        this.exhibitions = response.data.data
        console.log(this.exhibitions)

    }catch (err){
      this.error = err
      console.log(err)
    }
  },
}
</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.event-waterfall
  margin-top: 20px
  .event-item
    width: 350px
    .card
      background-color: #231917!important
      width: 300px
      border: 0px!important
      box-shadow: 0px 0px 0px 0px!important
      text-align: center
      .link
          .info1
              margin-bottom: 10px
              .date
                  font-size: 20px
                  color: $light-white
                  letter-spacing: 1.3px

          .img
              width: 230px
              height: 270px
              background-image: url("../assets/new.png")
              background-size: auto 100%
              background-position: center
              position: relative
              margin: auto
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
              .img
                  background-size: auto 120%
                  &:after
                      opacity: 1
          .title1
              margin-top: 50px
              font-size: 20px
              font-weight: 600
              color: $light-white
              letter-spacing: 2.1px
              position: relative

          .sub-title
              margin-top: 8px
              margin-bottom: 40px
              letter-spacing: 1.4px
              color: $hight-light


</style>
