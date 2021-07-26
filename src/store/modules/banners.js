import BannerService from '../../services/BannerService'
import ExhibitionService from '../../services/ExhibitionService'


// initial state
const state = {
  bannerList:[],
  exhibitionList:[],
  imageList:[]
}

// getters
const getters = {}

// mutations
const mutations = {
  fetchBanner (state, {banners, images, exhibitions}) {
    state.bannerList = banners
    state.imageList = images
    state.exhibitionList = exhibitions
  },
  createBanner (state,{banner, image, exhibition}) {
    state.bannerList.push(banner)
    state.imageList.push(image)
    state.exhibitionList.push(exhibition)

  },
  removeBanner(state,banner) {
    for(let i in state.bannerList){
      let item = state.bannerList[i]
      if(item.id == banner.id) {
        state.bannerList.splice(i,1)
        state.imageList.splice(i,1)
        state.exhibitionList.splice(i,1)
        break
      }
    }
  }
}


// actions
const actions = {
  async fetchBanner({commit},{self}) {
    try {
      console.log("fetching Banners.......")
      const response = await BannerService.showAll()
      const banners = response.data.banners
      const images = []
      const exhibitions = []
      for(let banner of banners){
        exhibitions.push((await ExhibitionService.show(banner.exhibitionId)).data)
      }
      commit('fetchBanner',{banners,images,exhibitions})
      console.log("fetching done.")
      self.index()
    } catch(err) {
      console.log(err)
    }
  },
  async createBanner({commit,rootGetters},{self,formData}) {
    try {
      console.log("create exhibition")
      const auth_token = rootGetters['users/fetchToken']
      const response = await BannerService.post(formData,auth_token)
      console.log("post banner done")
      const banner = response.data.banners
      const exhibition = (await ExhibitionService.show(banner.exhibitionId)).data
      console.log(image,exhibition)
      commit('createBanner',{banner,image,exhibition})
      commit('createExhibition',{e,image})
      self.message = response.data.notification.message
      self.$emit('send-message',{res:response})
      self.$vuetify.goTo(0)
      self.clearForm()
    } catch(err) {
      console.log(err)
    }
  },
  async removeBanner({commit,rootGetters},{self,banner}) {
    try {
      const auth_token = rootGetters['users/fetchToken']
      const response = await BannerService.remove(banner.id,auth_token)
      console.log(response)
      self.message = response.data.notification.message
      self.alert = true
      self.$vuetify.goTo(0)
      commit('removeBanner',banner)
      //commit('addNotification',response.data.notification)
    } catch(err) {
      console.log(err)
      if(err.response.statusText === 'Unauthorized'){
        alert(err.response.data.message)
      }
    }
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
