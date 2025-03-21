"use client";

import React, {useState} from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/venueone.jpg"
import IMAGE2 from "../../public/images/venuetwo.jpg"
import IMAGE3 from "../../public/images/venuethree.jpg"
import styles from "../../styles/ReUsables/venuewrapper.module.scss"


const VenueWrapper = () => {
  const venueImages = [
    {
      id: 1,
      image: IMAGE,
      alt: "ENSTP One"
    },
    {
      id: 2,
      image: IMAGE2,
      alt: "ENSTP One"
    },
    {
      id: 3,
      image: IMAGE3,
      alt: "ENSTP One"
    }
  ]

  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className={styles.venue__wrapper}>
      <div className={styles.venue__main}>
        {
          venueImages.map((data, i) => (
            <div className={`${styles.venueimage} ${activeImage===i ? styles.active__image : ""}`} key={data.id}>
              <Image fill quality={100} alt={data.alt} src={data.image}/>
            </div>
          ))
        }
      </div>
      <div className={styles. }>
      {
          venueImages.map((data, i) => (
            <div className={`${styles.venueimage} ${activeImage===i ? styles.active__image : ""}`} key={data.id}>
              <Image fill quality={100} alt={data.alt} src={data.image}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VenueWrapper