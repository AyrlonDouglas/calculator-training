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
  const [history, setHistory] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [result, setResult] = useState(0);
  const [display, setDisplay] = useState("");
  const keyboardNumbers = [
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
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

  const handleOperation = (key: string) => {
    setCurrentNumber((state) => state + key);
    setHistory((state: string) => {
      if (clearHistory && numbers.includes(key)) {
        setClearHistory(false);

        return key;
      } else if (clearHistory && !numbers.includes(key)) {
        setClearHistory(false);
        return eval(handleHistoryForDisplay());
      }

      if (history.length > 0) {
        if (!numbers.includes(key) && key === state[state.length - 1]) {
          return state;
        } else if (
          !numbers.includes(key) &&
          !numbers.includes(state[state.length - 1]) &&
          state[state.length - 1] !== key
        ) {
          return state.substring(0, state.length - 1) + key;
        } else return state + key;
      } else {
        return key;
      }
    });

    if (clearDisplay && numbers.includes(key)) {
      setDisplay("");
      setClearDisplay(false);
    } else {
      setClearDisplay(false);
    }

    if (numbers.includes(key)) {
      setDisplay((state) => state + key);
    } else {
      switch (key) {
        case "del":
          del();
          break;
        case "+":
          sum();
          break;
        case "-":
          subtraction();
          break;
        case "*":
          multiplication();
          break;
        case "/":
          division();
          break;
        case "=":
          equal();
          break;
        default:
          "";
      }
    }
  };
  const handleHistoryForDisplay = () => {
    if (history.length > 0) {
      if (!numbers.includes(history[history.length - 1])) {
        return history.substring(0, history.length - 1);
      } else return history;
    } else return "0";
  };

  // as funções abaixo estão iguais, dps refatorar para ser apenas uma "global"
  const sum = () => {
    setCurrentNumber("");
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
  };
  const subtraction = () => {
    setCurrentNumber("");
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
  };
  const division = () => {
    setCurrentNumber("");
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
  };
  const multiplication = () => {
    setCurrentNumber("");
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
  };
  const equal = () => {
    setCurrentNumber("");
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
    setClearHistory(true);
  };
  const del = () => {
    setDisplay("");
    setCurrentNumber("");
    setResult(0);
    setHistory("");
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
            <Grid className="history-operation">{history}</Grid>
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
