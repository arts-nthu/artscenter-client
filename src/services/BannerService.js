import Api from '@/services/Api'

export default {
  showAll () {
    return Api().get('banners')
  },
  show (bannersId) {
    return Api().get(`banners/${bannersId}`)
  }
}
