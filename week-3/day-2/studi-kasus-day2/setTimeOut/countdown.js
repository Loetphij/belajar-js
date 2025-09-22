function countdown(i) {
  if (i === 0) return console.log("Go!");
  console.log(i);
  setTimeout(() => countdown(i - 1), 1000);
}
countdown(5);
