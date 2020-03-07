import Vue from 'vue'
import Router from 'vue-router'


import Navigation from '../components/Navigation'
import NavigationMobile from '../components/Navigation_mobile'
import Footer from '../components/Footer'

import PageIndex from '../pages/page_index.vue'
import PageHistory from '../pages/page_history.vue'
import PageActivity from '../pages/page_activity.vue'
import PagePeople from '../pages/page_people.vue'
import PageCollectArt from '../pages/page_collect_art.vue'
import PageCollectMusic from '../pages/page_collect_music.vue'
import PagePublication from '../pages/page_publication.vue'
import PagePublicationContent from '../pages/page_publications_content.vue'
import PageExhibitionIndex from '../pages/page_exhibition_index.vue'
import PageExhibition from '../pages/page_exhibition.vue'
import PageExhibitionContent from '../pages/page_exhibition_content.vue'
import PageFriends from '../pages/page_friends.vue'
import PagePlace from '../pages/page_place.vue'
import PageCalendar from '../pages/page_calendar.vue'




Vue.use(Router)

export default new Router({
  routes: [

    { path: '/history', name: 'history' ,
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageHistory,
      footer: Footer

    }},
    { path: '/place', name: 'place' ,
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PagePlace,
      footer: Footer

    }},
    { path: '/activity', name: 'activity',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageActivity,
      footer: Footer

    }},
    { path: '/people', name: 'people',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PagePeople,
      footer: Footer

    }},
    { path: '/calendar', name: 'calendar',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageCalendar,
      footer: Footer

    }},
    { path: '/friends', name: 'friends',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageFriends,
      footer: Footer

    }},
    { path: '/collect/art',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageCollectArt,
      footer: Footer

    }},
    { path: '/collect/music',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageCollectMusic,
      footer: Footer

    }},
    { path: '/exhibitions/index', name: 'exhibition_index',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageExhibitionIndex,
      footer: Footer

    }},
    { path: '/exhibitions/:pid', name: 'exhibitionsContent',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageExhibitionContent,
      footer: Footer

    }},

    { path: '/exhibitions', name: 'exhibitions',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageExhibition,
      footer: Footer

    }},


    { path: '/publications/:pid', name: 'publications_content',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PagePublicationContent,
      footer: Footer

    }},
    { path: '/publications', name: 'publications',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PagePublication,
      footer: Footer

    }},
    { path: '/', name: 'pageindex',
    components: {
      nav1: Navigation,
      nav2: NavigationMobile,
      body: PageIndex,
      footer: Footer

    }},

  ]
})
