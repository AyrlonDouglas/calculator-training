import React, { useState, useCallback, useEffect } from "react";
// components
import Nav from "../../components/Nav";
// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

// style
import { BoxValue, BoxKeyboard, GridValue } from "./style";
// components
import KeyboardButton from "../../components/Button/Keyboard";

export default function simplesCalculator(props: any) {
  const [history, setHistory] = useState("");
  const [display, setDisplay] = useState("");
  const keyboardNumbers = [
    "E",
    "±",
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
    "C",
    "=",
  ];
  const [clearDisplay, setClearDisplay] = useState(false);
  const [clearHistory, setClearHistory] = useState(false);
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  const handleOperation = (key: string) => {
    // rever esse erro de tipagem depois
    setHistory((state: string) => {
      if (clearHistory && numbers.includes(key)) {
        setClearHistory(false);

        return key;
      } else if (clearHistory && !numbers.includes(key)) {
        setClearHistory(false);

        return eval(handleHistoryForDisplay()) + key;
      }

      if (history && history.length > 0) {
        if (!numbers.includes(key) && key === state[state.length - 1]) {
          return state;
        } else if (
          !numbers.includes(key) &&
          !numbers.includes(state[state.length - 1]) &&
          state[state.length - 1] !== key
        ) {
          return state.substring(0, state.length - 1) + key;
        } else if (history[history.length - 1] === "." && key === ".") {
          return state;
        } else if (
          history[history.length - 1] === "." &&
          !numbers.includes(key)
        ) {
          return state + "0" + key;
        } else {
          return state + key;
        }
      } else if (numbers.includes(key)) {
        return key;
      }
    });

    if (clearDisplay && numbers.includes(key)) {
      setDisplay("");
      setClearDisplay(false);
    } else if (clearDisplay && !numbers.includes(key)) {
      setClearDisplay(false);
    }

    if (numbers.includes(key)) {
      if (clearDisplay) {
        setDisplay("");
        setClearDisplay(false);
      } else {
        setClearDisplay(false);
      }

      if (display[display.length - 1] === "." && key === ".") {
        setDisplay((state) => state);
      } else {
        setDisplay((state) => state + key);
      }
    } else {
      switch (key) {
        case "C":
          del();
          break;
        case "=":
          equal();
          break;
        default:
          genericOperation(key);
      }
    }
  };
  const handleHistoryForDisplay = () => {
    if (history && history.length > 0) {
      if (!numbers.includes(history[history.length - 1])) {
        return history.substring(0, history.length - 1);
      } else return history;
    } else return "0";
  };

  const genericOperation = (key: string) => {
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
  };
  const equal = () => {
    setDisplay(eval(handleHistoryForDisplay()));
    setClearDisplay(true);
    setClearHistory(true);
  };
  const del = () => {
    setDisplay("");
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
            <GridValue>{display}</GridValue>
            <GridValue className="history-operation">{history}</GridValue>
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
