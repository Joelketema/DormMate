
import { Box, Text, Image } from "native-base";

import logo from "../assets/chat.png"

const WelcomeScreen = () => {

    return (
        <Box bg={"#5283CE"} w={"100%"} h={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
           <Box display={"flex"}  justifyContent={"center"} alignItems={"center"}>
                <Image src={"https://iconarchive.com/download/i94293/bokehlicia/captiva/chat-bubble.ico"} boxSize={"150px"} objectFit='cover' borderRadius={10} alt="chat icon" srcset="" />   
                <Text fontFamily={"Roboto"} fontWeight={"medium"} color={"white"} fontSize={"lg"}>Dorm-Mate</Text>
          </Box>
        </Box>
    )
    
}

export default WelcomeScreen;