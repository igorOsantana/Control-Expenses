import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';

const persistConfig = {
    key: 'user',
    storage
};

const persistedReducer = persistReducer( persistConfig, userReducer ); 

const store = createStore( persistedReducer );
const persistor = persistStore( store );

export { store, persistor };