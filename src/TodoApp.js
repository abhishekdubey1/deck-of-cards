import React from "react";
import Paper, { AppBar, Toolbar, Typography } from "@material-ui/core";
export default function TodoApp() {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "#fafafa",
        height: "100vh"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
