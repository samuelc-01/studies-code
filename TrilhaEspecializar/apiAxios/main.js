const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response =>{apiResult.textContent = JSON.stringify(response.data)})
    .catch(error => console.error(error))
}


function addUsers() {
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}



function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}


function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}


function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

//deleteUser(2)







const userUpdated = {
    name: "SaciDePatinete",
    avatar:"https://picsum.photos/200/300",
    city: "salvador",
}
const newUser = {
    name: "samuelzin Mirabamba",
    avatar: "https://picsum.photos/200/300",
    city: "O lugar secreto",

}

//updateUser(3 , userUpdated)
//getUser(2)
//addUsers(newUser)
