import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import Header from "../components/Header"

function Gemini() {
    const [key] = useState("AIzaSyDRRr9eVQYxt4BGVGTXf9EswJ9onfECWCQ")
    const [query, setQuery] = useState("")
    const [convo, setConvo] = useState([])
    const [disable, setDisable] = useState(false)

    const ai = async (e) => {
        e.preventDefault()

        setQuery('')
        setDisable(true)

        setConvo([...convo, {
            q: query,
            a: `Please Wait...`
        }])

        const genAI = new GoogleGenerativeAI(key);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const result = await model.generateContent([
            query
        ]);
        setQuery('')
        setConvo([...convo, {
            q: query,
            a: result.response.text()
        }])
        setDisable(false)
    }

    return (
        <Box
            className='home'
            bgColor='gray.300'
            w='100%'
            minHeight='100vh'
        >
            <Header />
            <Heading textAlign='center' paddingX='25px'>
                Chat with Gemini here!
            </Heading>
            {
                convo.map((i, ind) => {
                    return (
                            <Flex gap='5px' flexDirection='column' justifyContent='flex-start' padding='15px' >
                            <Box maxWidth='80%' position='relative' right='0' >
                                <Box fontSize='xs' >Query</Box>
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

            <Box padding='25px' ></Box>

            <form onSubmit={ai} style={{
                position: 'fixed',
                bottom: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: '10px',
                padding: '10px'
            }}>
                <Input bgColor='white' placeholder="Ask Something!" value={query} onChange={(e) => setQuery(e.target.value)}  />
                <Button isDisabled={disable} onClick={ai}>Ask</Button>
            </form>
        </Box>
    )
}

export default Gemini