import React, { useState, useCallback, useEffect } from "react";
// // components
// import Nav from "../../components/Nav";
// // MUI
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";

// // style
// import { BoxValue, BoxKeyboard } from "./style";
// // components
// import KeyboardButton from "../../components/Button/Keyboard";

// export default function simplesCalculator(props: any) {
//   const [currentNumber, setCurrentNumber] = useState("");
//   const [previousNumber, setPreviousNumber] = useState("");
//   const [lastOperator, setLastOperator] = useState("");
//   const [result, setResult] = useState(false);
//   const [historyOperations, setHistoryOperations] = useState("");
//   const [display, setDisplay] = useState("0");
//   const keyboardNumbers = [
//     "C",
//     "+/-",
//     "%",
//     "/",
//     "7",
//     "8",
//     "9",
//     "x",
//     "4",
//     "5",
//     "6",
//     "-",
//     "1",
//     "2",
//     "3",
//     "+",
//     "0",
//     ".",
//     "del",
//     "=",
//   ];
//   const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//   const handleOperation = (key: string) => {
//     if (numbers.includes(key)) {
//       if (result) {
//         setResult(false);
//         setCurrentNumber(key);
//         setPreviousNumber("");
//       } else if (!(key === "0" && currentNumber.length === 1)) {
//         setCurrentNumber((state: string) => state + key);
//       }
//     }
//     if (currentNumber.length > 1 && currentNumber[0] === "0") {
//       currentNumber.substring(1, currentNumber.length - 1);
//     }
//     console.log(currentNumber.length);
//     if (key === "del") del();
//     if (key === ".") dot(key);
//     if (key === "C") clear();
//     if (key === "+") sum();
//     if (key === "=" && previousNumber && currentNumber) equal();
//     if (key === "-") minus();
//   };

//   const minus = () => {
//     setLastOperator("-");
//     setResult(false);
//     if (!previousNumber) {
//       setPreviousNumber(currentNumber);
//       setCurrentNumber("");
//     } else {
//       setCurrentNumber((state) =>
//         (parseFloat(previousNumber) + parseFloat(state) * -1).toString()
//       );
//     }
//   };

//   const sum = () => {
//     setLastOperator("+");
//     setResult(false);
//     if (!previousNumber) {
//       setPreviousNumber(currentNumber);
//       setCurrentNumber("");
//     } else if (currentNumber) {
//       setCurrentNumber((state) =>
//         (parseFloat(previousNumber) + parseFloat(state)).toString()
//       );
//     }
//   };
//   const del = () => {
//     if (currentNumber.length > 0) {
//       setCurrentNumber((state) => state.substring(0, state.length - 1));
//     }
//   };
//   const dot = (key: string) => {
//     if (currentNumber.length === 0) {
//       setCurrentNumber("0.");
//     } else if (!currentNumber.includes(".")) {
//       setCurrentNumber((state) => state + key);
//     }
//   };
//   const clear = () => {
//     setDisplay("0");
//     setHistoryOperations("");
//     setCurrentNumber("");
//     setPreviousNumber("");
//   };

//   const equal = () => {
//     setResult(true);
//     setPreviousNumber("");

//     switch (lastOperator) {
//       case "+":
//         setCurrentNumber((state) =>
//           (parseFloat(previousNumber) + parseFloat(state)).toString()
//         );
//       case "-":
//         setCurrentNumber((state) =>
//           (parseFloat(previousNumber) - parseFloat(state)).toString()
//         );
//     }
//   };

//   const generateKeyboard = (arr: string[]) =>
//     arr.map((key) => (
//       <Grid
//         item
//         xs={3}
//         sm={3}
//         display={"flex"}
//         justifyContent={"center"}
//         alignItems={"center"}
//       >
//         <KeyboardButton keyboardKey={key} onClick={handleOperation} />
//       </Grid>
//     ));

//   return (
//     <>
//       <Nav />
//       <Container
//         sx={{
//           marginTop: "2rem",
//           width: "15rem",
//         }}
//       >
//         <Paper>
//           <BoxValue>
//             <Grid>{currentNumber}</Grid>
//             <Grid className="history-operation">{historyOperations}</Grid>
//           </BoxValue>
//           <BoxKeyboard>
//             <Grid container xs={12} spacing={1}>
//               {generateKeyboard(keyboardNumbers)}
//             </Grid>
//           </BoxKeyboard>
//         </Paper>
//       </Container>
//     </>
//   );
// }
