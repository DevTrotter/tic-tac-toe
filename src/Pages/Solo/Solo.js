import React, { useState } from "react";
import { BoxList } from "../../Components/BoxList/BoxList";
import { Scoreboard } from "../../Components/Scoreboard/Scoreboard";
import { Layout } from "../../Layouts/Index";
import StyledSolo from "./StyledSolo";

export const Solo = () => {
  const [score, setScore] = useState({
    x: 0,
    o: 0,
  });
  const updateScoreboard = (player) => {
    setScore({ ...score, [player]: score[player] + 1 });
  };
  return (
    <Layout>
      <StyledSolo>
        <Scoreboard score={score} />
        <BoxList updateScoreboard={updateScoreboard} />
      </StyledSolo>
    </Layout>
  );
};
