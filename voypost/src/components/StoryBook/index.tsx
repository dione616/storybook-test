import React from "react";
import Box from "../common/Box";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { colors } from "../../styles/theme";
import TypographyComponent from "./TypographyComponent";
import TextFieldComponent from "./TextFieldComponent";

const StoryBook = () => {
  const theme = useTheme();
  return (
    <Box display="flex" pt={1} bgcolor={colors.black} color={colors.white}>
      <Box p={2.5}>
        <Box>
          <Button size="large" variant="contained" color="secondary">
            Sign Up
          </Button>
          <Button size="large" variant="contained" color="secondary">
            Sign Up
          </Button>
          <Button size="small" variant="contained" color="secondary">
            Sign Up
          </Button>
        </Box>
        <TextFieldComponent />
      </Box>
      <TypographyComponent />
    </Box>
  );
};

export default StoryBook;
