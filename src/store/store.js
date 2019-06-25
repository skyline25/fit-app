import { createStore, combineReducers, applyMiddleware } from 'redux'
import { workState } from './reducers'
import thunk from 'redux-thunk'
import storeInit from '../data/data.json'

const store = applyMiddleware(thunk)(createStore)(
  combineReducers({ workState }),
  (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : storeInit
)

store.subscribe(()=>{
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

export default store