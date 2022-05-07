import React from "react";
import { Box } from "../Box/Box";
import { StyledBoxList } from "./StyledBoxList";

export const BoxList = () => {
  const playground = ["", "", "", "", "", "", "", "", ""];
  return (
    <StyledBoxList>
      {playground.map((box) => (
        <Box />
      ))}
    </StyledBoxList>
  );
};
