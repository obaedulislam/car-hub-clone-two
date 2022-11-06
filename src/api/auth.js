export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }

    //Get JWT Token
    fetch('https://car-hub-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);

        //Local storage is easiest but not best for store token
        localStorage.setItem('carhub-token', data.token)

    });


}