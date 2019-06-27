import { createStore } from 'redux'
import allReducers from './reducers/mainreducer'

const store = createStore(allReducers)


export default store