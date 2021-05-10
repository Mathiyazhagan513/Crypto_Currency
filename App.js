import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux';
import  Header from './src/components/Header';
import store from './src/components/store';
import CryptoContainer from './src/components/CryptoContainer';
// import GlobalContainer from './src/components/GlobalContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <View>
          <Header />
          {/* <GlobalContainer/> */}
          <CryptoContainer />
        </View>
      </Provider>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
