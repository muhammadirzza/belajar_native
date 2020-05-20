import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homestackroot from '../navigations/HomeStack';
import SettingStackRoot from '../navigations/SettingStackRoot';
import HomeIconWithBadge from '../components/IconWithBadge';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator()    //untuk membuat tab navigator, createBottomTabNavigator merupakan function yang akan me return screen dan navigator 

export default () => {
    return(
        <Tab.Navigator                                    //untuk mengatur icon seluruh tab dapat dilakukan di navigator
            screenOptions={({route}) => ({                  //props route ini didapat dari komponen screen nya
            tabBarIcon: ({focused, color, size}) => {     //disini color dan size pakai default jadi tidak perlu di setting, defaultnya 24 untuk size dan rgb(0 122 255) untuk color
                let iconName;                               //tabBarIcon tidak ada header

                //  if(route.name === 'Home') {                 //sebelum nesting
                if(route.name === 'HomeStack') {              //setelah nesting navigation            
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
            initialRouteName='HomeStack'
            // tabBar={props => <MyTabBar {...props} />}       //passing props yang sudah di spread ke komponen tab bar yang kita buat 
        >
            {/* <Tab.Screen name='Home' component={HomeScreen}/>        //sebelum nesting */}
            {/* //setelah nesting navigation, jadi di dalam tab.screen ada homestacknavigator yang isinya stack.screen */}
            <Tab.Screen name='HomeStack' component={Homestackroot}/>

            {/* <Tab.Screen name='Setting' component={SettingsScreen}/> */}
            {/* //setelah nesting navigation, jadi di dalam tab.screen ada settingstacknavigator yang isinya stack.screen */}
            <Tab.Screen name='Setting' component={SettingStackRoot}/>
        </Tab.Navigator>
    )
}
