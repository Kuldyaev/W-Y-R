import {ADD_NEW_USER} from './constants'

const addNewUser = (newUser, newPass, newAva) => ({
    type: ADD_NEW_USER,
    id: newUser,
    username:newUser,
    password: newPass,
    ava: newAva
})

export {addNewUser}