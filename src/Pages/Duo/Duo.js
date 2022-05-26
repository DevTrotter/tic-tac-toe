import React, { useState } from "react";
import { BoxList } from "../../Components/BoxList/BoxList";
import { Scoreboard } from "../../Components/Scoreboard/Scoreboard";
import { Layout } from "../../Layouts/Index";
import StyledDuo from "./StyledDuo";

export const Duo = () => {
  const [score, setScore] = useState({
    x: 0,
    o: 0,
  });
  const updateScoreboard = (player) => {
    setScore({ ...score, [player]: score[player] + 1 });
  };
  return (
    <Layout>
      <StyledDuo>
        <Scoreboard score={score} />
        <BoxList updateScoreboard={updateScoreboard} />
      </StyledDuo>
    </Layout>
  );
};
