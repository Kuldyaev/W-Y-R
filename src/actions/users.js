
import {ADD_NEW_USER} from './constants'



const addNewUser = (newUser, newPass) => ({
  type: ADD_NEW_USER,
  payload: {
        authSuccess: false,
        authUser: 0
        }
})


export {addNewUser}