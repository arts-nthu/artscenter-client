import Api from '@/services/Api'

export default {
  post (data) {
    return Api().post('publications', data)
  },
  showAll () {
    return Api().get('publications')
  },
  show (publicationsId) {
    return Api().get(`publications/${publicationsId}`)
  }
}