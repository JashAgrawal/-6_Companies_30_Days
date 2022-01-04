const DoOverlap = (TopLeft1, RightBottom1, TopLeft2, RightBottom2) => {
  if (
    TopLeft1.x == RightBottom1.x ||
    TopLeft1.y == RightBottom1.y ||
    TopLeft2.x == RightBottom2.x ||
    TopLeft2.y == RightBottom2.y
  ) {
    return false;
  }
  if (TopLeft1.x >= RightBottom2.x || TopLeft2.x >= RightBottom1.x) {
    return false;
  }

  if (RightBottom1.y >= TopLeft2.y || RightBottom2.y >= TopLeft1.y) {
    return false;
  }

  return true;
};
let Ans = DoOverlap(
  { x: 0, y: 2 },
  { x: 1, y: 1 },
  { x: -2, y: -3 },
  { x: 0, y: 2 }
);
console.log(Ans ? "The rectangles overlap." : "The rectangles do Not overlap.");
