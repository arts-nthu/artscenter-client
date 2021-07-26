import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `${process.env.BASE_API}/api/v1`
  })
}
