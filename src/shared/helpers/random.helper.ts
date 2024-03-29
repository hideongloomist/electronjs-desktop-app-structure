export const randomInRange = (from: number, to: number): number => {
  console.log({ from, to });
  if (from > to) return 0;
  return Math.ceil(Math.random() * (to * 1000000 - from * 1000000) + from * 1000000) / 1000000;
};
