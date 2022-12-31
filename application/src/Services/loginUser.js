export const login = async(user)=>{
    try{
        const result = await fetch("http://localhost:3030/api/users/login",{
            method:"post",
            headers:{'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        return result.json()
    }
        catch(err){console.log(err);};

}