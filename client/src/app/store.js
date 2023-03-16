import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import cartReducer from './cart/cartReducer';
import productReducer from './product/productReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});

const composeEnhancers = composeWithDevTools({ trace: true });

const middleware = [logger, thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
