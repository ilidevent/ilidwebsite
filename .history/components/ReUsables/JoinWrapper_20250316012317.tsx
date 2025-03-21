import React from 'react'
import OpportunityBox from './OpportunityBox'
import { JoinData } from '@/utils'
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

const JoinWrapper = ({data}: {data:}) => {
  return (
    <div className={styles.jbw__wrapper}>
      {JoinData.map((data, i) => (
        <OpportunityBox key={i} boxData={data} />
      ))}
    </div>
  )
}

export default JoinWrapper