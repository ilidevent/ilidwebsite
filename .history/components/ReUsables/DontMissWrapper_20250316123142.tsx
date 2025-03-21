import React from "react";
import DontMissBox from "./DontMissBox";
import { DontMissData } from "@/utils";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

const DontMissWrapper = () => {
  return (
    <div className={styles.dnm__wrapper}>
      {DontMissData.map((data, i) => (
        <DontMissBox key={i} data={data} />
      ))}
    </div>
  );
};

export default DontMissWrapper;
