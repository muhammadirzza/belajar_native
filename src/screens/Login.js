import React from 'react';
import { Text, Button } from 'react-native';
import Centers from '../components/Center';

//props navigation berasal dari komponen authsatck
const Login = ({navigation}) => {
    // const {signout} = useContext(Authcontext)
  
    return(
      <Centers>
        <Text>
          Login
        </Text>
        <Button 
          title='masuk'
          // onPress={()=>signout()}
        />
        <Button 
          title='register to'
          //()=>navigation.navigate adalah fungsi untuk berpindah antar screen, pada kasus ini berpindah ke sreen 'Register'
          //kemudian contoh passing parameter dari login ke register, dalam contoh ini adalah objek kelas
          onPress={()=>navigation.navigate('Register', {kelas:'jc12'})} 
        />
      </Centers>
    )
  }

  export default Login;