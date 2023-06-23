import {createStore,combineReducers,applyMiddleware} from 'redux'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';

import { getProductsReducer,getProductDetailsReducer } from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';



const reducer=combineReducers({

    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer

});

const middleware=[thunk];

const store=createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))

);//1st arg- reducer:is action items and 2nd-middleware

export default store;
