if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { Provider } from 'react-redux';

//import {  applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/store/reducers';
import Counter from './src/components/Counter';
import { SafeAreaView, StatusBar } from 'react-native';
import {theme} from './src/theme/theme';

import {SignUpScreen} from './src/screens/auth/SignUpScreen/SignUpScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen } from './src/screens/auth/LoginScreen/LoginScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>

        {/* <LoginScreen /> */}
        <LoginScreen />

      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// const App: React.FC = () => {

//   return (
//     <SafeAreaProvider>
//     <ThemeProvider theme={theme}>

//       <Provider store={store}>
//         {/* <SignUpScreen/> */}
//         <LoginScreen />
//         {/* <Counter/> */}
//       </Provider>

//         </ThemeProvider>
//         </SafeAreaProvider>

//   )
// }

export default App;

