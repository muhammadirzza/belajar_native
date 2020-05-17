import React, { Component } from "react";
import { View, Image } from 'react-native';
import { CardItem, Left, Thumbnail, Body, Right, Icon, Text } from 'native-base';

class Feedcontent extends Component {

    state={
        data:[
            {
                name : "Your Story",
                foto : "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                post : "https://cdn.kyou.id/items/51373-hguc-1144-rx-78-4-gundam-unit-4-g04.jpg"
            },
            {
                name : 'Dessy',
                foto : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                post : "https://cdn.kyou.id/items/51373-hguc-1144-rx-78-4-gundam-unit-4-g04.jpg"
            },
            {
                name : 'Bobi',
                foto : 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                post : "https://cdn.kyou.id/items/51373-hguc-1144-rx-78-4-gundam-unit-4-g04.jpg"
            }
        ]
    }

    renderData = () => {
        const {isdarkmode,theme}=this.props //nerima props dari komponen app.js 
        const text=isdarkmode?theme.darkmode.color:theme.defaultmode.color
        const backgroundColor=isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor
        return this.state.data.map((val,index)=>{
            return(
                <View key={index}>
                    <CardItem style={{backgroundColor:backgroundColor}} >
                        <Left>
                            <Thumbnail source={{uri: val.foto}} />
                            <Body>
                                <Text style={{color:text}}>{val.name}</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon name='more' style={{fontSize:30}} />
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: val.post}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem  style={{marginTop:-15,backgroundColor:backgroundColor}}>
                        <Left>
                            <Icon name='hearto' style={{color:text,fontSize:20,marginRight:10}}  type='AntDesign'/>
                            <Icon name='comment' style={{color:text}} type='EvilIcons'/>
                        </Left>
                    </CardItem>
                    <CardItem style={{marginTop:-10,backgroundColor:backgroundColor,padding:-10}}>
                        <Left>
                            <Text style={{fontSize:12,marginLeft:-4,color:text}}>5 likes</Text>
                        </Left>
                    </CardItem>
                    <CardItem style={{marginTop:-10,backgroundColor:backgroundColor}}>
                        <Text style={{fontWeight:'bold',marginRight:5,color:text}}>
                            name 
                        </Text>
                        <Text style={{color:text}}>
                            deskripsi
                        </Text>
                    </CardItem>
                </View>
            )
        })
    }

    render() {

        // const {isdarkmode,theme}=this.props //nerima props dari komponen app.js 
        // const text=isdarkmode?theme.darkmode.color:theme.defaultmode.color
        // const backgroundColor=isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor
        
        return(
            <View style={{paddingHorizontal:-1}} >
                {
                    this.renderData()
                }
                {/* <CardItem style={{backgroundColor:backgroundColor}} >
                    <Left>
                        <Thumbnail source={{uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                        <Body>
                            <Text style={{color:text}}>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Icon name='more' style={{fontSize:30}} />
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem  style={{marginTop:-15,backgroundColor:backgroundColor}}>
                    <Left>
                        <Icon name='hearto' style={{color:text,fontSize:20,marginRight:10}}  type='AntDesign'/>
                        <Icon name='comment' style={{color:text}} type='EvilIcons'/>
                    </Left>
                </CardItem>
                <CardItem style={{marginTop:-10,backgroundColor:backgroundColor,padding:-10}}>
                    <Left>
                        <Text style={{fontSize:12,marginLeft:-4,color:text}}>5 likes</Text>
                    </Left>
                </CardItem>
                <CardItem style={{marginTop:-10,backgroundColor:backgroundColor}}>
                    <Text style={{fontWeight:'bold',marginRight:5,color:text}}>
                        name 
                    </Text>
                    <Text style={{color:text}}>
                        deskripsi
                    </Text>
                </CardItem> */}
            </View>
        )
    }

}

export default Feedcontent