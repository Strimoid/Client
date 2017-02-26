import { combineReducers } from 'redux'
import { entitiesReducer, queriesReducer } from 'redux-query'

const rootReducer = combineReducers({
  queries: queriesReducer,
  entities: entitiesReducer
})

export default rootReducer
