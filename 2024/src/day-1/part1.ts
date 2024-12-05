import { parseNumbers, readInputLines } from "utils";

const lines = readInputLines(__dirname + "/input.txt");

const nums1: number[] = [];
const nums2: number[] = [];
for (const line of lines) {
  const [num1, num2] = parseNumbers(line);
  nums1.push(num1);
  nums2.push(num2);
}
nums1.sort((a, b) => b - a);
nums2.sort((a, b) => b - a);
let dist = 0;
for(let i = 0; i < nums1.length; i++) {
  dist += Math.abs(nums1[i] - nums2[i]);
}
console.log(dist);
