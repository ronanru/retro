import "./style.css";
const screen = document.getElementById("screen") as HTMLDivElement;

const onResize = () => {
  screen.style.scale = Math.min(
    (window.innerWidth - 16) / 640,
    (window.innerHeight - 16) / 480
  ).toString();
};

onResize();
window.addEventListener("resize", onResize);

const COLS = 80;
const ROWS = 37;

const getEmptyScreen = () =>
  new Array(ROWS).fill(0).map(() => " ".repeat(COLS));

const centerMessage = (message: string[]) => {
  const screen = getEmptyScreen();
  const startRow = Math.floor((ROWS - message.length) / 2);
  const startCol = Math.floor((COLS - message[0].length) / 2);
  for (let i = 0; i < message.length; i++) {
    screen[startRow + i] =
      screen[startRow + i].substring(0, startCol) + message[i];
  }
  return screen.join("\n");
};

let i = 0;

const spinnerStates = ["/", "-", "\\", "|"];

setInterval(() => {
  screen.innerHTML = centerMessage([
    " ---------------------- ",
    `| Booting up the OS  ${spinnerStates[i]} |`,
    " ---------------------- ",
  ]);
  i++;
  if (i === spinnerStates.length) i = 0;
}, 500);
