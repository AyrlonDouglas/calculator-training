import React from "react";
import { Link } from "react-router-dom";
import Grid, { GridProps } from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <Grid container gap={1} width="100%" justifyContent={"center"} mt={"2rem"}>
      <Link to={"/"}>
        <Button variant="contained" size="small" sx={{ fontSize: "1rem" }}>
          Calculadora simples
        </Button>
      </Link>
    </Grid>
  );
}
