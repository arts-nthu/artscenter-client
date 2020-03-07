<template>
  <div id="app">
    <router-view name="nav1"></router-view>
    <router-view name="nav2"></router-view>
    <transition name="fade" mode="out-in">
      <router-view name="body"></router-view>
    </transition>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import NavigationMobile from './components/Navigation_mobile'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Navigation,
    NavigationMobile,
    Footer
  },



}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');
 html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  //font-weight: 300;
  font-weight: 700!important;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",'Noto Sans TC',Arial,sans-serif!important;

}
#app {
  padding-top: 100px;
  background-color: black;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",'Noto Sans TC',Arial,sans-serif!important;
  font-weight: 500!important;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
  opacity: 1;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

* {
  transition: 1s;
}



</style>
