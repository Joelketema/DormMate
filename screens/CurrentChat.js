
import { Box, Text } from "native-base"
import { useState, useEffect, useCallback } from "react"
import { Bubble,GiftedChat,Send } from 'react-native-gifted-chat'
import Ionicons from "react-native-vector-icons/Ionicons"
import Fontisto from "react-native-vector-icons/Fontisto"

import ChatBody from "../components/ChatBody"
import ChatInput from "../components/ChatInput"
const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vR6NLy8N_aR8xlty51UyVTvXGL4NV84gPw&usqp=CAU"

const CurrentChat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hey!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: image,
          },
          },
          {
            _id: 2,
            text: 'Hey!',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
  
    const renderBubble = (props) => {
        return(
        <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor:"#5283CE"
                }
            }}

            textStyle={{
                right: {
                    color:"white"
                }
            }}
        />)
    }

    const renderSend = (props) => {
        return (
            <Send
                {...props}
            >
              
                <Ionicons style={{
                    marginLeft: -40,
                    marginTop:-35
                    }}  name={"send"} size={25} color={"#5283CE"} />
                </Send>
        )
    }

    const renderTicks = (message) => {
        return (
            <Ionicons name={"ios-checkmark-done"} size={20} /> 
        )
    }

    const scrollToBottomComponent = (props) => {
        return (
            <Fontisto name={"angle-dobule-down"} size={20} color={"#5283CE"} />
        )
    }
    return (
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
            }}
            renderBubble={renderBubble}
            renderSend={renderSend}
            scrollToBottom
            alwaysShowSend
            scrollToBottomComponent={scrollToBottomComponent}
            isTyping={true}
            loadEarlier={true}
            renderTicks={renderTicks}
      />
    )
}

export default CurrentChat