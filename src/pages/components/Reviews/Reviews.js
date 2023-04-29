import Link from 'next/link';
import React from 'react'
import { Button, Center, Container, Flex, Image, Select, Box, Text } from '@chakra-ui/react';

import styles from '../../../styles/Reviews.module.css'
import { Carousel, CarouselItem } from 'react-bootstrap';
import SlideData from './ReviwSlideData';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function Reviews() {
  return (
    <Container maxWidth={1000} className={styles.mainDivR}>
        <Text p={4} fontWeight={500}>Select Brand</Text>
         <Flex miniWidth={'max-content'} gap={2}>
            <Select  placeholder='-Select Brand-'>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
            </Select>
            <Button bg={'blue.600'} color={'#fff'} >Drivers</Button> 
         </Flex>
        <Center>
            <div className={styles.carousel}>

                    <ChevronLeftIcon marginTop={20}  width={8} height={8}/>
                    <Image
                        margin={1}
                        borderRadius={20} 
                        width={500} 
                        height={250} 
                        src={'/images/truck2.jpg'} />
                    <ChevronRightIcon  width={8} height={8} marginTop={20}/>
            </div>
        </Center>
        <Center marginTop={-20} marginBottom={20}>
            <Button bg={'blue.600'} color={'white'} width={100} >Rate</Button>
        </Center>
        <Text fontWeight={500}>Similar Trucks</Text>
        <Flex gap={20} paddingTop={4}>
            <Box>
                <Image borderRadius={9} width={270} height={200} src='/images/truck3.jpg' />
                <Center>    
                    <Button bg={'blue.600'} marginTop={-20} color={'white'}>Mercedes-Benz Aroes</Button>
                </Center>
            </Box>
            <Box>
                <Image borderRadius={9} width={270} height={200} src='/images/truck3.jpg' />
                <Center>    
                    <Button bg={'blue.600'} marginTop={-20} color={'white'}>Mercedes-Benz Aroes</Button>
                </Center>
            </Box>
            <Box>
                <Image borderRadius={9} width={270} height={200} src='/images/truck3.jpg' />
                <Center>    
                    <Button bg={'blue.600'} marginTop={-20} color={'white'}>Mercedes-Benz Aroes</Button>
                </Center>
            </Box>
        </Flex>

        {/*Pinned Reviews */}
        <Text paddingBottom={5}>Pinned Reviews</Text>
        <Flex gap={20}>
            <div>
                <Flex>
                    <Image width={100} height={20} borderRadius={50} src='/images/truck3.jpg' className={styles.img3} />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </Flex>
                <Text fontWeight={600}>Mrs. Hart</Text>
                <Text>My Husband loves this truck</Text>
                <label>On <Link href={''}>Mercedes-Benz Zetros</Link></label>
            </div>
            <div>
                <Image width={800}  height={200} borderRadius={8} src='/images/truck1.jpg' className={styles.img3} />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <Text fontWeight={600}>Mrs. Hart</Text>
                <Text>My Husband loves this truck</Text>
                <label>On <Link href={''}>Mercedes-Benz Zetros</Link></label>
            </div>
            <div>
                <Image width={800} height={200} borderRadius={8} src='/images/truck7.jpg' className={styles.img3} />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <Text fontWeight={600}>Mrs. Hart</Text>
                <Text>My Husband loves this truck</Text>
                <label>On <Link href={''}>Mercedes-Benz Zetros</Link></label>
            </div>
        </Flex>
    </Container>
  )
}

export default Reviews;