import {CHANGE_AUTHED, CLEAR_AUTHED} from './constants'


const setAuthedUser = (authedUser) => ({
  type: CHANGE_AUTHED,
  payload:  authedUser
})

const clearAuthedUser = () => ({
  type: CLEAR_AUTHED,
  payload: null
})



export {setAuthedUser, clearAuthedUser}