export function sigmaCalculation(start: number, end: number, whatToSum: any): number {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += whatToSum(i);
  }
  return sum;
}
export function piProductCalculation(start: number, end: number, whatToProduct: any): number {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum *= whatToProduct(i);
  }
  return sum;
}
