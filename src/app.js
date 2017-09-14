import React, {Component} from 'react';
import {View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

class App extends Component{

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBWkskUVQeV-FhBQLshXpGmvRcXSt4i9Tw",
            authDomain: "manager-4a459.firebaseapp.com",
            databaseURL: "https://manager-4a459.firebaseio.com",
            projectId: "manager-4a459",
            storageBucket: "manager-4a459.appspot.com",
            messagingSenderId: "280601415972"
        };
        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}

export default App;