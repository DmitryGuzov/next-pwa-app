import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productsReducer from './product/reducer';

export const rootReducer = combineReducers({
  productsStore: productsReducer,
});

export const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
