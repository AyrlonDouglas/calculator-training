import React, { useState, useCallback, useEffect } from "react";
// components
import Nav from "../../components/Nav";
// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

// style
import { BoxValue, BoxKeyboard } from "./style";
// components
import KeyboardButton from "../../components/Button/Keyboard";

export default function simplesCalculator(props: any) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [previousOperator, setPreviousOperator] = useState("");
  const [historyOperations, setHistoryOperations] = useState("");
  const [display, setDisplay] = useState("");
  const keyboardNumbers = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "del",
    "=",
  ];
  const [clearDisplay, setClearDisplay] = useState(false);
  const [clearHistory, setClearHistory] = useState(false);
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  // console.log(operator, "operator");
  // console.log(previousOperator, "previousOperator");
  const handleHistory = (key: string) => {
    setHistoryOperations((state: string) => {
      if (clearHistory) {
        setClearHistory(false);
        return key;
      } else if (!numbers.includes(key) && key === state[state.length - 1]) {
        return state;
      } else if (
        !numbers.includes(key) &&
        !numbers.includes(state[state.length - 1])
      ) {
        return state.substring(0, state.length - 1) + key;
      } else {
        return state + key;
      }
    });

    if (clearDisplay && !numbers.includes(key)) {
      setHistoryOperations(`${result}${key}`);
    }
  };
  const handleDisplay = (key: string) => {
    if (clearDisplay && numbers.includes(key)) {
      setDisplay("");
      setClearDisplay(false);
    } else if (clearDisplay && !numbers.includes(key)) {
      setPreviousNumber(result);
      setDisplay("");
      setClearDisplay(false);
    }
    if (numbers.includes(key)) {
      setDisplay((stateDisplay: string) => {
        setCurrentNumber((stateCurrentNumber) =>
          parseFloat(stateDisplay + key)
        );
        return stateDisplay + key;
      });
    }
  };
  console.log(eval("10+5-8+10+10="));
  const handleOperation = (key: string) => {
    handleHistory(key);
    handleDisplay(key);
    if (!numbers.includes(key)) {
      setPreviousOperator(operator);
      setOperator(key);

      if (key === "=") return equal();

      handleOperator(
        operator !== previousOperator && previousOperator
          ? previousOperator
          : key
      );
    }
    // console.log(key, "key");
  };
  // console.log(result, "result");

  // console.log(operator, previousOperator);
  const handleOperator = (operatorKey: string) => {
    // console.log(operatorKey, "operatorKey");
    switch (operatorKey) {
      case "del":
        del();
        break;
      case "+":
        sum();
        break;
      case "-":
        subtraction();
        break;
      default:
        return "";
    }
  };

  const subtraction = () => {
    if (!previousNumber && currentNumber) {
      setResult(currentNumber);
      setPreviousNumber(currentNumber);
      setDisplay(currentNumber.toString());
      setCurrentNumber(0);
    } else if (previousNumber && currentNumber) {
      setResult(previousNumber - currentNumber);
      setPreviousNumber((state) => state - currentNumber);
      setCurrentNumber(0);
      setDisplay((previousNumber - currentNumber).toString());
    } else if (!currentNumber && previousNumber) {
      setResult(previousNumber);
      setDisplay(previousNumber.toString());
    }
    setClearDisplay(true);
  };

  const sum = () => {
    if (!previousNumber && currentNumber) {
      setResult(currentNumber);
      setPreviousNumber(currentNumber);
      setDisplay(currentNumber.toString());
      setCurrentNumber(0);
    } else if (previousNumber && currentNumber) {
      setResult(previousNumber + currentNumber);
      setPreviousNumber((state) => state + currentNumber);
      setCurrentNumber(0);
      setDisplay((previousNumber + currentNumber).toString());
    } else if (!currentNumber && previousNumber) {
      setResult(previousNumber);
      setDisplay(previousNumber.toString());
    }
    setClearDisplay(true);
  };

  const equal = () => {
    if (operator === "=") return;
    handleOperator(operator);

    setClearDisplay(true);
    setCurrentNumber(0);
    setPreviousNumber(0);
    setClearHistory(true);
    setPreviousOperator("");
  };

  const del = () => {
    setDisplay("");
    setCurrentNumber(0);
    setPreviousNumber(0);
    setOperator("");
    setPreviousOperator("");
    setResult(0);
    setHistoryOperations("");
    setPreviousOperator("");
  };

  const generateKeyboard = (arr: string[]) =>
    arr.map((key, index) => (
      <Grid
        key={index}
        item
        xs={3}
        sm={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <KeyboardButton keyboardKey={key} onClick={handleOperation} />
      </Grid>
    ));

  return (
    <>
      <Nav />
      <Container
        sx={{
          marginTop: "2rem",
          width: "15rem",
        }}
      >
        <Paper>
          <BoxValue>
            <Grid>{display}</Grid>
            <Grid className="history-operation">{historyOperations}</Grid>
          </BoxValue>
          <BoxKeyboard>
            <Grid container spacing={1}>
              {generateKeyboard(keyboardNumbers)}
            </Grid>
          </BoxKeyboard>
        </Paper>
      </Container>
    </>
  );
}
