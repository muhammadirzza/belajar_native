import React from 'react'
import { View, Content } from 'native-base'
import Storycontent from './storycontent'

const data = [
    {
      name : "Your Story",
      foto : "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name : 'Dessy',
      foto : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name : 'Bobi',
      foto : 'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'       
    },
    {
      name : 'Nata',
      foto : 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name : 'Dzaky',
      foto : 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name : 'Aya hacker',
      foto : 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      name : 'hafiz css',
      foto : 'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
]

//nerima props berupa isdarkmode dan theme dari komponen app.js kemudian di destructuring
const Story = ({ isdarkmode, theme }) => {

    const renderStory = () => {
        return data.map((val, index)=>{
            return(
                //kirim prop berupa index, val, isdarkmode, dan theme ke komponen storycontent
                <Storycontent key={index} isdarkmode={isdarkmode} theme={theme} data={val} index={index}/>
            )
        })
    }

    return (
        <Content style={{backgroundColor:isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor,paddingRight:-10,paddingLeft:-10}} horizontal alwaysBounceHorizontal>
            {renderStory()}
        </Content>
    )
}

export default Story