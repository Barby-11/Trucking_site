import Link from 'next/link';
import React from 'react'
import { Button, Center, Container, Flex, Image, Select, Box, Text } from '@chakra-ui/react';

import styles from '../../../styles/Reviews.module.css'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import ResponsiveCarousel from '../../api/Carousel/Responsive';
import { Carousel } from 'react-responsive-carousel';
import {items} from '../../../../public/Items.json'

function Reviews() {
const { responsive } = items;
  return (
    <Container maxWidth={1000} className={styles.mainDivR}>
       
       {/*Brand Box */}
        <Text marginBottom={2} fontSize={20} fontWeight={700}>Select Brand</Text>
         <Flex miniWidth={'max-content'} gap={2}>
            <Select  placeholder='-Select Brand-'>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
            </Select>
            <Button bg={'blue.600'} color={'#fff'} >Drivers</Button> 
         </Flex>
            <Box 
                height={{
                    
                  }}
                  width={{
                   
                  }}
                bg={'linear-gradient(180deg, #6385FF -3.21%, #F2A8A8 71.13%)'}
                marginLeft={5}
                marginRight={5}
                marginTop={5}
                >
                <ResponsiveCarousel />
            </Box>
    
            <Button
            marginTop={-45}
            marginLeft={20} 
            marginRight={20} 
                bg={'blue.600'} 
                color={'white'} 
                width={100} 
                fontFamily={'Playfair Display'}
                fontSize={20}>Rate</Button>

        {/* Simila Trucks */}

        <Text fontWeight={700} fontSize={20}>Similar Trucks</Text>
            <Box>
                <Carousel 
                    slidesToShow={2}
                    margin={0}>
                    {responsive.map((item) => (
                        <>
                            <Box
                                margin={0}
                                height={{
                                    base: '100%', // 0-48em
                                    md: '50%', // 48em-80em,
                                    xl: '25%', // 80em+
                                    }}
                                    width={{ 
                                        base: '100%',
                                        md: '50%', 
                                        sm: '25%' }}
                                    key={item.id} className={styles.swipItem}>
                                <Image  
                                    margin={0}
                                    src={item.imageUrl} 
                                    alt="slides" />
                                <Box 
                                    
                                    width={{base:"",md:"",xl:""}} 
                                    height={{base:"",md:"",xl:""}} 
                                    className={styles.detail}>
                                <Text 
                                    bg={'blue.600'}
                                    color={'white'}
                                    borderRadius={5} 
                                    p={2} 
                                    fontFamily={'Playfair Display'}
                                    >{item.title}</Text>
                                </Box>
                            </Box>
                        </>
                        ))}
                </Carousel>
            </Box>

        {/*Pinned Reviews */}
  
        <Text 
            marginTop={10}
            marginBottom={10}
            fontSize={20} 
            fontWeight={700}
            >Pinned Reviews</Text>
            <Box 
                className={styles.pinnedReviwes}
                display={{base:"grid",md:"grid",xl:"flex"}}
                gap={10}>

                <Box 
                    width={250}
                    bg={'#E6F3FF'} 
                    padding={5} borderRadius={8}  
                    marginTop={10}
                    marginBottom={10}
                    border={ '1px solid #EFEFF0'}
                    boxShadow={" 0px 2px 4px rgba(0, 0, 0, 0.15)"}>
                    <Flex>
                        <Image width={110} height={110} borderRadius={55} marginTop={-20} src='/images/john Doe.jpg' className={styles.img3} />
                        <StarIcon  color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'} />
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                    </Flex>
                    <Center>
                        <Text fontWeight={700}  fontFamily={'Playfair Display'} marginTop={2}>Mrs. Hart</Text>
                    </Center>
                    <Center padding={3}>
                        <Text textAlign={'center'} fontWeight={500}>My Husband loves this truck</Text>
                    </Center>
                    <Center marginTop={20}>
                        <Text fontWeight={600}>On <Link  href={''}>Mercedes-Benz Zetros</Link></Text>
                    </Center>
                </Box>
                <Box 
                    width={250}
                    bg={'#E6F3FF'} 
                    padding={5} borderRadius={8}
                    marginTop={10}
                    marginBottom={10}  
                    border={ '1px solid #EFEFF0'}
                    boxShadow={" 0px 2px 4px rgba(0, 0, 0, 0.15)"}>
                    <Flex>
                        <Image width={110} height={110} borderRadius={55} marginTop={-20} src='/images/john Doe.jpg' className={styles.img3} />
                        <StarIcon  color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'} />
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                    </Flex>
                    <Center>
                        <Text fontWeight={700}  fontFamily={'Playfair Display'} marginTop={2}>Mrs. Hart</Text>
                    </Center>
                    <Center padding={3}>
                        <Text textAlign={'center'} fontWeight={500}>My Husband loves this truck</Text>
                    </Center>
                    <Center marginTop={20}>
                        <Text fontWeight={600}>On <Link color={''}  href={''}>Mercedes-Benz Zetros</Link></Text>
                    </Center>
                </Box>
                <Box 
                    width={250}
                    bg={'#E6F3FF'} 
                    padding={5} borderRadius={8} 
                    marginTop={10}
                    marginBottom={10} 
                    border={ '1px solid #EFEFF0'}
                    boxShadow={" 0px 2px 4px rgba(0, 0, 0, 0.15)"}>
                    <Flex>
                        <Image width={110} height={110} borderRadius={55} marginTop={-20} src='/images/john Doe.jpg' className={styles.img3} />
                        <StarIcon  color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'} />
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                        <StarIcon color={'yellow.400'}/>
                    </Flex>
                    <Center>
                        <Text fontWeight={700}  fontFamily={'Playfair Display'} marginTop={2}>Mrs. Hart</Text>
                    </Center>
                    <Center padding={3}>
                        <Text textAlign={'center'} fontWeight={500}>My Husband loves this truck</Text>
                    </Center>
                    <Center marginTop={20}>
                        <Text fontWeight={600}>On <Link color={''}  href={''}>Mercedes-Benz Zetros</Link></Text>
                    </Center>
                </Box>
            </Box>
    </Container>
  )
}

export default Reviews;