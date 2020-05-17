/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Fontsize from './components/fontsize' 

const App = () => {
  return (
    <View style={styles.toCenter}>
      <StatusBar backgroundColor={"#0093bb"}></StatusBar>
      <View style={styles.topBox}>
        <View style={{position:"relative", top:20}}>
          <Text style={{color:"white"}}>
            Dunder Mifflin, Inc.
          </Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{position:"relative", top:40}}>
            <Text style={{color:"white",fontSize:20}}>Michael Scott</Text>
            <Text style={{color:"white"}}>General Manager</Text>
          </View>
          <View style={{position:"relative", top:40}}>
            <View style={{borderColor:"black", borderWidth:1, height:50, width:50, borderRadius:50}}></View>
          </View>
        </View>
        <View style={styles.insideBox}>
          <View style={styles.insideBox1}>
            <Fontsize>
              Hi, User
            </Fontsize>
            <Fontsize>
              Rp 100.000,00
            </Fontsize>
            {/* <Text>
              Hi, User
            </Text>
            <Text>
              Rp 100.000,00
            </Text> */}
          </View>
          <View style={{flexDirection:"row", marginTop:10, justifyContent:"space-between", flexWrap:"wrap"}}>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
            <View style={{borderColor:"black", borderWidth:1, height:70, width:70, margin:2}}></View>
          </View>
        </View>
        <View style={{position:"relative", top:85}}>
          <ScrollView horizontal={true}>
            <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
              <View style={{flex:1}}>
                <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
              </View>
              <View style={{flex:2}}>
                <Text>tes</Text>
                <Text>tes 2</Text>
              </View>
            </View>
            <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
              <View style={{flex:1}}>
                <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
              </View>
              <View style={{flex:2}}>
                <Text>tes</Text>
                <Text>tes 2</Text>
              </View>
            </View>
            <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
              <View style={{flex:1}}>
                <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
              </View>
              <View style={{flex:2}}>
                <Text>tes</Text>
                <Text>tes 2</Text>
              </View>
            </View>
            <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
              <View style={{flex:1}}>
                <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
              </View>
              <View style={{flex:2}}>
                <Text>tes</Text>
                <Text>tes 2</Text>
              </View>
            </View>
            <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
              <View style={{flex:1}}>
                <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
              </View>
              <View style={{flex:2}}>
                <Text>tes</Text>
                <Text>tes 2</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.btmBox}>
        <ScrollView style={{marginHorizontal:50}}>
          <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
            <View style={{flex:1}}>
              <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
            </View>
            <View style={{flex:2}}>
              <Text>tes</Text>
              <Text>tes 2</Text>
            </View>
          </View>
          <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
            <View style={{flex:1}}>
              <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
            </View>
            <View style={{flex:2}}>
              <Text>tes</Text>
              <Text>tes 2</Text>
            </View>
          </View>
          <View style={{borderColor:"", backgroundColor:"white", height:50, width:120, marginRight:8, padding:3, borderRadius:10, alignItems:"center", flexDirection:"row"}}>
            <View style={{flex:1}}>
              <View style={{borderColor:"black", borderWidth:1, height:30, width:30, borderRadius:50}}></View>
            </View>
            <View style={{flex:2}}>
              <Text>tes</Text>
              <Text>tes 2</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({    //styling seperti css pada react-native berisi object
  toCenter:{
    flex:1,
    // alignItems:"center",
    // justifyContent:"center",
    backgroundColor:"#0093bb",
    color:"white"
  },
  topBox:{
    flex:2,
    paddingHorizontal:25,
    // backgroundColor:"#0093bb"
  },
  btmBox:{
    flex:1,
    backgroundColor:"white"
  },
  insideBox:{
    height:200,
    backgroundColor:"white",
    position:"relative",
    top:70,
    elevation:15,
    shadowColor:"black",
    // shadowOpacity:1,
    // shadowOffset:{height:10, width:5},
    // shadowRadius:2,
    borderColor:"white",
    borderRadius:20,
    // borderWidth:1,
    zIndex:1,
    paddingHorizontal:10,
    paddingVertical:5
  },
  insideBox1:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth:1,
    borderBottomColor:"black",
    paddingHorizontal:5
  }
});

export default App;

//styling di react-native pakai inline
//untuk masukin tes harus pakai tag <Text />


// <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <Header />
    //       {global.HermesInternal == null ? null : (
    //         <View style={styles.engine}>
    //           <Text style={styles.footer}>Engine: Hermes</Text>
    //         </View>
    //       )}
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Step Tes One</Text>
    //           <Text style={styles.sectionDescription}>
    //             Edit <Text style={styles.highlight}>App.js</Text> to change this
    //             screen and then come back to see your edits.
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>See Your Changes</Text>
    //           <Text style={styles.sectionDescription}>
    //             <ReloadInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Debug</Text>
    //           <Text style={styles.sectionDescription}>
    //             <DebugInstructions />
    //           </Text>
    //         </View>
    //         <View style={styles.sectionContainer}>
    //           <Text style={styles.sectionTitle}>Learn More</Text>
    //           <Text style={styles.sectionDescription}>
    //             Read the docs to discover what to do next:
    //           </Text>
    //         </View>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>

    // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },

