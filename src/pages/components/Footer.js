import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <div>
        <Link href={'/components/SignUp.js'}>Sign Up</Link>
        <Link href={'./Login.js'}>Login</Link>
        <Link href={'./Jobs.js'}>Jobs</Link>
        <Link href={'./Job listing.js'}>Job Listing</Link>
        <Link href={'./Reviews.js'}>Revuws</Link>
        <Link href={'./News Archive.js'}>News Archive</Link>
        <Link href={'./Company Profile.js'}>Company Profile</Link>
        <Link href={'./Blog Post.js'}>Blog Post</Link>
        <Link href={'./Create Talk Box.js'}>Creat Talk Box</Link>
        <Link href={'./Drivers.js'}>Drivers</Link>
        <Link href={'./Add Job Listing.js'}>Add Job Listing</Link>
    </div>
  )
}

export default Footer;