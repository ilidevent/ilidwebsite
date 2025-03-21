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
      
    }
  ]

  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className={styles.venue__wrapper}>
      <div className={styles.venue__main}>
        {
          venueImages.map((image, i) => (
            <div className={`${styles.venueimage} ${activeImage===i ? styles.active__image : ""}`} key={i}>
              <Image fill/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VenueWrapper