import axios from "axios";

axios.defaults.baseURL = "http://localhost:6060/review";

export const createReview=async(data,email)=>{

    const response=await axios.post(`http://lawmarket.us-east-1.elasticbeanstalk.com/review/${email}`,{
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
const response=await axios.delete(`http://lawmarket.us-east-1.elasticbeanstalk.com/review/${id}`)
const deleteDate=await response.data
return deleteDate;
}