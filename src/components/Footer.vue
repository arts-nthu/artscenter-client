<template lang="pug">
    .foot
        ._container
            b-container(fluid)
                b-row(v-show="$i18n.locale=='ch'")
                    b-col.about(cols="12" lg="7")
                        b-row.info1
                            b-col.mobile(cols="12")
                                .open-time {{$t('footer.mobile.opening_time')}}
                                .phone {{$t('footer.mobile.phone')}}
                                .fax {{$t('footer.mobile.fax')}}
                                .mail {{$t('footer.mobile.email')}}
                                .address {{$t('footer.mobile.address')}}
                            b-col.left(cols="3" md="3")
                                .open-time {{$t('footer.opening_time')}}
                                br.mobile
                                .phone {{$t('footer.phone')}}
                                br.mobile
                                .fax {{$t('footer.fax')}}
                                br.mobile
                                .mail {{$t('footer.email')}}
                                br.mobile
                                .address {{$t('footer.address')}}
                            b-col.right(cols="9" md="9")
                                .open-time {{$t('footer.opening_time_content')}}
                                br.mobile
                                .phone {{$t('footer.phone_content')}}
                                br.mobile
                                .fax {{$t('footer.fax_content')}}
                                br.mobile
                                .mail {{$t('footer.email_content')}}
                                br.mobile
                                .address {{$t('footer.address_content')}}
                        b-row.quick-link
                            b-col.link-group
                                router-link.links(tag="a" to="/calendar") {{$t('footer.calender')}}
                                router-link.links(tag="a" to="/place?tab=0" @click="goTop") {{$t('footer.zyxel')}}
                                router-link.links(tag="a" to="/place?tab=1" @click="goTop") {{$t('footer.exhibition_hall')}}
                                router-link.links(tag="a" to="/place?tab=2" @click="goTop") {{$t('footer.art_workshop')}}
                            b-col.link-group
                                router-link.links(tag="a" to="/exhibitions/index" @click="goTop") {{$t('footer.application_for_exhibition')}}
                                router-link.links(tag="a" to="/exhibitions/index" @click="goTop") {{$t('footer.seeking')}}
                                router-link.links(tag="a" to="/friends" @click="goTop") {{$t('footer.sponsor')}}
                                router-link.links(tag="a" to="/friends" @click="goTop") {{$t('footer.volunteer')}}
                            b-col.link-group
                                a.links(href="http://www.nthu.edu.tw/" target="_blank" @click="goTop") {{$t('footer.school')}}
                                a.links(href="https://www.npm.gov.tw/" target="_blank" @click="goTop") {{$t('footer.museum')}}
                                a.links(href="http://npac-ntch.org/zh/" target="_blank" @click="goTop") {{$t('footer.theater')}}
                                a.links(href="http://www.npac-ntt.org/index" target="_blank" @click="goTop") {{$t('footer.taichung_theater')}}
                    br.mobile
                    br.mobile
                    b-col(cols="12" lg="5")
                        iframe.map(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14488.118836654818!2d120.9936884!3d24.7944362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53095d4c4a8e47db!2z5ZyL56uL5riF6I-v5aSn5a246Jed6KGT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1550901676443" frameborder="0" style="border:0" allowfullscreen)
                b-row(v-show="$i18n.locale=='en'")
                    b-col.about(cols="12" lg="7")
                        b-row.info1
                            b-col.mobile(cols="12")
                                .open-time {{$t('footer.mobile.opening_time')}}
                                .phone {{$t('footer.mobile.phone')}}
                                .fax {{$t('footer.mobile.fax')}}
                                .mail {{$t('footer.mobile.email')}}
                                .address {{$t('footer.mobile.address')}}
                            b-col.left(cols="3" md="3")
                                .open-time {{$t('footer.opening_time')}}
                                br.mobile
                                .phone {{$t('footer.phone')}}
                                br.mobile
                                .fax {{$t('footer.fax')}}
                                br.mobile
                                .mail {{$t('footer.email')}}
                                br.mobile
                                .address {{$t('footer.address')}}
                            b-col.right(cols="9" md="9")
                                .open-time {{$t('footer.opening_time_content')}}
                                br.mobile
                                .phone {{$t('footer.phone_content')}}
                                br.mobile
                                .fax {{$t('footer.fax_content')}}
                                br.mobile
                                .mail {{$t('footer.email_content')}}
                                br.mobile
                                .address {{$t('footer.address_content')}}
                    b-col(cols="12" lg="5")
                      iframe.map(src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14488.118836654818!2d120.9936884!3d24.7944362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x53095d4c4a8e47db!2z5ZyL56uL5riF6I-v5aSn5a246Jed6KGT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1550901676443" frameborder="0" style="border:0" allowfullscreen)
                b-row.quick-link(v-show="$i18n.locale=='en'")
                    b-col.link-group(cols="12" md="4")
                        router-link.links(tag="a" to="/calendar") {{$t('footer.calender')}}
                        router-link.links(tag="a" to="/place?tab=0" @click="goTop") {{$t('footer.zyxel')}}
                        router-link.links(tag="a" to="/place?tab=1" @click="goTop") {{$t('footer.exhibition_hall')}}
                        router-link.links(tag="a" to="/place?tab=2" @click="goTop") {{$t('footer.art_workshop')}}
                    b-col.link-group(cols="12" md="4")
                        router-link.links(tag="a" to="/exhibitions/index" @click="goTop") {{$t('footer.application_for_exhibition')}}
                        router-link.links(tag="a" to="/exhibitions/index" @click="goTop") {{$t('footer.seeking')}}
                        router-link.links(tag="a" to="/friends" @click="goTop") {{$t('footer.sponsor')}}
                        router-link.links(tag="a" to="/friends" @click="goTop") {{$t('footer.volunteer')}}
                    b-col.link-group(cols="12" md="4")
                        a.links(href="http://www.nthu.edu.tw/" target="_blank" @click="goTop") {{$t('footer.school')}}
                        a.links(href="https://www.npm.gov.tw/" target="_blank" @click="goTop") {{$t('footer.museum')}}
                        a.links(href="http://npac-ntch.org/zh/" target="_blank" @click="goTop") {{$t('footer.theater')}}
                        a.links(href="http://www.npac-ntt.org/index" target="_blank" @click="goTop") {{$t('footer.taichung_theater')}}
                    br.mobile
                    br.mobile

                b-row
                    p.right-text  國立清華大學藝術中心 Arts Center, National Tsing Hua University © 2017 All rights reserved.
</template>
<script>
export default {
  data: function() {
    return {
      EN_width:5
    }
  },
  methods: {
    goTop: function(){
      $('html,body').scrollTop(0)
    }
  }
}
</script>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.foot
    @include flexCenterCol
    background-color: $dark_brown
    padding: 45px 100px 100px 100px
    font-size: $font_middle
    font-weight: 800
    ._container
        @include flexCenterRow
        border-style: solid
        border-width: 5px 0 0 0
        border-color: $hight-light
        padding-top: 45px
        .about
            line-height: 34px
            letter-spacing: 1.4px
            padding: 0 20px
            .info1
                .left
                    color: $light_white
                    font-weight: 800
                .right
                    color: $dark_white
            .quick-link
                color: $hight-light
                margin: 47px 0
                .link-group:nth-child(1)
                    padding-left: 0
                .link-group:nth-child(2)
                    padding: 0 33px 0 10px
                    border-width: 0 2px
                    border-style: solid
                    border-color: $hight-light
                .link-group
                    .links
                        cursor: pointer
                        display: block
                        color: $hight-light
        .quick-link
            color: $hight-light
            margin: 47px 0
            .link-group:nth-child(1)
                padding-left: 0
            .link-group:nth-child(2)
                padding: 0 33px 0 10px
                border-width: 0 2px
                border-style: solid
                border-color: $hight-light
            .link-group
                .links
                    cursor: pointer
                    display: block
                    color: $hight-light
                    margin: 8px 0
        .map
            background-image: url("../assets/map.png")
            background-size: cover
            height: 358px
            width: 100%
            filter: hue-rotate(175deg) !important
        .right-text
            width: 100%
            color: $dark_white
            text-align: left
            padding-left: 20px
        .mobile
            display: none
@media all and (max-width: 900px)
    .foot
        padding: 45px 20px 20px 20px
        font-size: $font_small
        ._container
            .about
                .info1
                    .mobile
                        margin-bottom: 20px
                    .right
                        display: none
                    .left
                        display: none
                .quick-link
                    display: block
                    margin: 0
                    .link-group
                        padding: 0
                    .link-group:nth-child(2)
                        padding: 0
                        border: none !important
                .mobile
                    display: block
                    color: $light_white
            .quick-link
                display: block
                margin: 0
                .link-group
                    padding: 0
                .link-group:nth-child(2)
                    padding: 0
                    border: none !important
            .map
                margin-top: 20px
</style>
