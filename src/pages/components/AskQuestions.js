import React from 'react'
import {  ChatIcon, EditIcon, ExternalLinkIcon, LinkIcon, PlusSquareIcon, WarningIcon } from '@chakra-ui/icons'

import styles from '../../styles/AskQuestions.module.css'
import { Box, Center, Flex, Image, Input, Text } from '@chakra-ui/react';
function AskQuestion() {
  return (
    <Box 
        marginLeft={{base:'1%',md:'2%',xl:'10%'}} 
        marginRight={{base:'1%',md:'2%',xl:'10%'}} 
        marginTop={{base:'1%',md:'2%',xl:'2%'}} 
        
        className={styles.mainBod}>
        <Box className={styles.box0}>
            <Box className={styles.box1}>
              <h1 className={styles.heading1}>Community</h1>
              <p>Find answers, ask questions, and connect with our community around the world.</p>
              <Box className={styles.iconBar}>
                  <Box className={styles.icon1}>
                    <ChatIcon width={6} />
                    <Text>Topic</Text>
                  </Box>
                  <Box className={styles.icon2}>
                    <ChatIcon width={6} />
                    <Text>Other</Text>
                  </Box>
                  <Box className={styles.icon3}>
                    <ChatIcon width={6} />
                    <Text>Members</Text>
                  </Box>
              </Box>
      
            </Box>
            <Flex gap={1} className={styles.box2}>
              <Text 
                bg={'blue'} 
                color={'#fff'} 
                width={'fit-content'} 
                padding={2} borderRadius={50}
                >MK</Text>
              <Input type='text' value={'Add Query'} className={styles.queryInput}/>
              <PlusSquareIcon width={10} height={8} />
              <LinkIcon width={10} height={6} />
            </Flex>
            <Flex gap={2} className={styles.box3}>
              <Box className={styles.ask}>
                <ChatIcon  width={6}/>
                <Text >Ask Truckers</Text>
              </Box>
              <Box className={styles.answer}>
                <EditIcon  width={6}/>
                <Text textAlign={'center'}>Answer</Text>
              </Box>
              <Box className={styles.post}>
                <ExternalLinkIcon  width={6}/>
                <Text>Post</Text>
              </Box>
            </Flex>
        </Box>
        
        {/* Frequent asked Questions  */}
        <h2 className={styles.heading2}>Frequently Asked</h2>
        <Box 
            display={{base:"grid",md:"grid",xl:"flex"}} 
            gap={{base:'',md:'',xl:'10'}}
            className={styles.contentBox}>

          <Box className={styles.contentBox1}>
            <Box display={'flex'} gap={2} className={styles.subBox1}>
                <Box display={'grid'}>
                  <Flex>
                    <ChatIcon marginEnd={2} width={6} />
                    <Text fontWeight={'bold'}>How long is the free trial ?</Text>
                  </Flex>
                  <Text className={styles.text1B}>How long is the free trial period ?</Text>
                </Box>
                <Box className={styles.topicCount}>
                  <Text className={styles.textA}>1</Text>
                  <Text className={styles.textB}>Topic</Text>
                </Box>
                <Box className={styles.vertical}></Box>
                <Box className={styles.RepliesCount}>
                  <Box className={styles.textA}>0</Box>
                  <Box className={styles.textB}>Replies</Box>
                </Box>
                <Flex className={styles.subBoxB}>
                  <Image src='/images/john doe.jpg' className={styles.img1} />
                  <Box className={styles.nameBox2}>
                      <Text className={styles.nameText2} >Sandala Barby</Text>
                      <Text className={styles.textB}>3 Days, 5 hours ago</Text>
                  </Box>
                </Flex>
            </Box>
          </Box>

          {/* Recent Topics */}
          <Box width={{base:'100%',md:'100%',xl:'fit-content'}} className={styles.contentBox2}>
           <Center>
              <Text fontWeight={600}>Recent Topics</Text>
            </Center> 
              <li>How long is free trail</li>
              <Text className={styles.textC}>3 days, 5 hours ago</Text>
              <li>How long is free trail</li>
              <Text className={styles.textC}>3 days, 5 hours ago</Text>
              <li>How long is free trail</li>
              <Text className={styles.textC}>3 days, 5 hours ago</Text>
          </Box>
        </Box>

        {/* community */}
        <Text className={styles.heading2}>Community</Text>
        <Box className={styles.contentBox}>
          <Box  
              display={{base:'grid',md:'grid',xl:'flex'}}
              gap={{base:'',md:'',xl:'10'}}
              className={styles.contentBox1}>
            <Flex 
                width={{base:'100%',md:'100%',xl:'fit-content'}} 
                className={styles.subBox1}>
                <Box className={styles.subBox1A}>
                  <Flex>
                    <ChatIcon marginEnd={2} width={6} />
                    <Text fontWeight={'bold'}>How long is the free trial ?</Text>
                  </Flex>
                  <Text >How long is the free trial period ?</Text>
                </Box>
                <Box className={styles.topicCount}>
                  <Text className={styles.textA}>1</Text>
                  <Text className={styles.textB}>Topic</Text>
                </Box>
                <Box className={styles.vertical}></Box>
                <Box className={styles.RepliesCount}>
                  <Text className={styles.textA}>0</Text>
                  <Text className={styles.textB}>Replies</Text>
                </Box>
                <Flex className={styles.subBox1B}>
                  <Image src='/images/john doe.jpg' className={styles.img1} />
                  <Box className={styles.nameBox2}>
                      <Text className={styles.nameText2} >Sandala Barby</Text>
                      <Text className={styles.textB}>3 Days, 5 hours ago</Text>
                  </Box>
                </Flex>
            </Flex>
            <Box 
                width={{base:'60%',md:'60%',xl:'fit-content'}}
                className={styles.contentBox2}>
              <Center>
                <Text className={styles.heading3}>Stats</Text>
              </Center>
              <Flex gap={100}>
                <Text >Registerd Users</Text><Text>23</Text>
              </Flex>
              <Flex gap={170}>
                <Text >Topics</Text><Text>13</Text>
              </Flex>
              <Flex gap={170}>
                <Text >Replies</Text><Text>2</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box 
            width={{base:'100%',md:'100%',xl:'80%'}}
            className={styles.contentBox1}>
            <Text className={styles.heading2}>Informative</Text>
            <Flex  className={styles.subBox1}>
                <Box className={styles.subBox1A}>
                 <Flex>
                    <ChatIcon marginEnd={2} width={6} />
                    <Text fontWeight={'bold'}>How long is the free trial ?</Text>
                  </Flex>                                                  
                  <Text >How long is the free rial period ?</Text>
                </Box>
                <Box className={styles.topicCount}>
                  <Text className={styles.textA}>1</Text>
                  <Text className={styles.textB}>Topic</Text>
                </Box>
                <Box className={styles.vertical}></Box>
                <Box className={styles.RepliesCount}>
                  <Text className={styles.textA}>0</Text>
                  <Text className={styles.textB}>Replies</Text>
                </Box>
                <Flex className={styles.subBox1B}>
                  <Image src='/images/john doe.jpg' className={styles.img1} />
                  <Box className={styles.nameBox2}>
                      <Text className={styles.nameText2} >Sandala Barby</Text>
                      <Text className={styles.textB}>3 Days, 5 hours ago</Text>
                  </Box>
                </Flex>
            </Flex>
            <Flex className={styles.subBox1}>
                <Box className={styles.subBox1A}>
                  <Flex>
                    <ChatIcon marginEnd={2} width={6} />
                    <Text fontWeight={'bold'}>How long is the free trial ?</Text>
                  </Flex>
                  <Text>How long is the free rial period ?</Text>
                </Box>
                <Box className={styles.topicCount}>
                  <Text className={styles.textA}>1</Text>
                  <Text className={styles.textB}>Topic</Text>
                </Box>
                <Box className={styles.vertical}></Box>
                <Box className={styles.RepliesCount}>
                  <Text className={styles.textA}>0</Text>
                  <Text className={styles.textB}>Replies</Text>
                </Box>
                <Box className={styles.subBox1B}>
                  <Image src='/images/john doe.jpg' className={styles.img1} />
                  <Box className={styles.nameBox2}>
                      <Text className={styles.nameText2} >Sandala Barby</Text>
                      <Text className={styles.textB}>3 Days, 5 hours ago</Text>
                  </Box>
                </Box>
            </Flex>
          </Box>
    </Box>
  )
}

export default AskQuestion;