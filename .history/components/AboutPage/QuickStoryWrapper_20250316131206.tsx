import React from 'react'
import { quickStoryData } from '@/utils'
import HighlightedPhrases from '../ReUsables/HighlightedPhrases'
import styles from "../../styles/ReUsables/quickstory.module.scss"

const QuickStoryWrapper = () => {
  return (
    <div className={styles.qs__wrapper}>
      {
        quickStoryData.map((data, i) => (
          <HighlightedPhrases text={data.text} ke/>
        ))
      }
    </div>
  )
}

export default QuickStoryWrapper