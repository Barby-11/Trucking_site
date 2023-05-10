import Link from "next/link";
import { Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

import styles from '../../styles/Login.module.css'
import { Box, Image, Text } from "@chakra-ui/react";
 export default function Login() {
    return(
        <>
            <Box className={styles.mainBox}>
                <Box  className={styles.container}>
                        <Text className={styles.title}>Sign In</Text>
                        <Box className={styles.link1Box}>
                        <i class="fa-brands fa-google"></i>
                            <Link href={'/'} className={styles.link1}>Sign in with google</Link>
                        </Box>
                        <Box className={styles.horizontal} >
                            <hr className={styles.hori1}/>
                            <Link href={''}>Sign in with your email</Link>
                            <hr className={styles.hori2}/>
                        </Box>
                        <Form className="">
                            <FormGroup className={styles.group}>
                                <FormLabel className={styles.label}>Email Address</FormLabel>
                                <br />
                                <FormControl className={styles.input1} type="email"/>
                            </FormGroup>
                            <FormGroup className={styles.group}>
                                <FormLabel className={styles.label}>Password</FormLabel>
                                <br />
                                <FormControl className={styles.input2}type="password"/>
                            </FormGroup>
                            <Box className={styles.group2}>
                                <FormControl type="checkbox" className={styles.check} />
                                <FormLabel className={styles.label2}>keep me signed in</FormLabel>
                                <Link href={"#"} className={styles.link2}>forgot password?</Link>
                            </Box>
                            <Button type="submit" className={styles.loginBtn}>Sign In</Button>
                            <Box className={styles.group3}>
                                <p>Dont have an account? </p>
                                <Link href={''} className={styles.link3}>Register</Link>
                            </Box>
                        </Form>
                </Box>
                <Box display={{base:"none",md:"none",xl:""}}>
                    <Image  className={styles.img1} src="/images/bg1.png" alt="image 1" />
                </Box>
            </Box>
        </>
    )
 }