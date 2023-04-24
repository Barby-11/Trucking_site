import Link from 'next/link';
import React from 'react'
import { Carousel } from 'react-bootstrap';

import styles from '../../styles/Blog Post.module.css'
function Reviews() {
  return (
    <div>
        <h2>Select Brand</h2>
        <div>
            <select type='text' className={''} >
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
                <option>Mercedes Benz Truck</option>
            </select>
            <button className={styles.driverBtn}>Drivers</button> 
        </div>
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <h3>Similar Trucks</h3>
        <div>
            <Carousel >

            </Carousel>
        </div>
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
    </div>
  )
}

export default Reviews;