import { Box, Text, Image, Badge } from "native-base"

const SendBubble = ({stat}) => {
    return (
        <Box p={3}>
        <Box p={3} maxWidth={"80%"} rounded={"lg"} mt={3} style={{
            position:"relative",
            backgroundColor: stat === "send" ? "#5283CE" : "#abc4ea",
            bottom : stat === "send" ? 0 : null
        
        }}>
            <Text style={{ color: stat === "send" ? "white" : "black"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, illo?
            </Text>

        </Box>
            <Text>2:30AM</Text>
            </Box>
    )
    
}

export default SendBubble

