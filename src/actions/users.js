import {ADD_NEW_USER, ADD_INIT_USERS} from './constants'

function transform(users) {
    const answ2 = {}
    const answ = Object.keys(users).map((u) => {
        return {[users[u].id]:{
                            id: users[u].id,
                            username: users[u].name,
                            password: users[u].name,
                            ava: users[u].avatarURL,
                            }          
                }
    })

    answ.forEach((a)=>{
        answ2[Object.keys(a)[0]] = Object.values(a)[0]
    })
    
    return answ2     
}


const addNewUser = (newUser, newPass, newAva) => ({
    type: ADD_NEW_USER,
    id: newUser,
    username:newUser,
    password: newPass,
    ava: newAva
})

const addInitUsers = (users) => ({
    type: ADD_INIT_USERS,
    payload: transform(users)
    
})

export {addNewUser, addInitUsers}