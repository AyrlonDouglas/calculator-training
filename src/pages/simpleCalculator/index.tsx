import React, { useState, useCallback } from "react";
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
  const [currentKey, setcurrentKey] = useState("");
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

  const [historyOperations, setHistoryOperations] = useState("");
  console.log(historyOperations);
  function handleHistory(key: string) {
    setHistoryOperations(key);
  }
  const generateKeyboard = (arr: string[]) =>
    arr.map((key) => (
      <Grid
        item
        xs={3}
        sm={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <KeyboardButton keyboardKey={key} onClick={handleHistory} />
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
            <Grid>4,152</Grid>
            <Grid className="history-operation">{historyOperations}</Grid>
          </BoxValue>
          <BoxKeyboard>
            <Grid container xs={12} spacing={1}>
              {generateKeyboard(keyboardNumbers)}
            </Grid>
          </BoxKeyboard>
        </Paper>
      </Container>
    </>
  );
}
