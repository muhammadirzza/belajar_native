import React from 'react';
import Center from '../components/Center';
import { Text } from 'react-native';

const Details = ({route}) => {        //props route ini didapat dari homestack.screen
    return (
      <Center>
        <Text>
          {route.params.name}
        </Text>
      </Center>
    )
}

export default Details