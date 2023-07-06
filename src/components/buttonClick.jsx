import { Button } from "@mui/material";
import React from "react";

export default function ButtonClick({ disable, accion, icon, title }) {
  return (
    <Button
      disabled={disable}
      onClick={accion}
      variant="contained"
      startIcon={icon}
      color="success"
      sx={{ m: 3, p: 10, fontSize: 25 }}
    >
      {title}
    </Button>
  );
}
