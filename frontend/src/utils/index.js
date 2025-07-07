export const getRandomBG = () => {
  const colors = [
    "#f6b100",
    "#2ea440",
    "#664a04",
  ];

  const color = colors[Math.floor(Math.random() * colors.length)];
  return "bg-[" + color + "]";
};
