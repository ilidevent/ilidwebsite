import React from 'react'
import DontMissBox from './DontMissBox'
import { JoinData } from '@/utils'
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

const DontMissWrapper = () => {
  return (
    <div className={styles.dnm__wrapper}>
      {
        JoinData.map((data, i) => (

          <DontMissBox key={i} data={} />
        ))
      }
    </div>
  )
}

export default DontMissWrapper