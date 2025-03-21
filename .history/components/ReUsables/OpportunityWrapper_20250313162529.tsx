import React from 'react'
import OpportunityBox from './OpportunityBox'
import { OpportunityData } from '@/utils'
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

const OpportunityWrapper = () => {
  return (
    <div className={styles.obw__wrapper}>
      <OpportunityBox/>
    </div>
  )
}

export default OpportunityWrapper