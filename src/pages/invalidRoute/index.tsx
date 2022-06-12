import React from "react";
import Nav from "../../components/Nav";
import { Typography } from "@mui/material";

export default function InvalidRoute() {
  return (
    <>
      <Nav />
      <Typography align="center" variant="h3" mt={16}>
        Rota inválida
      </Typography>
    </>
  );
}
