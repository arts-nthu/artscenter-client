<template lang="pug">
  .calendar
    .container
      .title1
        .en Calendar
        .ch 活動月曆
      //- EventTag
      FullCalendar#cal-2(
        :header="fcHeader"
        :config="fcConfig"
        :event-sources="eventSources"
      )
      //full-calendar#cal(
        :events="fcEvents"
        :header="fcHeader"
        locale="zh"
        @eventClick="eventClick"
        @dayClick="dayClick"
        @moreClick="moreClick"
        @changeMonth="changeMonth"
        )




</template>

<script>
//import EpaperWaterfall from "../components/epaper_waterfall"
//import EventTag from "../components/calender_event_tag"
import { FullCalendar } from 'vue-full-calendar'
import ExhibitionService from '@/services/ExhibitionService'

export default {
  metaInfo: {
    title: '月曆', // set a title
    titleTemplate: '%s - 清大藝文中心', // title is now "My Example App - Yay!"
    htmlAttrs: {
      lang: 'zh-tw'
    }
  },
  data: function() {
    return {
      calData: [],
      eventSources:[],
      events_visual_art:{
        events:[]
      },
      events_show:{
        events:[]
      },
      events_public_art:{
        events:[]
      },
      events_film:{
        events:[]
      },
      fcEvents : [
        {
          title : 'Sunny Out of Office',
          start : '2016-08-25',
          end : '2017-07-27'
        }
      ],
      fcHeader : {
        left:   'prev,next today',
        center: 'title',
        right:  'timelineTenDay,month,agendaWeek,agendaDay,list'
      },
      fcConfig :{
        maxTime:"19:00:00",
        minTime:"08:00:00",
        defaultView: 'month'
      }
    }
  },
  methods : {
    'changeMonth' (day, jsEvent) {
    },
    'eventClick' (event, jsEvent, pos) {
       this.$router.push("events/page/"+event.id)

    },
    'dayClick' (day, jsEvent) {
      $(".more-link").css("color", "#ef9350");
    },
    'moreClick' (day, events, jsEvent) {
      $(".more-link").css("color", "#ef9350");
    },
    changeStyle(){
      setTimeout(()=> {
        if(this.$route.path=="/calender"){
          $(".more-link").css("color", "#ef9350");
          $(".event-item").css("background-color", "white");
          $(".event-item").css("color", "#231917");
          $(".weeks, .week, .events-day, .event-box, *").css("border-color", "#ef9350");
          this.changeStyle();
        }
      },1000);
    },
    timeformating(time) {
      if(time == null)  return ""
      else if(typeof(time)!= "undefined") {
          var new_time = time.split(':')
          var time_zone_time = parseInt(new_time[0]) + 8
          if(time_zone_time > 24)  time_zone_time-=24
          return time_zone_time.toString() + ':' + new_time[1]
      }
      else
          return ""
    },
    eventFormatting(exhibition){
      var event = {}
      event['id'] = exhibition.id
      event['title'] = exhibition.title
      event['start'] = exhibition.start_date+'T'+this.timeformating(exhibition.daily_start_time)
      event['end'] = exhibition.end_date+'T'+this.timeformating(exhibition.daily_end_time)

      console.log(event)
      return event
    }
  },
  components: {
    //EpaperWaterfall,
    'full-calendar': require('vue-fullcalendar'),
    //EventTag,
    FullCalendar
  },
  async mounted(){
    try{
      await this.$store.dispatch('exhibitions/fetchExhibition')
      const exhibitions = this.$store.state.exhibitions.exhibitionList
      //console.log(exhibitions)
      for(let e of exhibitions){
        if(e.type == "visual_art"){
          var event = this.eventFormatting(e)
          this.events_visual_art.events.push(event)
        }
        else if(e.type == "public_art"){
          var event = this.eventFormatting(e)
          this.events_public_art.events.push(event)
        }
        else if (e.type == "film"){
          var event = this.eventFormatting(e)
          this.events_film.events.push(event)
        }
        else if(e.type == "show"){
          var event = this.eventFormatting(e)
          this.events_show.events.push(event)
        }
      }
      this.events_visual_art['color'] = '#6184D8'
      this.events_visual_art['textColor'] = 'white'
      this.events_visual_art['borderColor'] = 'black'
      this.events_visual_art['displayEventTime'] = true

      this.events_public_art['color'] = '#50C5B7'
      this.events_public_art['textColor'] = 'white'
      this.events_public_art['borderColor'] = 'transparent'
      this.events_show['color'] = 'purple'
      this.events_show['textColor'] = 'white'
      this.events_show['borderColor'] = 'transparent'
      this.events_film['color'] = 'green'
      this.events_film['textColor'] = 'white'
      this.events_film['borderColor'] = 'transparent'
      console.log(this.events_visual_art)
      this.eventSources.push(this.events_visual_art)
      this.eventSources.push(this.events_public_art)
      this.eventSources.push(this.events_show)
      this.eventSources.push(this.events_film)
      console.log(this.eventSources)

      
      //console.log(this.visual_art_exhibitions)
    }catch(err){
      console.log(err)
    }

    /*
    this.$http.get("/exhibitions.json").then((response) => {
        this.calData = response.body.exhibitions
        console.log(this.calData)
        let temp = []
        for(let i=0; i<this.calData.length; i++){
          temp.push({
            title : this.calData[i].title,
            start : this.calData[i].start_date,
            end : this.calData[i].end_date,
            id: this.calData[i].id,
            cssClass: [this.calData[i].subject_type]
          })
        }
        this.fcEvents = temp
        this.changeStyle();
    })
    .catch((error => {
        console.log(error.statusText)
    }))
    */
  }
}
</script>

<style lang="scss">
@import "../assets/sass/base.sass";
#cal-2{
  .fc-button{
    color: $hight-light;
    background:transparent;
    border: 1px solid $hight-light;
  }
  .fc-button:hover{
    color: white;
    background: $hight-light;
    transition:0.5s;
  }
}

</style>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.event-item
  background-color: red !important
.calendar
  background-color: $dark_brown
  padding: 100px 90px 0 90px
  .container
    border-style: solid
    border-width: 3px 0 0 0
    border-color: $hight-light
    position: relative
    min-height: 1000px

    .title1
      @include flexCenterRow
      justify-content: center
      flex-direction: column
      color: $hight-light
      position: absolute
      background-color: $dark_brown
      position: absolute
      width: 192px
      right: 50%
      transform: translateX(50%) translateY(-50%)
      letter-spacing: 3.4px
      .ch
        font-size: 32px
        //right: 50%
        //transform: translateX(50%) translateY(-50%)

      .en
        font-size: 20px
    .center-row
      @include flexCenterRow
      justify-content: center
      margin: 60px 0 30px 0
    .email
      opacity: 0.8
      border: 1px $hight-light solid
      border-radius: 50px
      color: white
      background-color: rgba(0,0,0,0)
      width: 500px
      height: 50px
      font-size: 24px
      padding-left: 20px
    .subs
      border: 1px $hight-light solid
      border-radius: 50px
      color: $hight-light
      font-size: 24px
      width: 120px
      height: 50px
      margin-left: 15px
      text-align: center
      line-height: 50px
      &:hover
        background-color: $hight-light
        color: black
        cursor: pointer
    #cal-2
      margin-top: 100px
      color: $hight-light
      .fc-button
        color: $hight-light!important
    #cal
      background: none
      color: $hight-light !important
      border-color: $hight-light !important
      padding: 0
      margin-top: 100px
      border-color: $hight-light !important
      .full-calendar-body .dates .dates-events .events-week .events-day .event-box .more-link
        color: $hight-light !important
    .full-calendar-body
      background-color: red

    .Exhibition
      color: red !important

  @media all and (max-width: 900px)
    padding: 100px 20px 0 20px


</style>
