<template lang="pug">
    .friends
        ._container
            b-container(fluid)
                b-row
                    b-col.title-content(v-html="friends_content")
                b-row.up
                    b-col(md="6")
                        img.pic(src="../assets/friend1.jpg")
                    b-col.right(md="6")
                        .title
                            img.go-icon(src="../assets/ll.png")
                            span 贊助藝中
                            img.go-icon(src="../assets/ll.png")
                        .sub-title 「清藝之友」募集
                        .content 清大藝術中心為全國最早成立的大學藝術中心，鑑於美學教育的重要，我們提供校園與社區豐富的藝術活動，領域跨足視覺、音樂、表演、電影藝術，並定期舉辦專題講座、大師班、工作坊，您的加入將讓本中心於未來能夠持續規劃完善的藝文節目！
                        a.btn-group(href="http://140.114.182.3:8080/static/file/donation.docx" target="_blank")
                            .pay 捐款方式
                            img.go-icon(src="../assets/download.png")
                        a.btn-group(href="http://dud.web.nthu.edu.tw/ezfiles/675/1675/img/2146/DF.pdf" target="_blank")
                            .point 捐款回饋作業要點
                            img.go-icon(src="../assets/download.png")


                b-row.down
                    b-col(md="6")
                        img.pic(src="../assets/friend2.jpg")
                    b-col.right(md="6")
                        .title
                            img.go-icon(src="../assets/lr.png")
                            span 志工招募
                            img.go-icon(src="../assets/lr.png")
                        .content 即日起本中心熱烈招募各類展演志工，歡迎各界愛好藝術的朋友踴躍報名
                        .sub-title 意者請洽 03-5162012
                        .brand
                            img.phone(src="../assets/menu/logo.png")
                            .name
                                //- .ch 03-5162012
                                .en 李小姐
</template>

<script>
export default {
  data: function() {
    return {
        friends_content:
            "「清藝之友」幕集 清華大學藝術中心成立於1988年，為全國最早設立之大學藝術中心，\
            迄今每年策劃、執行、協辦近百場相關藝文活動，不僅提供清華校園師生豐富的藝文饗宴，\
            亦廣邀社區民眾、鄰近中小學、園區團體等各類人士参與本中心各式藝文活動，\
            以攜手實踐校園內外美感教育之理想。\
            本中心提供多元領域之藝文活動，跨足視覺、音樂、表演、電影、科技藝術，\
            並定期舉辦專題講座、大師班、工作坊，\
            且引領「清華藝集」、「清華樂集」、「合勤表演小組」、「夜貓電影小組」等藝術社群的發展，\
            您的加入（志工）或資助（捐款）將支持本中心能夠持續規劃與執行更豐富多元之藝文活動與節目，\
            以服務更多廣大師生及群眾之美感需求！誠摯邀請您一同加入贊助清華大學藝術活動「清藝之友」的行列！謝謝您！"
    }
  },
  methods: {

  },
  mounted(){

  }
}
</script>


<style scoped>
._container{
  margin: auto!important;
}
</style>

<style scoped lang="sass">
@import "../assets/sass/base.sass"
.friends
    color: #f2eeee
    padding-bottom: 50px
    .title-content
        color: #dad7d4
        padding: 80px
    .pic
        height: 600px
        -webkit-clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0 100%)
        clip-path: polygon(25% 0, 100% 0%, 75% 100%, 0 100%)
    .title, .btn-group
        color: $hight-light
    .title
        margin-bottom: 65px
        span
            font-size: 28px
            padding: 0 30px
    .sub-title
        font-size: 16px
        letter-spacing: 4.5px
        margin-bottom: 25px

    .content
        font-size: 16px
        margin-bottom: 30px
    .btn-group
        @include flexCenterRow
        align-items: center
        justify-content: space-between
        width: 60%
        font-size: 18px
        padding: 5px 0
        cursor: pointer
    .down
        margin-top: 140px
    .right
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-items: start
    .brand
        @include flexCenterRow
        justify-content: start

        .phone
            width: 50px
        .name
            @include flexCenterCol
            dispaly: inline-flex
            align-items: start
            margin-left: 20px
            margin-right: 10px
            font-size: 18px
    .down
        .right
            justify-content: center
    @media all and(max-width: 900px)
        .title-content
            padding: 0
            margin: 80px 0
        .right
            margin-top: 80px
        .down
            margin-top: 80px
        .btn-group
            width: 100%
</style>
