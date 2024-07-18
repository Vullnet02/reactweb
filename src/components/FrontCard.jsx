import React from "react";
import styles from "../Style/frontcard.module.css";

const FrontCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}></div>
        <div className={styles.cardBack}>
          <p className={styles.para}>BackEnd</p>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
