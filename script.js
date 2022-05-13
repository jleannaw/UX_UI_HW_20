const textList = ["gardening.", "cats.", "design.", "food."];

const cycle = document.querySelector("#cycle");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = textList[i];
  i = ++i % textList.length;
};
cycleText();
setInterval(cycleText, 1500);