import Link from 'next/link'
import React from 'react'
import styles from '../../styles/JobListing.module.css'
import { Container } from 'react-bootstrap'
function jobListing() {
  return (
    <div>
        <Container className={styles.navBar}>
            <Link href={''} className={styles.link1R}>Back</Link>
            <label>My Job Listing</label>
            <Link href={''} className={styles.link1L}>Add Listing</Link>
        </Container>
        <div></div>
    </div>
  )
}

export default jobListing