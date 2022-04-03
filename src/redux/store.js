import { createStore , applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import { firebaseReducer } from "./registroDuck";
import thunk from 'redux-thunk'
import { inventarioReducer } from "./inventarioDuck";



const reducers = combineReducers({
  firebaseAuth: firebaseReducer,
  inventario: inventarioReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, composeEnhancers( applyMiddleware(thunk) ),
  // {  }, /* estado incial */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )

export default store ;