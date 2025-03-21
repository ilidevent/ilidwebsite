import React from "react";
import { StaticImageData } from "next/image";
import AboutBox from "./AboutBox";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

interface AboutDataProps {
  image: StaticImageData;
  aspectRatio: string;
  name: string;
  text: string;
}

const AboutboxWrapper = ({ data }: { data: AboutDataProps[] }) => {
  return (
    <div className={styles.abw__wrapper}>
      {AboutData.map((data, i) => (
        <AboutBox key={i} boxData={data} />
      ))}
    </div>
  );
};

export default AboutboxWrapper;
