import jwtInterceptor from "../middleware/auth";


export const createReview=async(data,email)=>{

    const response=await jwtInterceptor.post(`http://lawmarket.us-east-1.elasticbeanstalk.com/review/${email}`,{
        userEmail:data.userEmail,
        comments:data.comments,
        image:data.image,
        name:data.name,
        rate:data.rate
    })

    const newReview = await response.data
    return newReview;

}

export const deleteReview=async(id)=>{
const response=await jwtInterceptor.delete(`http://lawmarket.us-east-1.elasticbeanstalk.com/review/${id}`)
const deleteDate=await response.data
return deleteDate;
}