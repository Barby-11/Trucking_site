import React from 'react'
import styles from '../../styles/Drivers.module.css'
import Link from 'next/link'
import { Box, Center, Checkbox, Flex, Image, Input, Select, Text } from '@chakra-ui/react'
import { ArrowBackIcon, StarIcon } from '@chakra-ui/icons'
import {BsCheckLg} from 'react-icons/bs'

function Drivers() {
  return (
    <Box marginLeft={{base:"5%",md:"",xl:"5%"}} marginTop={5} marginBottom={1} marginRight={{base:"5%",md:"",xl:"5%"}}>
        <Flex  marginBottom={2}>
            <Link href={'/'} >
                <ArrowBackIcon color={'blue.500'} fontWeight={500} marginRight={1}/>
            </Link>
            <Text fontWeight={500} fontSize={20}>Drivers</Text>
        </Flex>
        <hr className={styles.hori}/>   
        {/* search container */}
        <Box>
            <Center>
                <Flex width={{base:"90%",md:"90%",xl:"80%"}} className={styles.searchBar} gap={5}>
                    <Box width={350}>
                        <Select backgroundColor={'#fff'} width={'100%'}>
                            <option>Location</option>
                            <option>Location</option>
                            <option>Location</option>
                            <option>Location</option>
                        </Select>
                    </Box>
                    <Box  width={400}>
                        <Input  backgroundColor={'#fff'} type='text' placeholder='Keyword' />
                    </Box>
                    <Box width={350}>
                        <Checkbox backgroundColor={'#fff'} padding={2} borderRadius={4} width={'100%'} defaultChecked>Verified</Checkbox>
                    </Box>
                </Flex>
            </Center>
            {/* <Center> */}
                <Box  display={{base:"grid",md:"grid",xl:"flex"}} gap={{base:'',md:'',xl:'5%'}} marginLeft={'5%'}
                      marginBottom={10} className={styles.driverBox}>
                    <Image width={{base:"18%",md:"18%",xl:"12%"}} marginLeft={{base:"15%",md:"",xl:""}} height={{base:"12vh",md:"13vh",xl:"18vh"}} borderRadius={'50%'} src={'/images/john doe.jpg'} />
                    <Box 
                        >
                        <Text marginTop={5} marginBottom={5} fontWeight={'bold'}fontSize={'20px'}>Mark Cuban</Text>
                        <Box display={'flex'} width={200} borderRadius={'50'}  border={'0.5px solid rgba(165, 172, 186, 0.8)'}  padding={'2%'}>
                            <BsCheckLg className={styles.check} ></BsCheckLg>
                            <Text>Verified</Text>
                        </Box>
                    </Box>
                    <Box display={{base:"",md:"",xl:"flex"}} gap={{base:'',md:'',xl:'10%'}} className={styles.ratingBo}>
                        <Image src='/images/truck.png' alt='Truck' marginTop={{base:"",md:"",xl:"-5"}} />
                        <Box  marginTop={5}>
                            <Text>Montreal,Canada</Text>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                        </Box>
                    </Box>
            </Box>
                <Box  display={{base:"grid",md:"grid",xl:"flex"}} gap={{base:'',md:'',xl:'5%'}} marginLeft={'5%'}
                      marginBottom={10} className={styles.driverBox}>
                    <Image width={{base:"18%",md:"18%",xl:"12%"}} marginLeft={{base:"15%",md:"",xl:""}} height={{base:"12vh",md:"13vh",xl:"18vh"}} borderRadius={'50%'} src={'/images/john doe.jpg'} />
                    <Box 
                        >
                        <Text marginTop={5} marginBottom={5} fontWeight={'bold'}fontSize={'20px'}>Webster Barbados</Text>
                        <Box display={'flex'} width={200} borderRadius={'50'}  border={'0.5px solid rgba(165, 172, 186, 0.8)'}  padding={'2%'}>
                            <BsCheckLg className={styles.check} ></BsCheckLg>
                            <Text>Verified</Text>
                        </Box>
                    </Box>
                    <Box display={{base:"",md:"",xl:"flex"}} gap={{base:'',md:'',xl:'10%'}} className={styles.ratingBo}>
                        <Image src='/images/truck.png' alt='Truck' marginTop={{base:"",md:"",xl:"-5"}} />
                        <Box  marginTop={5}>
                            <Text>Montreal,Canada</Text>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                        </Box>
                    </Box>
            </Box>
                <Box  display={{base:"grid",md:"grid",xl:"flex"}} gap={{base:'',md:'',xl:'5%'}} marginLeft={'5%'}
                      marginBottom={10} className={styles.driverBox}>
                    <Image width={{base:"18%",md:"18%",xl:"12%"}} marginLeft={{base:"15%",md:"",xl:""}} height={{base:"12vh",md:"13vh",xl:"18vh"}} borderRadius={'50%'} src={'/images/john doe.jpg'} />
                    <Box 
                        >
                        <Text marginTop={5} marginBottom={5} fontWeight={'bold'}fontSize={'20px'}>Mark Cuban</Text>
                        <Box display={'flex'} width={200} borderRadius={'50'}  border={'0.5px solid rgba(165, 172, 186, 0.8)'}  padding={'2%'}>
                            <BsCheckLg className={styles.check} ></BsCheckLg>
                            <Text>Verified</Text>
                        </Box>
                    </Box>
                    <Box display={{base:"",md:"",xl:"flex"}} gap={{base:'',md:'',xl:'10%'}} className={styles.ratingBo}>
                        <Image src='/images/truck.png' alt='Truck' marginTop={{base:"",md:"",xl:"-5"}} />
                        <Box  marginTop={5}>
                            <Text>Montreal,Canada</Text>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                        </Box>
                    </Box>
            </Box>
                <Box  display={{base:"grid",md:"grid",xl:"flex"}} gap={{base:'',md:'',xl:'5%'}} marginLeft={'5%'}
                      marginBottom={10} className={styles.driverBox}>
                    <Image width={{base:"18%",md:"18%",xl:"12%"}} marginLeft={{base:"15%",md:"",xl:""}} height={{base:"12vh",md:"13vh",xl:"18vh"}} borderRadius={'50%'} src={'/images/john doe.jpg'} />
                    <Box 
                        >
                        <Text marginTop={5} marginBottom={5} fontWeight={'bold'}fontSize={'20px'}>Webster Barbados</Text>
                        <Box display={'flex'} width={200} borderRadius={'50'}  border={'0.5px solid rgba(165, 172, 186, 0.8)'}  padding={'2%'}>
                            <BsCheckLg className={styles.check} ></BsCheckLg>
                            <Text>Verified</Text>
                        </Box>
                    </Box>
                    <Box display={{base:"",md:"",xl:"flex"}} gap={{base:'',md:'',xl:'10%'}} className={styles.ratingBo}>
                        <Image src='/images/truck.png' alt='Truck' marginTop={{base:"",md:"",xl:"-5"}} />
                        <Box  marginTop={5}>
                            <Text>Montreal,Canada</Text>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                            <StarIcon width={6} color={' #FFB90A'}/>
                        </Box>
                    </Box>
            </Box>
          {/* </Center> */}
        </Box>
        <Center >
            <Link href={''} className={styles.active}>1</Link>
            <Link href={''}>2</Link>
            <Link href={''} className={styles.next}>Next</Link>
        </Center>
    </Box>

  )
}

export default Drivers