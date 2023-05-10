import React from 'react'

import styles from '../../styles/BlogPost.module.css'
import Link from 'next/link';
import { Box, Image, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
function BlogPost() {
  return (
    <Box marginLeft={{base:"5%",md:"",xl:"5%"}} marginTop={5} marginBottom={1} marginRight={{base:"5%",md:"",xl:"5%"}}>
         <Box display={'flex'}>
            <Link href={'/'} className={styles.backBtn}><ArrowBackIcon marginTop={2} fontSize={25} fontWeight={500} color={'blue.500'} padding={1}/></Link>
            <Text fontSize={25} fontWeight={500}>Post</Text>
        </Box>
        <hr className={styles.hori}/>
        <Text fontWeight={700}>San Francisco Scorching Sun</Text>
        <Box display={{base:"flex",md:"",xl:"flex"}}>
            <Image src='/images/Img8.jpg' width={{base:"",md:"",xl:"100%"}} height={{base:"",md:"",xl:"70vh"}}/>
            <Box padding={2} marginLeft={{base:"-20%",md:"",xl:"0%"}} >
                <Image src='/images/whatsapp.png' className={styles.whatsApp}/>
                <br/>
                <Image src='/images/in.png'  className={styles.linkedIn}/>
                <br/>
                <Image src='/images/insta.png'  className={styles.instagram}/>
                <br/>
                <Image src='/images/fb.png'  className={styles.facebook}/>
            </Box>
        </Box>
        <Text fontSize={{base:"15px",md:"15pxx",xl:"20px"}} textAlign={'justify'} width={{base:"",md:"",xl:"93%"}} >The SFMTA has also reminded truck drivers to be aware of the signs 
            and symptoms of heat exhaustion and heatstroke. These can include 
            headaches, dizziness, nausea, fatigue, and confusion. If a driver 
            experiences any of these symptoms, they should immediately stop 
            driving and seek medical attention.
            The SFMTA has emphasized that the safety of all road users is a 
            top priority, and truck drivers have a particular responsibility 
            to ensure their own safety and the safety of others on the road. 
            They have reminded drivers that the extreme heat can affect their 
            ability to drive safely and that taking precautions can prevent 
            accidents and save lives.<br />
            In conclusion, San Francisco is experiencing more frequent heatwaves, 
            which can pose a danger to truck drivers on the road. The SFMTA has 
            issued a warning to truck drivers to take precautions to ensure their 
            safety during hot weather. These precautions include wearing lightweight 
            clothing, staying hydrated, taking frequent breaks, parking in shaded 
            areas, and being aware of the signs of heat-related illnesses. By following 
            these guidelines, truck drivers can help ensure their safety and the safety 
            of others on the road.
        </Text>
        <Text fontSize={{base:"15px",md:"15pxx",xl:"20px"}} textAlign={'justify'} width={{base:"",md:"",xl:"93%"}}>
            San Francisco is known for its cool, foggy weather, but in recent years, 
            the city has experienced occasional heatwaves. These heatwaves can be dangerous, 
            especially for truck drivers who spend long hours on the road. The scorching 
            sun can cause fatigue, dehydration, and heat exhaustion, which can impair a 
            driver's ability to operate their vehicle safely. As a result, the city of 
            San Francisco has issued a warning to truck drivers to take caution during 
            hot weather. <br />
            The San Francisco Municipal Transportation Agency (SFMTA) has advised truck 
            drivers to be aware of the risks associated with driving in hot weather and 
            to take precautions to ensure their safety. The agency has recommended that 
            drivers wear lightweight, breathable clothing, and drink plenty of water to 
            stay hydrated. They have also advised drivers to take frequent breaks to rest 
            and cool down, especially during the hottest part of the day.
            In addition to these general precautions, the SFMTA has also recommended that 
            truck drivers take specific measures to prevent heat-related illnesses. For 
            example, they have advised drivers to park in shaded areas whenever possible 
            and to avoid leaving their vehicles in direct sunlight. They have also 
            recommended that drivers use sunshades to block out the sun's rays and keep 
            the interior of their vehicles cool.
        </Text>
    </Box>
  )
}

export default BlogPost;