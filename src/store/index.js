import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';
import productsReducer from '../reducers';

const rootReducer = combineReducers({ products: productsReducer });

const persistConfig = {
    key: 'root',
    storage,
}

const persisterdReducer = persistReducer(persistConfig, rootReducer);

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};


const store = createStore( 
                    persisterdReducer,
                    compose(applyMiddleware(ReduxThunk, stringMiddleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__
                            ? window.__REDUX_DEVTOOLS_EXTENSION__()
                            : f => f)
                    );

export const persistor = persistStore(store);
export default store;