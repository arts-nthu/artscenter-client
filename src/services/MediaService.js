import Api from '@/services/Api'

export default {
  post (formData,auth_token) {
    return Api().post('medias',formData,
    {
      headers: {
          'Content-Type': 'multipart/form-data',
          token:auth_token
      }
    }
  )
  },
  showAll () {
    return Api().get('medias')
  },
  show (mediaId) {
    return Api().get(`medias/${mediaId}`)
  }

}
