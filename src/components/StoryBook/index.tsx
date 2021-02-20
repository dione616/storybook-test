import React from "react";
import Box from "../common/Box";
import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { colors } from "../../styles/theme";
import TypographyComponent from "./TypographyComponent";
import TextFieldComponent from "./TextFieldComponent";
import ButtonsComponent from "./ButtonsComponent";

const StoryBook = () => {
  const theme = useTheme();
  return (
    <Box display="flex" pt={1}>
      <Box p={2.5}>
        <ButtonsComponent />
        <TextFieldComponent />
      </Box>
      <TypographyComponent />
    </Box>
  );
};

export default StoryBook;
