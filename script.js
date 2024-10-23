const events = document.querySelector(".event");
const timeElement = events.querySelector(".time");
const dateElement = document.querySelector(".date");
const timeZone = document.querySelector("time-zone");


const updateDate = () => {
  const date = dayjs().format("dddd, DD, MMMM, YYYY");
  const time = dayjs().format("hh:mm:ss A");
  // const zone = dayjs.tz.guess();
  timeElement.innerText = time;
  dateElement.innerText = date;
};


setInterval(updateDate, 1000);
