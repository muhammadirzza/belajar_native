import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createStackNavigator()    //untuk membuat stack navigator, createStackNavigator merupakan function yang akan me return screen dan navigator

export default () => {
    return(
    //name pada AuthStack.Screen usahakan harus unik semuanya, tidak ada yang sama satu sama lain
    //defaultnya sudah ada header, secara default titlenya mengikuti namenya, kita bisa ubah dengan cara options={{title:'(nama yang dikehendaki)'}} pada AuthStack.Screen 
    //jika melihat urutan di bawah maka screen pertama yang akan di load adalah Login,
    //namun kita dapat mengatur siapa yang
        <AuthStack.Navigator 
            screenOptions={{                //screenOptions ditaro disini untuk mengatur semua screen menjadi seragam sesuai dengan yang ditulis
                headerStyle:{
                    backgroundColor:'blue'
                },               
                headerTintColor:'white'
            }}
        >
            <AuthStack.Screen name='Login' component={Login} />         
            <AuthStack.Screen 
                name='Register' 
                component={Register}
                initialParams={{kelas:'JC12'}} //apabila ingin menambah param tanpa harus passing parameter dari screen lain pakai initialparams
                options={(props)=>({title:'Register ' + props.route.params.kelas})}   //apabila ingin membuat params menjadi title di headernya
            />
      </AuthStack.Navigator>
    )
}