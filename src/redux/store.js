import { applyMiddleware, createStore } from 'redux';

import logger from './middleware/logger';
import rootReducer from './root-reducer';

const middileWares = [logger];

const store = createStore(
    rootReducer,
    applyMiddleware(...middileWares)
);

export default store;