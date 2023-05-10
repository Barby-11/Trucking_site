import Link from 'next/link';
import React from 'react'

import styles from '../../styles/NewsArchive.module.css'
import { ArrowBackIcon, ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Input, Select, Text } from '@chakra-ui/react';
function NewsArchive() {
  return (
    <>
        <Box marginLeft={{base:"5%",md:"",xl:"5%"}} marginTop={5} marginBottom={1} marginRight={{base:"5%",md:"",xl:"5%"}}> 
            <Flex>
                <Link href={'/'}><ArrowBackIcon fontSize={25} marginRight={2} marginTop={2} color={'blue.500'} fontWeight={700}/></Link>
                <Text fontSize={25} fontWeight={700}>Archive</Text>
            </Flex>
            <hr />
            <Text backgroundColor={'blue'} color={'#fff'} fontWeight={''} width={'fit-content'} marginTop={1} padding={2} borderRadius={8}>
                Weather
            </Text>
            <Box className={styles.container2} gap={5}>
                <Box display={{base:"grid",md:"grid",xl:"flex"}}>
                    <Box className={styles.box1}>
                        <Image src='/images/img4.jpg'  className={styles.img2}/>
                        <Text className={styles.label2}>Black Ice in Montreal</Text>
                        <Text>Take caution on Montreal roads...</Text>
                        <Link href={''} className={styles.link1}><Text color={'blue'}>View <ArrowForwardIcon /></Text></Link>
                    </Box>
                    <Box className={styles.box1}>
                        <Image src='/images/img6.jpg'  className={styles.img2}/>
                        <Text className={styles.label2}>Black Ice in Montreal</Text>
                        <Text>Take caution on Montreal roads...</Text>
                        <Link href={''} className={styles.link1}><Text color={'blue'}>View <ArrowForwardIcon /></Text></Link>
                    </Box>
                </Box>
                <Box className={styles.box1}>
                    <Box display={'flex'} border={'0.5px solid rgba(165, 172, 186, 0.8)'} padding={1} borderRadius={8}>
                        <Input type='text' placeholder='Text here' height={'fit-content'} border={'none'}/>
                        <SearchIcon  marginTop={2} margin={1}/>
                    </Box>
                    <Text className={styles.label3}>Period</Text>
                    <Text>Filter By Year</Text>
                    <br />
                    <Select className={styles.select1}>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </Select>

                    <Text className={styles.label3}>Category</Text>
                    <Text>Select Category</Text>
                    <br />
                    <Select className={styles.select1}>
                        <option>Weather</option>
                        <option>Weather</option>
                        <option>Weather</option>
                        <option>Weather</option>
                    </Select>
                    <Text className={styles.heading}>Reads</Text>
                    <Select className={styles.select1}>
                        <option>0-400</option>
                        <option>0-500</option>
                        <option>0-600</option>
                        <option>0-800</option>
                    </Select>
                </Box>

            </Box>

            <Text backgroundColor={'blue'} color={'#fff'} fontWeight={''} width={'fit-content'} marginTop={1} padding={2} borderRadius={8}>
                Accidents
            </Text>
            <Box display={{base:"grid",md:"grid",xl:"flex"}} >
                <Box className={styles.box1}>
                    <Image src='/images/img5.jpg'  className={styles.img2}/>
                    <Text className={styles.label2}>Black Ice in Montreal</Text>
                    <Text>Take caution on Montreal roads...</Text>
                    <Link href={''} className={styles.link1}><Text color={'blue'}>View <ArrowForwardIcon /></Text></Link>
                </Box>
                <Box className={styles.box1}>
                    <Image src='/images/img3.jpg'  className={styles.img2}/>
                    <Text className={styles.label2}>Black Ice in Montreal</Text>
                    <Text>Take caution on Montreal roads...</Text>
                    <Link href={''} className={styles.link1}><Text color={'blue'}>View <ArrowForwardIcon /></Text></Link>
                </Box>
                <Box className={styles.box1}>
                    <Image src='/images/img4.jpg'  className={styles.img2}/>
                    <Text className={styles.label2}>Black Ice in Montreal</Text>
                    <Text>Take caution on Montreal roads...</Text>
                    <Link href={''} className={styles.link1}><Text color={'blue'}>View <ArrowForwardIcon /></Text></Link>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default NewsArchive;