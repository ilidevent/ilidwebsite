import React from 'react'
import OpportunityBox from './OpportunityBox'
import { OpportunityData } from '@/utils'
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

const OpportunityWrapper = () => {
  return (
    <div className={styles.obw__wrapper}>
      {OpportunityData.map((data, i) => (
        <AboutBox key={i} boxData={data} />
      ))}
    </div>
  )
}

export default OpportunityWrapper