import {combineReducers} from 'redux'
import { ratesReducer } from './ratesReducer'

const rootReducer = combineReducers({
  rates: ratesReducer
})

export default rootReducer