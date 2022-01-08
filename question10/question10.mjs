import PriorityQueue from "./Queue.mjs";
const max10 = (arr) => {
  let pq = new PriorityQueue();
  let startingArr = arr.slice(0, 10);
  pq.push(...startingArr);
  for (let i = 0; i < arr.length; i++) {
    let min = pq.peek();
    if (arr[i] > min) {
      pq.replace(arr[i]);
    }
  }
  console.log(pq.size());
  console.log(pq.peek());
};
max10([1, 2, 3, 4, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 44]);
