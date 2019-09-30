const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const secondsOne = document.getElementById("secondOnes");

const counterLoop = () =>
  counter.forEach(num => {
    num++;
  });

const counterHandle = () => {
  setInterval(counterLoop(), 10);
};
