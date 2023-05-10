import Link from "next/link";
import { Button,  Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

import styles from '../../styles/SigUp.module.css'
import { Box, Image, Select, Text } from "@chakra-ui/react";
 const SignUp =()=> {
    return(
        <>
            <Box className={styles.mainBox}>
                <Box className={styles.container1}>
                    <Text className={styles.title1}>Join Us!</Text>
                    <Box className={styles.link1Box}>
                    <i class="fa-brands fa-google"></i>
                        <Link href={''} className={styles.link1}>Sign in with google</Link>
                    </Box>
                    <Box className={styles.horizontal}>
                        <hr className={styles.hori1}/> Or 
                        <hr className={styles.hori2}/>
                    </Box>
                    <Form className={styles.form}>
            
                        <FormGroup className={styles.group}>
                            <FormLabel className={styles.label}>Driver Name</FormLabel>
                            <br />
                             <FormControl className={styles.input1} type="name"/>
                        </FormGroup>
                        <FormGroup className={styles.group}>
                            <FormLabel className={styles.label}>Occupation</FormLabel>
                            <br />
                            <Select className={styles.select1}>
                                <option>Forklift operator</option>
                                <option>Machine operator</option>
                                <option>Catapiller Operator</option>
                            </Select>
                        </FormGroup>
                        <FormGroup className={styles.group}>
                            <FormLabel className={styles.label}>Reason for Acount Creation</FormLabel>
                            <br />
                            <FormControl className={styles.input2} type="textarea" placeholder="Enter your reason here."/>
                        </FormGroup>
                        <Button type="submit" className={styles.submitBtn}>Submit</Button>
                    </Form>
                </Box>
                <Box>
                    <Image className={styles.img1} src="/images/bg1.png" alt="image 1" />
                </Box>
            </Box>
        </>
    )
 }
 export default SignUp;