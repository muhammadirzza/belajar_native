import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function IconWithBadge ({ name, badgeCount, color, size }) {            //props ini diterima dari komponen HomeIconWithBadge
    return (
        <View style={{ width:24, height:24, margin:5 }} >
            <Ionicons name={name} size={size} color={color} />
            {
                badgeCount > 0 && (
                <View style={{ position:'absolute', right:-6, top:-3, backgroundColor:'red', borderRadius:6, width:12, height:12, justifyContent:'center', alignItems:'center' }} >
                    <Text style={{ color:'white', fontSize:10, fontWeight:'bold' }}>
                        {badgeCount}
                    </Text>
                </View> 
                )
            }
        </View>
    )
}

export default function HomeIconWithBadge(props) {                   //props ini didapat dari tab.navigator HomeIconWithBadge, kemudian di spread dan di passing bersama dengan props badgeCount ke function iconWithBadge
    return <IconWithBadge {...props} badgeCount={3} />
}
