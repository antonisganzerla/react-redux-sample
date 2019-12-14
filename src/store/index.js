import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
    //{products: {data: [{name: 'teste', price: 10}]}}
);

export default store;