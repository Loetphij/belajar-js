let i = 10;
const timer = setInterval(() => {
  console.log(i--);
  if (i < 0) clearInterval(timer);
}, 1000);
