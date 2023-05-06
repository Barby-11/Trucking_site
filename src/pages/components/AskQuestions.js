import React from 'react'
import {  ChatIcon, EditIcon, ExternalLinkIcon, LinkIcon, PlusSquareIcon, WarningIcon } from '@chakra-ui/icons'

import styles from '../../styles/AskQuestions.module.css'
import { Box, Flex, Image, Input, Text } from '@chakra-ui/react';
function AskQuestion() {
  return (
    <div className={styles.mainBody}>
        <div className={styles.box0}>
            <Box className={styles.box1}>
              <h1 className={styles.heading1}>Community</h1>
              <p>Find answers, ask questions, and connect with our community around the world.</p>
              <Box className={styles.iconBar}>
                  <div className={styles.icon1}>
                    <ChatIcon width={6} />
                    <Text>Topic</Text>
                  </div>
                  <div className={styles.icon2}>
                    <ChatIcon width={6} />
                    <Text>Other</Text>
                  </div>
                  <div className={styles.icon3}>
                    <ChatIcon width={6} />
                    <Text>Members</Text>
                  </div>
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
              <div className={styles.ask}>
                <ChatIcon  width={6}/>
                <Text >Ask Truckers</Text>
              </div>
              <div className={styles.answer}>
                <EditIcon  width={6}/>
                <Text textAlign={'center'}>Answer</Text>
              </div>
              <div className={styles.post}>
                <ExternalLinkIcon  width={6}/>
                <Text>Post</Text>
              </div>
            </Flex>
        </div>
        
        {/*  */}
        <Box display={{base:"grid",md:"grid",xl:"flex"}} className={styles.contentBox}>
          <Box className={styles.contentBox1}>
            <h2 className={styles.heading2}>Frequently Asked</h2>
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
                <div className={styles.vertical}></div>
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
          <div className={styles.contentBox2}>
          <h2 className={styles.heading3}>Recent Topics</h2>
              <li>How long is free trail</li>
              <label className={styles.textC}>3 days, 5 hours ago</label>
              <li>How long is free trail</li>
              <label className={styles.textC}>3 days, 5 hours ago</label>
              <li>How long is free trail</li>
              <label className={styles.textC}>3 days, 5 hours ago</label>
          </div>
        </Box>
        <div className={styles.contentBox}>
          <div className={styles.contentBox1}>
            <h2 className={styles.heading2}>Community</h2>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
          </div>
          <div className={styles.contentBox2}>
            <h2 className={styles.heading3}>Stats</h2>
            <label className={styles.label3}>Registerd Users</label><label>23</label>
            <br />
            <label className={styles.label3}>Topics</label><span className={styles.tab}></span><label>13</label>
            <br />
            <label className={styles.label3}>Replies</label> <span className={styles.tab}></span><label>2</label>
          </div>
        </div>
        <div className={styles.contentBox1}>
            <h2 className={styles.heading2}>Informative</h2>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>                                                  
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
            <div className={styles.subBox1}>
                <div className={styles.subBox1A}>
                  <ChatIcon marginEnd={2} width={6} />
                  <label>How long is the free trial ?</label>
                  <br />
                  <label className={styles.text1B}>How long is the free rial period ?</label>
                </div>
                <div className={styles.topicCount}>
                  <label className={styles.textA}>1</label>
                  <br />
                  <label className={styles.textB}>Topic</label>
                </div>
                <div className={styles.vertical}></div>
                <div className={styles.RepliesCount}>
                  <label className={styles.textA}>0</label>
                  <br />
                  <label className={styles.textB}>Replies</label>
                </div>
                <div className={styles.subBox1B}>
                  <img src='/images/john doe.jpg' className={styles.img1} />
                  <div className={styles.nameBox2}>
                      <label className={styles.nameText2} >Sandala Barby</label>
                      <br />
                      <label className={styles.textB}>3 Days, 5 hours ago</label>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default AskQuestion;