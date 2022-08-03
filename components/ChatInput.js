
import {Box,Text,Input,Badge} from "native-base"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const ChatInput = () => {
    return (
        <Box shadow={5} rounded={"lg"} zIndex={5} pt={3} pb={5}  bg={"white"} display={"flex"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <Box display={"flex"} p={3} flexDirection={"row"}rounded={"full"} justifyContent={"space-around"} alignItems={"center"} opacity={0.5} bg={"#abc4ea"}>
                <Input placeholder="Text Here..." w={"90%"} color={"black"} fontSize={"md"} variant={"unstyled"}  />
                <Box>
                    <MaterialIcons name={"keyboard-voice"} color={"#5283CE"} size={25} />
                </Box>
            </Box>
        </Box>
    )
    
}

export default ChatInput