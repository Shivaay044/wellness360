import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { log } from 'console';
import { useSelector } from 'react-redux';

export default function Exercise() {


   const {exercise} = useSelector((store:any)=>store.exeReducer)
   console.log(exercise)

  return (
   <div>
     {
      exercise.map((el:any)=>(
        <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={'white'}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                el.gifUrl
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {el.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
             Equipment : {el.equipment}
            </Text>
            <Text
              textAlign={'center'}
              color={'gray.700'}
              px={3}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda eius modi, qui non magni a doloribus impedit quod consequatur, maxime molestiae veniam corrupti harum laboriosam nemo? Odit, esse minima?
               Nostrum debitis officiis facere, modi officia, repellat voluptate quo, quas esse suscipit dolor expedita velit temporibus sunt? Animi, iure? Iste, officia aliquid vitae sunt omnis laborum ipsam quod odit ad!
              <Link href={'#'} color={'blue.400'}>
                #tag
              </Link>
              me in your posts
            </Text>
            
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Text fontWeight={400} color={'gray.500'} size="sm" mb={4}>
            {el.bodyPart}
            </Text>
              <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
             Traget : {el.target}
            </Text>
            </Stack>
          </Stack>
        </Stack>
      </Center>
      ))
     }
   </div>
  );
}
