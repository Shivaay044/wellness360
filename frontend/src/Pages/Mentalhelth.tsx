import React from 'react'
import styles from "./mentalhealth.module.css";
import { Text,Box } from '@chakra-ui/react'
import AccordingPanelComponent from './AccordingPanelComponent';
import { AspectRatio } from '@chakra-ui/react';
import VideoComponent from './VideoComponent';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const mentalhelth = () => {
  return (
    <div>
      <div className={styles.container} >

      <div className={styles.childOne} >
        <h1>Wellness-360 Services</h1>
          <Accordion>
                <AccordingPanelComponent title='Yoga' body='yoga practice creates mental clarity and calmness, increases body awareness, 
                                                            relieves chronic stress patterns, relaxes the mind, centers 
                                                            attention; and sharpens concentration' />
                
                
                
                <AccordingPanelComponent title='Reiki' body='Reiki is linked to a range of physical and emotional health benefits, 
                                                            including 
                                                            better sleep, improved mood, and pain relief in published studies. Research 
                                                            suggests Reiki helps the body return to a state of relaxation, which allows 
                                                            it to potentially better heal from damage brought on by stress, injury, or 
                                                            disease.' />

                <AccordingPanelComponent title='Meditation' body='Meditation can give you a sense of calm, peace and balance that can benefit 
                                                                  both your emotional well-being and your overall health. You can also 
                                                                  use it to relax and cope with stress by refocusing your attention on 
                                                                  something calming. Meditation can help you learn to stay centered and 
                                                                  keep inner peace.' />

                <AccordingPanelComponent title='Psychotherapy' body='Psychotherapy is often used in combination with medication to treat
                                                                     mental health conditions. In some circumstances medication may be 
                                                                     clearly indicated and in others psychotherapy may be the best option.
                                                                    For many people combined medication and psychotherapy treatment can be
                                                                     more beneficial than either alone. Healthy lifestyle improvements, 
                                                                     such as healthy nutrition, regular exercise and adequate sleep, 
                                                                     can also be valuable in supporting recovery and overall wellness.' />

                {/* <AccordingPanelComponent title='Relaxing Music' body='A slower tempo can quiet your mind and relax your muscles, making you 
                                                                    feel soothed while releasing the stress of the day. Music is effective for
                                                                     relaxation and stress management. Research confirms these personal experiences 
                                                                     with music.' /> */}
                <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                        Relaxing Music
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      
                    <div  >
                        <AspectRatio maxW='100%' maxH="300px" ratio={1}>
                          <iframe
                            title='naruto'
                            src= "https://www.youtube.com/embed/Od9M_8QChjg"
                            allowFullScreen
                          />
                        </AspectRatio>
                    </div>
                    </AccordionPanel>
                </AccordionItem>  
                  {/* <br/>
                  <hr style={{color:"white"}} /> */}
                                                                     
                <AccordingPanelComponent title='Videos' body='Engaging in activities you enjoy, such as watching movies, can be beneficial. 
                                                              It could boost your mental health, relieve stress, and foster relationships.
                                                               Still, movies arent a treatment or cure for your mental health symptoms. 
                                                               If your symptoms interfere with your daily life, a mental health 
                                                               professional could help' />

                <AccordingPanelComponent title='Exercise' body='Exercise improves mental health by reducing anxiety, depression, 
                                                                and negative mood and by improving self-esteem and cognitive function. 
                                                                Exercise has also been found to alleviate symptoms such as low 
                                                                self-esteem and social withdrawal.' />

                
                      

                <VideoComponent title="Watch Video" body="https://www.youtube.com/embed/GGPRFAoCRGQ"/>
                
                
                <AccordingPanelComponent title='Alternative Therapy' body='Complementary and alternative therapies for mental health problems 
                                                                          include yoga, electrical stimulation, and dietary supplements, 
                                                                          such as omega-3s and kava. These approaches may increase 
                                                                          feelings of well-being, reduce anxiety, ease symptoms of 
                                                                          depression, and aid relaxation.' />


                                                  
          </Accordion>      

          
          
      </div>
     


      <div className={styles.childTwo} >
        <div  style={{marginTop:"30%"}} > 
            <p style={{fontSize:"30px",fontWeight:"bold",color:"#e6e4e0"}} >Why Mental Health</p>
                <br/>

                <p style={{fontSize:"20px",color:"white"}} >

                Being mentally ill is not a joke. It is a most painful thing. If you have physical ailments, 
                you will get everyone’s compassion, but when you have a mental ailment, you will get laughter, 
                unfortunately. This is because it is very difficult to make out when someone is sick and when someone 
                is being stupid. This is the biggest problem for those who have someone in the family who is mentally 
                disturbed. You do not know when they are making it up and when they are really suffering. You do not know 
                when to be compassionate, when to be hard on them.
                Human sanity is a very fragile thing. The line between sanity and insanity is so thin. If you push it every day, 
                some day you will cross it. When you get angry, what is the expression that is used? “I am mad with you,” or, 
                “I am mad right now.” You may enjoy that little bit of madness – you crossed the line, and it felt like some 
                kind of freedom and power. But one day when you cannot cross back, that is when suffering begins. It is not 
                like physical pain – it is immense suffering. I have been around people who have been mentally ill, 
                trying to help them. No one should have it. But unfortunately it is becoming an epidemic in the world.
              </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default mentalhelth
