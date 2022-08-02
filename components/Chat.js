
import { Box, Text, Image, Badge } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
const Chat = ({data}) => {

    return (
    <>
            {
                data.map((d) => {
                    return (
                        <Box p={3} mt={2} rounded={"lg"} shadow={5} bg={"white"} display={"flex"} flexDirection={"row"} w={{
                            base:"100%"}} justifyContent={"space-between"} alignItems={"center"}>
                            <Box>
                                <Image src={d.image}
                                boxSize={"80px"} rounded={"full"} 
                                />
                            </Box>
                
                            <Box display={"flex"} flexDirection={"row"} w={{
                                base: "70%",
                                md:"80%"
                            }} justifyContent={"space-between"} alignItems={"center"}>
                                
                                <Box display={"flex"} alignItems={"stretch"} minWidth={"70%"} maxWidth={"50%"} >
                                    <Text fontFamily={"Roboto"} fontSize={"lg"} mb={1} fontWeight={'medium'}>{d.name}</Text>
                                    <Text fontFamily={"Roboto"} fontSize={"md"} noOfLines={0} isTruncated>
                                        {d.status === "delivered" ? <Ionicons name={"ios-checkmark-outline"} size={20} /> :
                                       d.status === "seen" ? <Ionicons name={"ios-checkmark-done"} size={20} /> : null
                                       } 
                                        {d.message}</Text>
                                </Box>
                
                                <Box display={"flex"} textAlign={"center"} minWidth={"20%"} maxWidth={"50%"}>
                                    <Text fontFamily={"Roboto"} mb={3} textAlign={"center"}>{d.time}</Text>
                                    
                                    {d.status === "unopened" ?
                                        <Badge // bg="red.400"
                                        
                                        colorScheme={"danger"} rounded="full"  zIndex={1} variant="solid" alignSelf="center" _text={{
                                            fontSize: 12
                                            }}>
                                            {d.number}
                                    </Badge> : null
                    
                                    }
                                </Box>
                            </Box>
                
                        </Box >                   
                )
            })
        
            }
    </>
    )
    
}

export default Chat