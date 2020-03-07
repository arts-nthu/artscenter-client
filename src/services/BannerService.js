import Api from '@/services/Api'

export default {
  post (formData,auth_token) {
    return Api().post('banners',formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': auth_token,
        }
      }
    )
  },
  showAll () {
    return Api().get('banners')
  },
  remove (bannersId,auth_token) {
    return Api().delete(`banners/${bannersId}`,{
      headers:{
        token: auth_token
      }
    })
  },
  show (bannersId) {
    return Api().get(`banners/${bannersId}`)
  }
}
