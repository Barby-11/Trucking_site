//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";
import {items} from '../../../../public/Items.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../../../styles/Responsive.module.css";
import { Box, Center, Image, Text } from "@chakra-ui/react";

export default function ResponsiveCarousel() {
  const { responsive } = items;
  return (
    <div className={styles.container}>
      <Carousel
        
        showArrows={true}
        showIndicators={false}
        infiniteLoop={true}
        dynamicHeight={false}
        className={styles.mySwiper}
        
      >
        {responsive.map((item) => (
          <Box key={item.id} p={4}>
            <Image
              margin={0}
              padding={0}
              width={'100%'}
              height={{base:'250',md:'400',sm:'450'}}
              borderRadius={{base:'10px',md:'200px',sm:'200px'}}
              src={item.imageUrl}
              alt="slides"
            />
            <Text
              bg={'blue.600'}
              color={'white'}
              borderRadius={5}
              p={2}
              mt={2}
              width={'100%'}
              textAlign={'center'}
              fontSize={{base:'16px',md:'20px',sm:'24px'}}
              fontFamily={'Playfair Display'}
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </Carousel>
    </div>
  );
}
