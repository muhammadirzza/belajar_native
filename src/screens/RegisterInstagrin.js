import React from 'react';
import {} from 'react-native';
import {} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {} from 'react-redux';
import {} from './../'
import { useReducer } from 'react';

const reducers = (state, action) => {
    switch(action.type) {
        case 'Change-data' :
            return {...state, [action.name]:action.payload};
        case 'Initial-State' :
            return {email:'', username:'', password:'', conpassword:''};
        default :
            return state
    }
}

const Register = () => {

    const [state, dispatch] = useReducer()
}