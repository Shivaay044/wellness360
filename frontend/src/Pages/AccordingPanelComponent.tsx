import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Stack,
    Button
  } from '@chakra-ui/react'

const AccordingPanelComponent = (props:{title:String, body:String}) => {
  return (
    <>
      <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         {props.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {props.body}
    <br/>
    <br/>
    <button style={{backgroundColor:"teal",padding:"5px",borderRadius:"5px"}}>Register Now</button>
    </AccordionPanel>
  </AccordionItem>


    
    <br/>
    <hr style={{color:"white"}} />
    </>
  )
}

export default AccordingPanelComponent
