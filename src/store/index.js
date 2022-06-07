import {createStore } from 'redux'
import reducer from './reducer'

const store = createStore (reducer,window.STATE_FROM_SERVER)

export default store