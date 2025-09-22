console.log("Start");
setTimeout(() => {
  console.log("Proses...");
  setTimeout(() => console.log("Done"), 2000);
}, 2000);
