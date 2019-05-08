/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header } from './components/common';
import LoginForm from './components/LoginForm'; 


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC0rX-L256lWhM15n3N3Aw0DbV7CRwdTEI',
    authDomain: 'authtutorial-3bccc.firebaseapp.com',
    databaseURL: 'https://authtutorial-3bccc.firebaseio.com',
    projectId: 'authtutorial-3bccc',
    storageBucket: 'authtutorial-3bccc.appspot.com',
    messagingSenderId: '844040718344',
    appId: '1:844040718344:web:b12ebdeb912de0fc'
    });
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}  

export default App;
