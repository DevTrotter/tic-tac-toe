import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import StyledHeader from "./StyledHeader";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>TIC-TAC-TOE</Link>
    </StyledHeader>
  );
};
