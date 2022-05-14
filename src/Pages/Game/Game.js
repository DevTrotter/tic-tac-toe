import React from "react";
import { BoxList } from "../../Components/BoxList/BoxList";
import { Layout } from "../../Layouts/Index";
import StyledGame from "./StyledGame";

export const Game = () => {
  return (
    <Layout>
      <StyledGame>
        <div className="container-game">
          <BoxList />
        </div>
      </StyledGame>
    </Layout>
  );
};
