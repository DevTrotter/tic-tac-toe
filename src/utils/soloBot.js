export const soloBot = (playground) => {
  const positionOpponent = [];
  const positionAlly = [];
  const angleIndex = [0, 2, 6, 8];
  const centerIndex = 4;
  const borderIndex = [1, 3, 5, 7];
  const winPosition = [];

  const compareArray = (arrayA, arrayB) => {
    let result = false;
    arrayA.map((valueA) => {
      arrayB.map((valueB) => {
        if (valueA === valueB) result = true;
      });
    });
    return result;
  };

  const getRandomIndex = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const checkPosition = (array) => {
    array.map((position) => {});
  };

  playground.map((player, i) => {
    if (player === "x") return positionOpponent.push(i);
    if (player === "o") return positionAlly.push(i);
  });

  if (positionAlly.length === 0) {
    if (compareArray(positionOpponent, angleIndex))
      return document.getElementById("4").click();
    if (positionOpponent[0] === centerIndex)
      return document.getElementById(getRandomIndex(angleIndex)).click();
    if (compareArray(positionOpponent, borderIndex))
      return document.getElementById(getRandomIndex(angleIndex)).click();
  }
  if (positionAlly.length > 0) {
  }
};
