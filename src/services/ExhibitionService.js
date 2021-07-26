import Api from '@/services/Api'

export default {
  post (formData,auth_token) {
    return Api().post('exhibitions',formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token:auth_token
        }
      }
    )
  },
  put (formData,auth_token,exhibitionId){
    return Api().put(`exhibitions/${exhibitionId}`,formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token:auth_token
        }
      }
    )
  },
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
          typeOfArt: typeOfArt,
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
  },
  remove (exhibitionsId,auth_token) {
    return Api().delete(`exhibitions/${exhibitionsId}`,{
      headers: {
        token: auth_token
      }
    })
  }
}
