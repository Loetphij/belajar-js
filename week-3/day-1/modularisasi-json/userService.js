import users from "./users.json" with {type : "json"}
function getAllUser(){
    users.forEach(u => {
        console.log(`Username: ${u.username}, E-mail: ${u.email}`)
    })   
}
getAllUser()

function getUsersByID(id) {
  return console.log(users.find(u => u.id === id)) 
}
getUsersByID(2)

