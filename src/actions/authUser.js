import {CHANGE_AUTHED, CLEAR_AUTHED} from './constants'


const setAuthedUser = (authedUser) => ({
  type: CHANGE_AUTHED,
  payload: {
        authSuccess: true,
        authUser: authedUser
        }
})

const clearAuthedUser = () => ({
  type: CLEAR_AUTHED,
  payload: {
        authSuccess: false,
        authUser: 0
        }
})



export {setAuthedUser, clearAuthedUser}