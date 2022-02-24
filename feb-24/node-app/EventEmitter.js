const Event = require("events");
const EventEmitter = new Event();
let counter = 0;
EventEmitter.on("start counter", () => {
  let timerId = setInterval(() => {
    counter = counter + 1;
    console.log(counter);
  }, 1000);
});
EventEmitter.emit("start counter");
