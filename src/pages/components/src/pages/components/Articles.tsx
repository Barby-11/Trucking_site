import React,{ReactElement} from 'react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Container,
    CardBody,
    CardFooter,
    Button,
    Flex,
    Card
  
  } from '@chakra-ui/react';
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image"
import Footer from "../Components/Footer"

interface CardProps {
  heading: string;
  description: string;
  image: ReactElement;
  href: string;
}

const Cards = ({heading, description, image,href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={300}
          h={250}
          align={'center'}
          justify={'center'}
          objectFit="contain"
          ml={-10}
          mt={-16}
          >
          {image}
        </Flex>
        <Box >
          <Heading size="md" style={{marginTop:"-35px"}}>{heading}</Heading>
          <Text  fontSize={'sm'}>
            {description}
          </Text>
          <br/>
          
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          View More<FaArrowCircleRight style={{marginLeft:"5px"}}/>
        </Button>
      </Stack>
    </Box>
  );
};



export default function Articles() {
  return (
    <>
      
     <Heading style={{marginLeft:"27.5rem"}}>Featured</Heading>
     

    <Center py={6}>
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
      objectFit='cover'
     height={170}
      width={320}
      
      src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      alt='Caffe Latte'
    />

    <Stack>
      <CardBody>
        <Heading size='md'>Black Ice In Montreal</Heading>
  
        <Text py='2'>
          Take caution on Montreal roads...
        </Text>
      </CardBody>
  
      <CardFooter>
        <Button variant='solid' colorScheme='blue' >
         View More<FaArrowCircleRight style={{marginLeft:"5px"}}/>
        </Button>
      </CardFooter>
    </Stack>
  </Card>
  </Center><br/>

  <Container maxW={'5xl'} mt={12}>
     
      <Heading ml={20} mb={5}>Latest Articles</Heading>
 
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Cards
           
            heading={'Sun Fransico Scorcing  Sun'}
            image={<Image src="https://th.bing.com/th/id/R.bbfd7a4454e000bfc9e814c907bcdf79?rik=XWlwHD%2bcnyU%2bJg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Scorcing  Sun in fransico'
            }
            href={'#'}
          />
          <Cards
            heading={'Home deco startup opens'}
            image={<Image src="https://th.bing.com/th/id/R.bb4e7704a2de9ecc7257894e9af0a05f?rik=pPZD7Blg5rQFSQ&riu=http%3a%2f%2fwww.frp-manufacturer.com%2fwp-content%2fuploads%2fneutral-home-decor.jpg&ehk=ZalknPlCEK6hlK92RlhhGof4uJ1Cl6cbi9kSF%2bWIrzQ%3d&risl=&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain" />}
            description={
              'Capi Deco Start up opens'
            }
            href={'#'}
          />
           <Cards
           
            heading={'Why is it colder on the North Pole'}
            image={<Image src="https://th.bing.com/th/id/R.b270779631af86f839fb23ae6c1beae7?rik=VrsuBI%2fvJi0ilg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
            description={
              'Why it gets colder on the north pole...'
            }
            href={'#'}
          />
   
    
        </Flex>
      </Container>

      <Container maxW={'5xl'} mt={12} mb={7}>
 
        <Flex flexWrap="wrap" gridGap={6} justify="center">
              
          <Cards
           
           heading={'Sun Fransico Scorcing  Sun'}
           image={<Image src="https://th.bing.com/th/id/R.bbfd7a4454e000bfc9e814c907bcdf79?rik=XWlwHD%2bcnyU%2bJg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
           description={
             'Scorcing  Sun in fransico'
           }
           href={'#'}
         />
         <Cards
           heading={'Home deco startup opens'}
           image={<Image src="https://th.bing.com/th/id/R.bb4e7704a2de9ecc7257894e9af0a05f?rik=pPZD7Blg5rQFSQ&riu=http%3a%2f%2fwww.frp-manufacturer.com%2fwp-content%2fuploads%2fneutral-home-decor.jpg&ehk=ZalknPlCEK6hlK92RlhhGof4uJ1Cl6cbi9kSF%2bWIrzQ%3d&risl=&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250} objectFit="contain" />}
           description={
             'Capi Deco Start up opens'
           }
           href={'#'}
         />
          <Cards
          
           heading={'Why is it colder on the North Pole'}
           image={<Image src="https://th.bing.com/th/id/R.b270779631af86f839fb23ae6c1beae7?rik=VrsuBI%2fvJi0ilg&pid=ImgRaw&r=0" alt={'Image description'} width={300} height={250}/>}
           description={
             'Why it gets colder on the north pole...'
           }
            href={'#'}
          />
    
        </Flex>
      </Container>

      <Footer />
    </>
  )
}
