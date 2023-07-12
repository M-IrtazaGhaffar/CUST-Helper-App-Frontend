import {
    Box, Button,
    Stat,
    StatLabel,
    StatNumber,
    useToast,
    StatGroup,
    Spinner
} from '@chakra-ui/react'
import React, { useState } from 'react'

function Result(props) {
    const toast = useToast()
    const [SumCrHrs, setSumCrHrs] = useState(0)
    const [GPA, setGPA] = useState(0)
    const [ isLoaded, setLoaded] = useState(true)
    const [ Calculated, isCalculated ] = useState(false)

    const CalculatedGPA = () => {
        var scrhr = 0;
        var gpanum = 0;
        setLoaded(false)

        for (let i = 0; i < props.Data.length; ++i) {
            scrhr = scrhr + props.Data[i].cr_hr
            gpanum = gpanum + props.Data[i].grade * props.Data[i].cr_hr
        }

        setSumCrHrs(scrhr)
        setGPA(gpanum / scrhr)
        isCalculated(true)
        console.log(props.Data)

        toast({
            title: 'Thank You!',
            position: 'top',
            description: "We hope you enjoyed our service.",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })

        setTimeout(() => {
            setLoaded(true)
        }, [1000])
    }

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
        >
            <Button
                bgColor='blue.500'
                color='whitesmoke'
                onClick={CalculatedGPA}
                width='230px'
            >
                Calculate Result
            </Button>

            <StatGroup
                width='100%'
                bgColor='whitesmoke'
                my={7}
                p={5}
                borderRadius={3}
                boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
            >
                <Stat>
                    <StatLabel>GPA</StatLabel>
                    <StatNumber>{ Calculated ? isLoaded ? GPA.toFixed(5) : <Spinner /> : 0 }</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel textAlign='center'>Total Subjects</StatLabel>
                    <StatNumber textAlign='center'>{ Calculated ? props.Data.length : 0}</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel textAlign='right'>Credit Hours</StatLabel>
                    <StatNumber textAlign='right'>{ Calculated ? SumCrHrs : 0 }</StatNumber>
                </Stat>
            </StatGroup>
        </Box>
    )
}

export default React.memo( Result )