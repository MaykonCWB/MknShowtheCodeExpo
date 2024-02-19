if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import React from 'react';
import { Provider } from 'react-redux';
import {  applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/store/reducers';
import rootSaga from './src/store/saga';
import Counter from './src/components/Counter';
import { StatusBar } from 'react-native';


const sagaMiddleware = createSagaMiddleware();

// configureStore({reducer: rootReducer, applyMiddleware(sagaMiddleware)});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true
})
sagaMiddleware.run(rootSaga);

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" translucent />
      <Counter />
    </Provider>
  )
}

export default App;

