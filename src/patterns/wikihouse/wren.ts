type Point = [number, number];

export const points = (width: number, height: number): Point[] => {
  return [[0, 0], [width, 0], [width, height], [0, height]];
};
