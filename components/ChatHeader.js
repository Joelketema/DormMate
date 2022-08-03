import {Box,Text,Image,Badge} from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"

const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vR6NLy8N_aR8xlty51UyVTvXGL4NV84gPw&usqp=CAU"

const ChatHeader = () => {
        return (
        <Box display={"flex"} w={"95%"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
            <Box ml={-50} display={"flex"} w={"50%"} flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
                <Image src={image} boxSize={"50px"} rounded={"full"} alt="userprofile" />
                <Box>
                     <Text fontFamily={"Roboto"} fontWeight={"medium"}>Alemu Sisay</Text>
                     <Badge                             
                            colorScheme={"success"} rounded="full"  zIndex={1} variant="solid" alignSelf={"flex-start"} _text={{
                                fontSize: 10
                                }}>
                                online
                        </Badge> 
                </Box>
            </Box>

            <Box>

                <Box>
                    <Ionicons color={"#5283CE"} name={"call"} size={25} />
                </Box>
            </Box>
        </Box>
    )
    
}

export default ChatHeader