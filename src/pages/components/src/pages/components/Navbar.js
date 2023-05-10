import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navbar() {
  return (
    <Nav>
        <Flex gap={20} padding={10}>
            <Link href={"/"}>Home</Link>
            <Link href={"/components/Drivers"}>Drivers </Link>
            <Link href={"/components/BlogPost"}>Blog Post</Link>
            <Link href={"/components/NewsArchive"}>News Archive</Link>
            <Link href={"/components/AskQuestions"}>Ask Questions</Link>
            <Link href={"/components/BlogPost"}>Blog Post</Link>
            <Link href={"/components/SignUp"}>Sign Up</Link>
            <Link href={"/components/LogIn"}>LogIn</Link>
            <Link href={"/components/Reviews/Reviews"}>Reviews</Link>
        </Flex>
    </Nav>
  )
}
