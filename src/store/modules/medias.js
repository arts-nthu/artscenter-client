import MediaService from '../../services/MediaService'

// initial state
const state = {
  mediaList:[]
}

// getters
const getters = {}

// mutations
const mutations = {
  fetchMedia(state,images){
    state.mediaList = images
  }
}


// actions
const actions = {
  async fetchMedia({commit},{self}) {
    try {
      const response = await MediaService.showAll()
      console.log(response)
      commit('fetchMedia',response.data)
      self.mediaList = response.data
      self.items_length = Math.ceil(self.mediaList.length / self.rowsPerPage)
    } catch(err) {
      console.log(err)
    }
  },
  async createMedia({commit,rootGetters},{self,formData}) {
    try {
      console.log("create exhibition")
      const auth_token = rootGetters['users/fetchToken']
      //if(!token)  throw 'Permision denied'
      const response = await MediaService.post(formData,auth_token)
      self.res = response
      //console.log(response)
    } catch(err) {
      //console.log(err.response)
      if(err.response.status == 401){
        alert("沒有登入")
      }
    }
  },
  async removeMedia({commit,rootGetters},{self,banner}) {
    try {

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
