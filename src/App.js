import { ThemeProvider } from "@mui/material";
import React from "react";
import TestScreen from "./screens/TestScreen";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TestScreen />
    </ThemeProvider>
  );
};

export default App;
