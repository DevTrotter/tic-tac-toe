import React from "react";
import { StyledLayout } from "./StyledLayout";
import "../Assets/style/global.css";

export const Layout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
