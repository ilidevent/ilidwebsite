import React from "react";
import Image from "next/image";
import { betterMarqueAnim } from "@/animations";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/Navigation/bettermarque.module.scss"

const BetterMarque = ({activeBetter}: {activeBetter: boolean}) => {
  const betterRef = useRef(null);
  const logoRef = useRef(null);
  
  return (
    <motion.div
      variants={betterMarqueAnim}
      animate={activeBetter ? "open" : "closed"}
      className={styles.better__marque}
    >
      <div
        className={styles.bi__wrapper}
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        ref={betterRef}
      >
        <div className={styles.b__image}>
          <Image
            src={IMAGE3}
            fill
            quality={100}
            alt="Better Marque"
            sizes="(max-width: 600px) 100%, 100%"
          />
        </div>
        <div className={styles.b__contact}>
          <Icon
            icon="fluent-mdl2:cancel"
            onClick={() => setActiveBetter(false)}
          />
            <Link href="https://wa.me/+237693370638">
              {t("Navigation:contact")}
            </Link>
        </div>
      </div>
      <div className={styles.bc__content}>
        <div
          className={styles.logo}
          style={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }}
          ref={logoRef}
        >
          <Image
            src={IMAGE2}
            fill
            alt="Better Marque"
            quality={100}
            sizes="(max-width: 600px) 100%, 100%"
            loading="eager"
          />
        </div>
        <div className={styles.text}>{splitwords()}</div>

        <div
          className={styles.b__footer}
          style={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }}
          ref={footerRef}
        >
          <Link href="https://www.bettermarque.com" className={styles.coming}>
            {t("Navigation:website")}
          </Link>
          <div className={styles.button}>
            <Link href="https://www.instagram.com/bettermarque/">
              Instagram
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=61555159313413">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BetterMarque;
