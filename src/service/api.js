import axios from 'axios'
import Cookies from 'js-cookie'
import { cekLog } from '../service/token'

export default function api() {
  axios.defaults.headers.common['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')

  if (cekLog) {
    const token = Cookies.get('cake')
    const api = axios.create({
      baseURL: 'http://127.0.0.1:8000/',
<<<<<<< HEAD
=======
      withCredentials: false,
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
      headers: { Authorization: 'Bearer ' + token },
    })
    return api
  } else {
    const api = axios.create({
      baseURL: 'http://127.0.0.1:8000/',
<<<<<<< HEAD
=======
      withCredentials: false,
      crossdomain: true,
>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
    })
    return api
  }
}
