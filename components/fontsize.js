import React from 'react';
import {Text, ShadowPropTypesIOS} from 'react-native';

const Fontsize = (props) => {

    return(
        <Text
            style={{
                // fontSize:props.besarfont
                fontSize:20,
                fontWeight:'bold'
            }}
        >
            {props.children}
        </Text>
    )
}

export default Fontsize