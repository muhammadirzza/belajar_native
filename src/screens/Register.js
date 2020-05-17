import React from 'react';
import { Text, Button } from 'react-native';
import Centers from '../components/Center';


//props navigation berasal dari komponen authsatck, sedangkan route dari komponen login
const Register = ({navigation, route}) => {
    console.log(route.params.kelas)           //register menerima paramater lain dari login berupa kelas
    return(
        <Centers>
            <Text>
                Register
            </Text>
            <Button 
            title='login to' onPress={() => navigation.navigate('Login')} 
            //fungsi untuk berpindah antar screen, pada kasus ini berpindah ke sreen 'Login', 
            //navigation merupkan props yang didapat dari AuthStack, apabila tidak di destructuring maka penulisannya menjadi props.navigation.navigate, Register hanya menerima (props)
            //string 'Login' di dalam function () => navigation.navigate('Login'), disamakan dengan name pada AuthStack.Screen
            />
        </Centers>
    )
}

export default Register

  
