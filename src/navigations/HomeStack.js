import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Details from '../screens/Detail';


const HomeStack = createStackNavigator()

const HomeStackRoot = () => {
    return (
        <HomeStack.Navigator>
          <HomeStack.Screen name='Home' component={HomeScreen}/>
          <HomeStack.Screen name='Detail' component={Details} initialParams={{name:'Detail User'}}/>
        </HomeStack.Navigator>
    )
}

export default HomeStackRoot