import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


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
        //2nd arg, any initial state we would want to populate
        //3rd arg is store enhancer
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
           <Provider store={store}>
                <Router />
           </Provider>
        );
    }
}

export default App;
