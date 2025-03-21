import React from "react";
import AboutBox from "./AboutBox";
import { AboutData } from "@/utils";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

interface AboutDataProps: {
  image: any;
  aspectRatio: string;
  name: string;
  text: string;
}[]


const AboutboxWrapper = ({data}: {data: }) => {
  return (
    <div className={styles.abw__wrapper}>
      {AboutData.map((data, i) => (
        <AboutBox key={i} boxData={data} />
      ))}
    </div>
  );
};

export default AboutboxWrapper;
