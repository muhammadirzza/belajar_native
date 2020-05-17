import React, { useState } from 'react';
import {
  // SafeAreaView,
  // StyleSheet,
  ScrollView,
  View,
  // Text,
  // StatusBar,
} from 'react-native';

// import { Card, CardItem, Thumbnail, Content, Text } from 'native-base'
import Headers from './src/components/header';
import Story from './src/components/story';
import Feedcontent from './src/components/feed';
import Footers from './src/components/footer';

// import Carditem from './src/components/carditem'


const App = () => {
  
  const [isdarkmode, setisdarkmode] = useState(false)

  const theme={
    darkmode:{
      color : '#F5F5f5', 
      backgroundColor : '#212121'
    },
    defaultmode:{
      color : 'black', 
      backgroundColor : 'white'
    }
  }

  // const background = isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor
  // const text = isdarkmode?theme.darkmode.color:theme.defaultmode.color

  return (
    <View style={{flex:1}}>
      {/* kirim props isdarkmode dan theme ke komponen Headers */}
        <Headers isdarkmode={isdarkmode} theme={theme} setisdarkmode={setisdarkmode} />
        <ScrollView>
          <View>
            {/* kirim props isdarkmode dan theme ke komponen Story */}
            <Story isdarkmode={isdarkmode} theme={theme} /> 
          </View>
          <View>
            {/* kirim props isdarkmode dan theme ke komponen Feedcontent */}
            <Feedcontent isdarkmode={isdarkmode} theme={theme} />
          </View>
        </ScrollView>
        {/* kirim props isdarkmode dan theme ke komponen footer */}
        <Footers isdarkmode={isdarkmode} theme={theme} />
    </View>
    
  );
};

export default App;

