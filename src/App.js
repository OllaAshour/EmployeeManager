import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    
    componentWillMount() {
         const config = {
            apiKey: 'AIzaSyDWGnh-Vfu2HzWEFJdSD7kutN9Hdqj_G-I',
            authDomain: 'manager-db079.firebaseapp.com',
            databaseURL: 'https://manager-db079.firebaseio.com',
            projectId: 'manager-db079',
            storageBucket: 'manager-db079.appspot.com',
             messagingSenderId: '431723928877'
        };
        firebase.initializeApp(config);
    }
    
    render() {
        return (
           <Provider store={createStore(reducers)}>
               <View>
                   <LoginForm />
               </View>
           </Provider>
        );
    }
}

export default App;
