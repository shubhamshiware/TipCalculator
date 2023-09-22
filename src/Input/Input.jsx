import React from 'react'

import styles from "./Input.module.css";
const Input = ({ changeHandler1, value }) => {
  return (
    <>
      <input
        type="number"
        className={styles.input}
        onChange={changeHandler1}
        value={value}
      />
      <hr />
    </>
  );
};
export default Input;