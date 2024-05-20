import { Box, Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

function Gemini() {
    const [key, setKey] = useState("AIzaSyDRRr9eVQYxt4BGVGTXf9EswJ9onfECWCQ")
    const [query, setQuery] = useState("")

    const ai = async () => {
        const genAI = new GoogleGenerativeAI(key);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest"});

        const result = await model.generateContent([
          "What is Pakistan?"
        ]);
        console.log(result.response.text());
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
            <Input bgColor='white' placeholder="Ask Something!" onChange={(e) => setQuery(e.target.value)} />
            <Button onClick={ai}>Ask</Button>
        </Box>
    )
}

export default Gemini