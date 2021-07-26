import Api from '@/services/Api'

export default {
  showAll (typeOfArt,year,searchStr, start, size) {
    if(searchStr) {
      return Api().get('exhibitions',{
        params: {
          searchStr: searchStr,
          start: start,
          size: size
        }
      })
    }
    else if(typeOfArt) {
      return Api().get('exhibitions',{
        params: {
          type: typeOfArt,
          start: start,
          size: size
        }
      })
    }
    else if(year) {
      return Api().get('exhibitions',{
        params: {
          year: year,
          start: start,
          size: size
        }
      })
    }
    else {
      return Api().get('exhibitions',{
        params: {
          start: start,
          size: size
        }
      })
    }

  },
  showComingSoon() {
    return Api().get('exhibitions/comingSoon')
  },
  show (exhibitionsId) {
    return Api().get(`exhibitions/${exhibitionsId}`)
  }
}
