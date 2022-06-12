import React, { useState, useCallback, useEffect } from "react";
// components
import Nav from "../../components/Nav";
// MUI

import { Typography, Paper, Container, Grid, Box } from "@mui/material";

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
        } else if (key === "." && history[history.length - 1] === ".") {
          return state;
        } else if (
          history[history.length - 1] === "." &&
          !numbers.includes(key)
        ) {
          return state + "0" + key;
        } else if (key === ".") {
          // verifica se já existe "." entre operadores
          const positionOperador = [];
          for (let [index, value] of history.split("").entries()) {
            if (!numbers.includes(value)) {
              positionOperador.push(index);
            }
          }
          if (positionOperador.length > 0) {
            for (
              let i = positionOperador[positionOperador.length - 1];
              i < history.length;
              i++
            ) {
              if (history[i] === ".") return state;
            }
          } else {
            if (history.indexOf(".") !== -1) {
              return state;
            } else return state + key;
          }

          return state + key;
        } else {
          return state + key;
        }
      } else if (numbers.includes(key)) {
        return key;
      }
      return "";
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

      if (
        key === "." &&
        (display[display.length - 1] === "." || history.indexOf(".") !== -1)
      ) {
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
        <Typography sx={{ fontSize: "0.7rem" }} color="GrayText">
          * O operador % calcula o resto.
        </Typography>
        <Typography sx={{ fontSize: "0.7rem" }} color="GrayText">
          ** Por hora E e ± estão desabilitados.
        </Typography>
      </Container>
    </>
  );
}
