import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/partner.png";
import { PartnerData } from "@/utils";
import styles from "../../styles/ReUsables/sponsorwrapper.module.scss";

const SponsorsWrapper = () => {
  return (
    <div className={styles.partner__container}>
      {PartnerData.map((data, i) => (
        <div className={styles.partner__wrapper}>
          <div className={styles.partneri__wrapper}>
            <div
              className={styles.partner__image}
              style={{ width: data.width, aspectRatio: data.aspectRatio }}
            >
              <Image fill quality={100} alt={data.name} src={data.image} />
            </div>
          </div>
          <div className={styles.partner__content}>
            <div className={styles.left__button}></div>
            <p className={styles.partner__type}>
              {data.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorsWrapper;
