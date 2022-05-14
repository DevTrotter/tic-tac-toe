import React from "react";
import { StyledLayout } from "./StyledLayout";
import "../Assets/style/global.css";
import { Header } from "../Components/Header/Header";

export const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};
