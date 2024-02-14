import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Paper,
  Stack,
  Typography,
  IconButton,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  return (
    <div className="App">
      <LinearProgress color="secondary" />
      <Paper>
        <Typography variant="h3">This is typograph example</Typography>
        <Button color="secondary" variant="contained">
          Hello from MAterial UI
        </Button>
        <Stack spacing={2} direction="row">
          <Button variant="contained" sx={{ width: "200px" }}>
            Button 1
          </Button>
          <IconButton size="small" color="primary">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Paper>
    </div>
  );
}

export default App;
