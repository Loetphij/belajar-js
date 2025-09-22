let i = 0;
const timer = setInterval(() => {
  console.log(i++);
  if (i > 10) clearInterval(timer);
}, 2000);
