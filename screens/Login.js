import { Box, Text, Image,Button,Input,InputGroup,InputLeftAddon } from "native-base";
import { useState, useEffect,useRef } from "react"
import axios from "axios";
const Login = ({setLoaded}) => {

    const key = "d4d1b9d010c8486c009233921ed92c1e3658d2d3"
    const [value,setValue] = useState("")

    const inputRef = useRef(null)

    const handleChange = (text) => {
        
        setValue(text)
    }
    const getValue = () => {
  
        setLoaded(false)
        
    }
    return (
    <Box  bg={"white"} w={"100%"} h={"100%"} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
        <Box  display={"flex"}  justifyContent={"center"} alignItems={"center"}>
            <Box mb={5}>
            <Image src={"https://iconarchive.com/download/i94293/bokehlicia/captiva/chat-bubble.ico"}  boxSize={"100px"} objectFit='cover' borderRadius={10} alt="chat icon" srcset="" />     
            </Box>
                
            <Box w={"90%"}  display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                 <Text color={"#5283CE"} fontSize={"lg"} mb={5} fontWeight={"bold"}>Enter Phone Number to Register!</Text>
                    <InputGroup
                     w={"100%"}
                        mb={15}
                        
                    >
                        <InputLeftAddon shadow={3} children={"+251"} />
                        <Input 
                            value={value}
                            ref={inputRef}
                            w={"90%"}
                            _focus={{
                               backgroundColor:"white"
                            }}
                            shadow={3}
                            fontSize={"md"}
                            color={"black"}
                            variant={"outline"}
                            bg={"white"}
                            onChangeText={handleChange}
                        keyboardType="number-pad"
                        />
                    </InputGroup>

                    <Button
                        mt={50}
                        _focus={{
                            backgroundColor:"#5283ce"
                        }}
                        w={"60%"}
                        textAlign={"left"}
                        bg={"#5283CE"}
                        p={2}
                        shadow={5}
                        rounded={"lg"}
                        onPress={getValue}
                    >
                    <Text color={"white"} fontSize={"md"}  textAlign={"center"} bg={"red"}>Sign Up</Text>    
                    </Button>
            </Box>
       </Box>
     </Box>
    )
}

export default Login