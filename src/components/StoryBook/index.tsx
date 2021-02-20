import React from "react";
import Box from "../common/Box";
import TypographyComponent from "./TypographyComponent";
import TextFieldComponent from "./TextFieldComponent";
import ButtonsComponent from "./ButtonsComponent";

const StoryBook = () => {
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
