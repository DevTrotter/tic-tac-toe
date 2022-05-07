import React from "react";
import { BoxList } from "../../Components/BoxList/BoxList";
import { Layout } from "../../Layouts/Index";
import { StyledHome } from "./StyledHome";

export const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <div className="container-home">
          <BoxList />
        </div>
      </StyledHome>
    </Layout>
  );
};
