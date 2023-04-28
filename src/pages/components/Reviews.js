import Link from 'next/link';
import React from 'react'
import { Button, Container, Flex, Select, Slider, Text } from '@chakra-ui/react';

import styles from '../../styles/Reviews.module.css'
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
        <Slider>
            
        </Slider>
        <h3>Similar Trucks</h3>
        <div>
            <h3>Pinned Reviews 📌</h3>
        </div>
        <div>
            <div>
                <img src='/' className={styles.img3} />
                <label>🔯🔯🔯🔯🔯🔯</label>
                <h2>Mrs. Hart</h2>
                <p>My Husband loves this truck</p>
                <label>On <Link href={''}>Mercedes-Benz Zetros</Link></label>
            </div>
            <div>
                <img src='/' className={styles.img3} />
                <label>🔯🔯🔯🔯🔯🔯</label>
                <h2>Mrs. Hart</h2>
                <p>My Husband loves this truck</p>
                <label>On <Link href={''}>Mercedes-Benz Zetros</Link></label>
            </div>
            <div>
                <img src='/' className={styles.img3} />
                <label>🔯🔯🔯🔯🔯🔯</label>
                <h2>Mrs. Hart</h2>
                <p>My Husband loves this truck</p>
                <label>On <Link href={''}>Mercedes-Benz Zetros</Link></label>
            </div>
        </div>
    </Container>
  )
}

export default Reviews;