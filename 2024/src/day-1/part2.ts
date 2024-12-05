import { parseNumbers, readInputLines } from "utils";

const lines = readInputLines(__dirname + "/input.txt");

const nums1: number[] = [];
const numCounts = new Map<number, number>();
for (const line of lines) {
  const [num1, num2] = parseNumbers(line);
  nums1.push(num1);
  numCounts.set(num2, (numCounts.get(num2) ?? 0) + 1);
}
let similarity = 0;
for(const n of nums1) {
  similarity += n * (numCounts.get(n) ?? 0);
}
console.log(similarity);
