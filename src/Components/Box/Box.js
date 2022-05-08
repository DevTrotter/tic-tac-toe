import React, { useState } from "react";
import { StyledBox } from "./StyledBox";
import { ImCross } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";

export const Box = ({ player, setPlayground, boxNumber, setPlayer }) => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    if (player === "x") {
      setPlayground[boxNumber] = "x";
      setValue(<ImCross />);
      setPlayer("o");
    } else {
      setPlayground[boxNumber] = "o";
      setValue(<BsFillRecordCircleFill />);
      setPlayer("x");
    }
  };

  return <StyledBox onClick={handleClick}>{value}</StyledBox>;
};
