
import { Box, Text, Image,Badge } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

const title = "Dorm-Mate"
const HomeHeader = () => {
    
    return(
    <Box display={"flex"} flexDirection={"row"} w={"95%"} justifyContent={"space-between"} alignItems={"center"}>
        <Box>
            <Text fontSize={"xl"} fontFamily={"Roboto"} color={"#5283CE"} fontWeight={"bold"}>{title}</Text>
        </Box>

        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
            <Ionicons size={25} color={"#5283CE"}  name={"notifications"}/>
            <Badge colorScheme="danger" rounded="full" mt={-3} ml={-3} zIndex={1} variant="solid" _text={{
        fontSize: 12
      }}>
              5+        
            </Badge>

        </Box>
        </Box>
    )
}

export default HomeHeader;