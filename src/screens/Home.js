import React from 'react';
// import Center from '../components/Center';
import { Text, Button, View } from 'react-native';

function HomeScreen({ route, navigation }) {            //props navigation didapat dari komponen screen pada homestackroot
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Home</Text>
        <Button 
          title='to Detail'
          onPress={()=>navigation.navigate('Detail')}      
        />
      </View>
    )
}



export default HomeScreen

