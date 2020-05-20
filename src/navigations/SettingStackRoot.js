import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/Setting'


const SettingStack = createStackNavigator()

const SettingStackRoot = () => {
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name='Setting' component={SettingsScreen} />
        </SettingStack.Navigator>
    )
}

export default SettingStackRoot