import React from 'react'
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.heading}>
        <h2 className={styles.headingColor}>TIP CALCULATOR</h2>
        <h3 className={styles.headingColor}>Build in React</h3>
      </div>

      <h4 className={styles.smallHeading}>ENTER BILL AMOUNT:</h4>
    </>
  );
};
export default Header;
