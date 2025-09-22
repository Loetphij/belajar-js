let text = "Loading";
let count = 0;
const timer = setInterval(() => {
  console.log(text + ".".repeat(count++));
  if (count > 5) clearInterval(timer);
}, 1000);
