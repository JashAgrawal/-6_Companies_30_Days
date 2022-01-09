const findPosition = (size, noOfToys, startingPoint) => {
  if (noOfToys <= size - (startingPoint + 1)) {
    return noOfToys + startingPoint - 1;
  }
  const remainingToys = noOfToys - size + (startingPoint - 1);
  return remainingToys % size == 0 ? size : remainingToys % size;
};
console.log(findPosition(10, 10, 2));
