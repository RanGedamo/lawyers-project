import jwtInterceptor from "../authToken/auth-Token";


export const coursesAPI = async () => {
    try {
        const result = await jwtInterceptor.get('api/courses');
        return result.data.result
    }
    catch (err) { console.log(err) };
};