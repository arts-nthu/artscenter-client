import MediaService from '../../services/MediaService'
import ExhibitionService from '../../services/ExhibitionService'

// initial state
const state = {
  exhibitionList:[],
  imageList:[],
}

// getters
const getters = {}

//mutations
const mutations = {
  fetchExhibition(state,e){
    state.exhibitionList =  e
  },
  createExhibition(state,{e,image}){
    state.exhibitionList.push(e)
    state.imageList.push(image)
  },
  removeExhibition(state,id) {
    for(let i in state.exhibitionList) {
      let item = state.exhibitionList[i]
      if(item.id == id) {
        state.exhibitionList.splice(i,1)
        state.imageList.splice(i,1)
        break
      }
    }
  },
  editExhibition(state,{e,image}) {
    for(let i in state.exhibitionList) {
      let item = state.exhibitionList[i]
      if(item.id == e.id) {
        state.exhibitionList.splice(i,1,e)
        state.imageList.splice(i,1,image)
        break
      }
    }
  }
}
// actions
const actions = {
  async fetchExhibition({commit}) {
    try {
      const e = (await ExhibitionService.showAll()).data
      commit('fetchExhibition',e)
    } catch(err) {
      console.log(err)
    }
  },
  async createExhibition({commit,rootGetters},{self,formData}){
    try {
      console.log("create exhibition")
      const auth_token = rootGetters['users/fetchToken']
      //if(!token)  throw 'Permision denied'
      const response = await ExhibitionService.post(formData,auth_token)
      console.log(response)
      const e = response.data.exhibitions
      const image = (await MediaService.show(e.coverId)).data
      commit('createExhibition',{e,image})
      self.$emit('close-dialog')
      self.$emit('send-message',{res:response})
      self.$vuetify.goTo(0)
      self.clearForm()
    } catch(err) {
      //console.log(err)
      //console.log(err.response)
      if(err.response.data.code === 'LIMIT_FILE_SIZE'){
        alert(err.response.data.code)
      }
      else if(err.response.statusText === 'Unauthorized'){
        alert(err.response.data.message)
      }
      return err.response
    }
  },
  async removeExhibition({commit,rootGetters},{self,id}) {
    try {
      const auth_token = rootGetters['users/fetchToken']
      const response = await ExhibitionService.remove(id,auth_token)
      console.log(response)
      self.message = response.data.notification.message
      self.alert = true
      self.$vuetify.goTo(0)
      commit('removeExhibition',id)
    } catch(err) {
      console.log(err.response)
      if(err.response.statusText === 'Unauthorized'){
        alert(err.response.data.message)
      }
    }
  },
  async editExhibition({commit,rootGetters},{self,formData,e_id}){
    try {
      console.log("edit exhibition")
      const token = rootGetters['users/fetchToken']
      for (var pair of formData.entries())
      {
      console.log(pair[0]+ ', '+ pair[1]);
      }
      const response = await ExhibitionService.put(formData,token,e_id)
      console.log(response)
      const e = response.data.exhibitions
      console.log(e)
      const image = (await MediaService.show(e.coverId)).data
      commit('editExhibition',{e,image})
      self.$emit('close-dialog')
      self.$emit('send-message',{res:response})
      self.clearForm()
    } catch(err) {
      console.log(err)
      console.log(err.response)
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
