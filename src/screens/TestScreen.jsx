import { Button } from "@mui/material";
import React from "react";

const TestScreen = () => {
  return (
    <div>
      <Button variant="text">Button</Button>
      <Button variant="text" disabled>
        Button
      </Button>
      <br />
      <Button variant="contained">Button</Button>
      <Button variant="contained" disabled>
        Button
      </Button>
    </div>
  );
};

export default TestScreen;
