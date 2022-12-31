
export default async function postUser  (user) {
    try {
        return await fetch("http://localhost:3030/api/users/create", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res=>res.json())
    }
    catch (err) { console.log(err) }
};