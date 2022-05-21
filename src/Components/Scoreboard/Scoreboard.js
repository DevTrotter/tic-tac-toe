import React from "react";
import StyledScoreboard from "./StyledScoreboard";
import { ImCross } from "react-icons/im";
import { BsFillRecordCircleFill } from "react-icons/bs";

export const Scoreboard = ({ score }) => {
  const { x, o } = score;
  return (
    <StyledScoreboard>
      <h1>
        <ImCross /> &nbsp;:&nbsp; <span>{x}</span>
      </h1>
      <h1>
        <BsFillRecordCircleFill /> &nbsp;:&nbsp; <span>{o}</span>
      </h1>
    </StyledScoreboard>
  );
};
