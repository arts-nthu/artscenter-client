import Api from '@/services/Api'

export default {
  showAll () {
    return Api().get('publications')
  },
  show (publicationsId) {
    return Api().get(`publications/${publicationsId}`)
  }
}