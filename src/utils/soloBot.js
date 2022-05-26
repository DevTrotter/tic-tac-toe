export const soloBot = (playground) => {
  let status = null;
  const positionOpponent = [];
  const positionAlly = [];

  playground.map((player, i) => {
    if (player === "x") return positionOpponent.push(i);
    if (player === "o") return positionAlly.push(i);
  });
  document.getElementById("3").click();
};
