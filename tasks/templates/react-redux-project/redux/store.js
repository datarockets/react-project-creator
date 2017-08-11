import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import sagas from 'src/redux/sagas';
import reducer from 'src/redux/reducers';

const sagaMiddleware = createSagaMiddleware();

let middleware;

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(sagaMiddleware);
} else {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
}

const store = createStore(
  reducer,
  middleware,
);

sagaMiddleware.run(sagas);

store.close = () => store.dispatch(END);

export default store;
