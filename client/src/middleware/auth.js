import axios from "axios"
import Cookies from 'js-cookie'

const jwtInterceptor = axios.create({
    baseURL:"http://lawmarket-env-1.eba-zqsupn3a.us-east-1.elasticbeanstalk.com"
})
 jwtInterceptor.defaults.headers.common['authorization'] = Cookies.get('authorization');

export default jwtInterceptor;