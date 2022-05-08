import React, { useState } from "react";
import { StyledBox } from "./StyledBox";
import { ImCross } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";

export const Box = ({ player, setPlayground, boxNumber }) => {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    if (player === "x") {
      setPlayground[boxNumber] = "x";
      setValue(<ImCross />);
    }
    {
      setPlayground[boxNumber] = "o";
      setValue(<BsFillRecordCircleFill />);
    }
  };

  return <StyledBox onClick={handleClick}>{value}</StyledBox>;
};
