import { Button, Typography, withStyles } from "@material-ui/core";
import React from "react";
import Box from "../../common/Box";

const StyledButton = withStyles({
  root: {
    borderRadius: 6,
    border: 0,
    height: 50,
    width: 133,
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const ButtonsComponent = () => {
  return (
    <Box display="block">
      <Typography variant="subtitle2" gutterBottom>
        Buttons
      </Typography>
      <Box marginTop={2} marginBottom={2}>
        <Button size="large" variant="contained" color="secondary">
          Sign Up
        </Button>
        <StyledButton size="medium" variant="contained" color="secondary">
          Sign Up
        </StyledButton>
        <Button size="small" variant="contained" color="secondary">
          Sign Up
        </Button>
      </Box>
      <Box marginTop={2} marginBottom={2}>
        <Button size="large" variant="contained" color="primary">
          Sign Up
        </Button>
        <StyledButton size="medium" variant="contained" color="primary">
          Sign Up
        </StyledButton>
        <Button size="small" variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>
      <Box marginTop={2} marginBottom={2}>
        <Button size="large" variant="contained" color="default">
          Sign Up
        </Button>
        <StyledButton size="medium" variant="contained" color="default">
          Sign Up
        </StyledButton>
        <Button size="small" variant="contained" color="default">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonsComponent;
