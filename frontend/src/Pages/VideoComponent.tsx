import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Stack,
    Button,
    AspectRatio
  } from '@chakra-ui/react'

const VideoComponent = (props:{title:String, body:String}) => {
  return (
    <><AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
       Watch Video
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    <div  >
        <AspectRatio maxW='100%' maxH="300px" ratio={1}>
          <iframe
            title='naruto'
            src= "https://www.youtube.com/embed/GGPRFAoCRGQ"
            allowFullScreen
          />
        </AspectRatio>
    </div>
    </AccordionPanel>
</AccordionItem>  
  {/* <br/>
  <hr style={{color:"white"}} /> */}
    </>
  )
}

export default VideoComponent
