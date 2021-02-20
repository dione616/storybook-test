import { TextField, Typography } from "@material-ui/core";
import React from "react";
import Box from "../../common/Box";

const TextFieldComponent = () => {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Text fields
      </Typography>
      <Box marginTop={2.5}>
        <Typography variant="subtitle2" display="block" gutterBottom>
          Default
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Full Name
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Placeholder"
          variant="outlined"
          color="primary"
        />
      </Box>
      <Box marginTop={2.5}>
        <Typography variant="subtitle2" gutterBottom>
          Active
        </Typography>
        <Typography
          variant="caption"
          color="secondary"
          display="block"
          gutterBottom
        >
          Email Address
        </Typography>
        <TextField
          id="outlined-basic"
          placeholder="Placeholder"
          variant="outlined"
          color="primary"
          focused
        />
      </Box>
      <Box marginTop={2.5}>
        <Typography variant="subtitle2" gutterBottom>
          Errors
        </Typography>
        <Typography
          variant="caption"
          color="error"
          display="block"
          gutterBottom
        >
          Password (8 characters)
        </Typography>

        <TextField
          id="outlined-basic"
          placeholder="Placeholder"
          variant="outlined"
          error
        />
        <Typography
          variant="caption"
          color="error"
          display="block"
          gutterBottom
        >
          Please input your password! The password must be at least 8
          characters!
        </Typography>
      </Box>
    </Box>
  );
};

export default TextFieldComponent;
