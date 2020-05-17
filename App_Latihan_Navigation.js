import 'react-native-gesture-handler';        //buat event2 seperti swipe screen dll, harus ditaro paling atas biar ga crash aplikasinya
import React, { useContext } from 'react';
import AuthStack from './src/navigations/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from 'react-native-reanimated';
import Center from './src/components/Center'

  // SafeAreaView,
  // StyleSheet,
  // ScrollView,
  // StatusBar,

// import { Card, CardItem, Thumbnail, Content, Text } from 'native-base'
// import Headers from './src/components/header';
// import Story from './src/components/story';
// import Feedcontent from './src/components/feed';
// import Footers from './src/components/footer';
// import { createStackNavigator } from '@react-navigation/stack';



// const Homestackroot = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name='Home' component={}/>
//       <HomeStack.Screen name='Detail' component={} initialParams={{name:'Detail User'}}/>
//     </HomeStack.Navigator>
//   )
// }

function IconWithBadge ({ name, badgeCount, color, size }) {
  return (
    <View style={{ width:24, height:24, margin:5 }} >
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={{ position:'absolute', right:-6, top:-3, backgroundColor:'red', borderRadius:6, width:12, height:12, justifyContent:'center', alignItems:'center' }} >
          <Text style={{ color:'white', fontSize:10, fontWeight:'bold' }}>
            {badgeCount}
          </Text>
        </View> 
      )}
    </View>
  )
}

function HomeIconWithBadge(props) {                   //props ini didapat dari tab.navigator HomeIconWithBadge, kemudian di spread dan di passing bersama dengan props badgeCount ke function iconWithBadge
  return <IconWithBadge {...props} badgeCount={3} />
}

const Details = ({route}) => {
  return (
    <Center>
      <Text>
        {route.params.name}
      </Text>
    </Center>
  )
}

const Tab = createBottomTabNavigator()    //untuk membuat tab navigator, createBottomTabNavigator merupakan function yang akan me return screen dan navigator 

function HomeScreen() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Home</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Setting!</Text>
    </View>
  )
}

// const SettingStackRoot = () => {
//   return(
//     <SettingStackRoot.Navigator>
//       <SettingStack.Screen name='Setting' component={} />
//     </SettingStackRoot.Navigator>
//   )
// }

const App = () => {

  return (
    //name pada AuthStack.Screen usahakan harus unik semuanya, tidak ada yang sama satu sama lain
    //defaultnya sudah ada header, secara default titlenya mengikuti namenya, kita bisa ubah dengan cara options={{title:'(nama yang dikehendaki)'}} pada AuthStack.Screen 
    //jika melihat urutan di bawah maka screen pertama yang akan di load adalah Login,
    //namun kita dapat mengatur siapa yang akan menjadi screen pertama dengan menambahkan initialRouteName='?' pada AuthStack.Navigator, lalu tentukan screen mana yang akan muncul pertama kali
    //navigator harus jadi satu tag gabisa buat dua tag navigator  
    <NavigationContainer>
      <Tab.Navigator                                    //untuk mengatur icon seluruh tab dapat dilakukan di navigator
        screenOptions={({route}) => ({                  //props route ini didapat dari komponen screen nya
          tabBarIcon: ({focused, color, size}) => {     //disini color dan size pakai default jadi tidak perlu di setting, defaultnya 24 untuk size dan rgb(0 122 255) untuk color
            let iconName;                               //tabBarIcon tidak ada header

            if(route.name === 'Home') {
              return (
                <HomeIconWithBadge                      //icon dengan badge 
                  name={                                //properti name, size, dan color itu kita buat sendiri, tapi isinya didapat dari tabBarIcon
                    focused                             //kemudian properti ini dipassing ke function HomeIconWithBadge 
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                  }
                  size={size}
                  color={color}
                />
              )
              // iconName = focused
              // ? 'ios-information-circle'
              // : 'ios-information-circle-outline'
            }else if(route.name === 'Setting') {
              iconName = focused ? 'ios-list-box' : 'ios-list'
            }

            return <Ionicons name={iconName} size={size} color={color} />   //untuk color / warna baiknya diatur dalam tabbaroption, bukan langsung tembak seperti ini
          },
        tabBarLabel:({color})=><Text style={{color:color}}>{route.name}</Text>    //tabBarLabel untuk mengatur labelnya, akan mereturn sebuah react komponen atau elemen sama seperti tabBarIcon
        })}
        tabBarOptions={{                  //tabBarOptions menerima objek
          activeTintColor:'tomato',
          inactiveTintColor:'gray',
          showLabel:false                 //atau bisa juga atur disini untuk menampilkan atau tidak labelnya, false tidak menampilkan dan true kebalikannya
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Setting' component={SettingsScreen}/>
      </Tab.Navigator>
      {/* <AuthStack /> */}
    </NavigationContainer>
      // <AuthStack.Navigator 
      //   screenOptions={{                //screenOptions ditaro disini untuk mengatur semua screen menjadi seragam sesuai dengan yang ditulis
      //     headerBackground:'blue',
      //     headerTintColor:'white'
      //   }}
      // >
      //   <AuthStack.Screen name='Login' component={Login} />         
      //   <AuthStack.Screen 
      //     name='Register' 
      //     component={Register}
      //     initialParams={{kelas:'JC12'}} //apabila ingin menambah param tanpa harus passing parameter dari screen lain pakai initialparams
      //     options={(props)=>({title:'Register ' + props.route.params.kelas})}   //apabila ingin membuat params menjadi title di headernya
      //   />
      // </AuthStack.Navigator>
    
  );
};

export default App;


// const Center = ({children}) => {
//   <View 
//     style={{
//       flex:1,
//       alignItems:'center',
//       justifyContent:'center'
//     }}
//   >
//     {children}
//   </View>
// }

// const Login = ({navigation}) => {
//   // const {signout} = useContext(Authcontext)

//   return(
//     <Center>
//       <Text>
//         Login
//       </Text>
//       <Button 
//         title='masuk'
//         // onPress={()=>signout()}
//       />
//       <Button 
//         title='register to'
//         //fungsi untuk berpindah antar screen, pada kasus ini berpindah ke sreen 'Register'
//         //kemudian contoh passing parameter dari login ke register, dalam contoh ini adalah objek kelas
//         onPress={()=>navigation.navigate('Register', {kelas:'jc12'})} 
//       />
//     </Center>
//   )
// }

// const Register = ({navigation, route}) => {
//   console.log(route.params.kelas)           //register menerima paramater lain dari login berupa kelas
//   return(
//     <Center>
//       <Text>
//         Register
//       </Text>
//       <Button 
//         title='login to' onPress={() => navigation.navigate('Login')} 
//         //fungsi untuk berpindah antar screen, pada kasus ini berpindah ke sreen 'Login', 
//         //navigation merupkan props yang didapat dari AuthStack, apabila tidak di destructuring maka penulisannya menjadi props.navigation.navigate, Register hanya menerima (props)
//         //string 'Login' di dalam function () => navigation.navigate('Login'), disamakan dengan name pada AuthStack.Screen
//       />
//     </Center>
//   )
// }

// const AuthStack = createStackNavigator()    //untuk membuat stack navigator, createStackNavigator merupakan function yang akan me return screen dan navigator

