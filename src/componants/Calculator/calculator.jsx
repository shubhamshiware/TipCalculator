import React from 'react'
import Header from "../Header/Header";
import { useState } from "react";
import Input from "../../Input/Input";
import Service from "../../Service/Service";
import List from "../../List/List";
import Footer from "../Footer/Footer";
import styles from './calculator.module.css';

const Calculator = () => {
  const [cuList, setCulist] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [tip, setTip] = useState("");
  const [output, setOutput] = useState("");
  const [ttip, setTtip] = useState([]);
  const [finalTip, setFinalTip] = useState([]);

  const calculateTip = (amount, tip) => {
    let tipAmount = 0;
    if (tip === "excellent") {
      tipAmount = amount * 0.2;
    } else if (tip === "medium") {
      tipAmount = amount * 0.1;
    } else if (tip === "notGood") {
      tipAmount = amount * 0.05;
    }
    return tipAmount;
  };

  const tipAmount = calculateTip(amount, tip);

  const buttonClickHandler = () => {
    const trim = text.trim();
    if (trim == "") {
      alert("Enter Valid Name");
    } else {
      setCulist([...cuList, `${text} offering a tip of ${tipAmount} dollars`]);
      setTtip([...ttip, tipAmount]);
      setText("");
      setAmount(" ");
      setTip("");
    }
  };
  const addTip = ttip.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const calculateBtnHandler = () => {
    const listItem = cuList.map((task, index) => <li key={index}>{task}</li>);
    let customers = listItem.length;
    setOutput(customers);

    setFinalTip(addTip);
  };

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const changeHandler2 = (e) => {
    setTip(e.target.value);
  };
  const changeHandler1 = (e) => {
    setAmount(e.target.value);
  };



  return (
    <>
      <div className={styles.calculator}>
      <Header />
      <Input changeHandler1={changeHandler1} value={amount} />
      <Service
        buttonClickHandler={buttonClickHandler}
        changeHandler={changeHandler}
        changeHandler2={changeHandler2}
        value={text}
        value1={tip}
        isDisabled={!amount || !tip || !text}

      />
      <List
        list={cuList}
        calculateBtnHandler={calculateBtnHandler}
        isDisabled={!cuList}
      />
      <Footer ttip={finalTip} output={output} />
    </div>
      </>

  );
};
export default Calculator;