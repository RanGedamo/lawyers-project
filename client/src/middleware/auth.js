import axios from "axios"
import Cookies from 'js-cookie'

const jwtInterceptor = axios.create({
    baseURL:"http://localhost:6060/"
})
 jwtInterceptor.defaults.headers.common['authorization'] = Cookies.get('authorization');

export default jwtInterceptor;