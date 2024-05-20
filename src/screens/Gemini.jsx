import { Box, Button, Flex, Input } from "@chakra-ui/react"
import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

function Gemini() {
    const [key, setKey] = useState("AIzaSyDRRr9eVQYxt4BGVGTXf9EswJ9onfECWCQ")
    const [query, setQuery] = useState("")
    const [convo, setConvo] = useState([])

    const ai = async (e) => {
        e.preventDefault()
        const genAI = new GoogleGenerativeAI(key);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const result = await model.generateContent([
            query
        ]);
        setConvo([...convo, {
            q: query,
            a: result.response.text()
        }])
    }

    return (
        <Box
            className='home'
            bgColor='gray.300'
            w='100%'
            minHeight='100vh'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
        >
            {
                convo.map((i, ind) => {
                    return (
                        <Flex gap='5px' flexDirection='column' padding='10px' >
                            <Box maxWidth='80%' position='relative' right='0' >
                                <Box fontSize='xs' maxWidth='96' >Query</Box>
                                <Box width='fit-content' bgColor='white' borderTopRadius='lg' borderLeftRadius='lg' padding='10px' >{i.q}</Box>
                            </Box>
                            <Box maxWidth='80%'>
                                <Box fontSize='xs' >Result</Box>
                                <Box width='fit-content' bgColor='white' borderTopRadius='lg' borderRightRadius='lg' padding='10px'>{i.a}</Box>
                            </Box>
                        </Flex>
                    )
                })
            }

            <form onSubmit={ai} style={{
                position: 'absolute',
                top: '89%',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '10px',
                padding: '10px'
            }}>
                <Input bgColor='white' placeholder="Ask Something!" onChange={(e) => setQuery(e.target.value)}  />
                <Button onClick={ai}>Ask</Button>
            </form>
        </Box>
    )
}

export default Gemini