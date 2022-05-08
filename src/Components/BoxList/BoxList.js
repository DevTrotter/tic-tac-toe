import React, { useState } from "react";
import { Box } from "../Box/Box";
import { StyledBoxList } from "./StyledBoxList";

export const BoxList = () => {
  const [playground, setPlayground] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
    <StyledBoxList>
      {playground?.map((box, boxNumber) => (
        <Box
          key={boxNumber}
          markPlayer={box}
          setPlayground={setPlayground}
          boxNumber={boxNumber}
        />
      ))}
    </StyledBoxList>
  );
};
