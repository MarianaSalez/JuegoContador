import React from "react";
import { Typography, Paper } from "@mui/material";

export default function InfoCards({ title, value, color }) {
  return (
    <Paper elevation={2} sx={{ background: color, width: 1 / 3, py: 5 }}>
      <Typography sx={{ fontSize: 20, fontWeight: 400 }}>{title}</Typography>
      <Typography sx={{ fontSize: 20, fontWeight: 400 }} display="block">
        {" "}
        {value}{" "}
      </Typography>
    </Paper>
  );
}
