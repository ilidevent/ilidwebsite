import React from 'react'
import OpportunityBox from './OpportunityBox'
import type { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

interface JoinDataItem {
  image: StaticImageData;
  heading: string;
  text: string;
  linkData?: {
    name: string;
    link: string;
  };
}

const JoinWrapper = ({joinData}: {joinData: JoinDataItem[]}) => {
  return (
    <div className={styles.jbw__wrapper}>
      {joinData.map((data, i) => (
        <OpportunityBox key={i} boxData={data} />
      ))}
    </div>
  )
}

export default JoinWrapper