import { Box, Text, Image, Badge } from "native-base"
import { ScrollView } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

import SendBubble from "./SendBubble"

const ChatBody = () => {
    return (
        <Box h={"85%"} bg={"red"}>
        <ScrollView>
                <SendBubble stat={"send"}/>
                <SendBubble stat={"recieve"}/>
        </ScrollView>
        </Box>
    )

}

export default ChatBody

