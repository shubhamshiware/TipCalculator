import React from 'react'
import styles from "./Footer.module.css";
const Footer = ({ ttip, output }) => {
  console.log(ttip);

  return (
    <>
      <div>
        <table className={styles.border} id={styles.size}>
          <thead>
            <tr className={styles.border}>
              <th className={styles.border}>NO OF CUSTOMER</th>
              <th className={styles.border}>TIP</th>
            </tr>
            <tr className={styles.border}>
              <td className={styles.border}>{output}</td>
              <td className={styles.border}>{ttip}</td>
            </tr>
          </thead>
        </table>
        <h3 className={styles.bottom}>© 2020 TIP CALCULATOR</h3>
      </div>
    </>
  );
};
export default Footer;
