import React, {Component} from 'react'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';

export default class CardItems extends Component {
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
        return this.state.data.map((val)=>{
            return (
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{uri:val.foto}} />
                                <Body>
                                    <Text>{val.name}</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri:val.post}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon active name="thumbs-up" />
                                <Text>12 Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            )
        })
    }
  render() {
    return (
        // <Container>
        //     {/* <Header /> */}
        // </Container>
        <>
            <Content>
                {this.renderData()}
            </Content>
        </>
    );
  }
}
        //   <Card>
        //     <CardItem>
        //       <Left>
        //         <Thumbnail source={{uri: 'Image URL'}} />
        //         <Body>
        //           <Text>NativeBase</Text>
        //           <Text note>GeekyAnts</Text>
        //         </Body>
        //       </Left>
        //     </CardItem>
        //     <CardItem cardBody>
        //       <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
        //     </CardItem>
        //     <CardItem>
        //       <Left>
        //         <Button transparent>
        //           <Icon active name="thumbs-up" />
        //           <Text>12 Likes</Text>
        //         </Button>
        //       </Left>
        //       <Body>
        //         <Button transparent>
        //           <Icon active name="chatbubbles" />
        //           <Text>4 Comments</Text>
        //         </Button>
        //       </Body>
        //       <Right>
        //         <Text>11h ago</Text>
        //       </Right>
        //     </CardItem>
        //   </Card>