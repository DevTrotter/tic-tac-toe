import { useState } from "react";
import { BoxList } from "../../Components/BoxList/BoxList";
import { Scoreboard } from "../../Components/Scoreboard/Scoreboard";
import { Layout } from "../../Layouts/Index";
import StyledGame from "./StyledGame";

export const Game = () => {
  const [score, setScore] = useState({
    x: 0,
    o: 0,
  });
  const updateScoreboard = (player) => {
    setScore({ ...score, [player]: score[player] + 1 });
  };
  return (
    <Layout>
      <StyledGame>
        <Scoreboard score={score} />
        <BoxList updateScoreboard={updateScoreboard} />
      </StyledGame>
    </Layout>
  );
};
