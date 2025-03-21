import React from "react";
import { StaticImageData } from "next/image";
import DontMissBox from "./DontMissBox";
import { DontMissData } from "@/utils";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

interface DontMissData {
  image: StaticImageData;
  heading: string;
  text: string;
}

const DontMissWrapper = ({data}: {data: D }) => {
  return (
    <div className={styles.dnm__wrapper}>
      {DontMissData.map((data, i) => (
        <DontMissBox key={i} data={data} />
      ))}
    </div>
  );
};

export default DontMissWrapper;
