const events = document.querySelector(".event");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const timeZone = document.querySelector(".time-zone");
const searchBtn = document.querySelector(".gsc-search-button");

// searchBtn.addEventListener("click", ()=>{
//   events.style.display = "none";
// });
const updateDate = () => {
  const date = dayjs().format("dddd, DD, MMMM, YYYY");
  const time = dayjs().format("hh:mm:ss A");
  timeElement.innerText = time;
  dateElement.innerText = date;
};


setInterval(updateDate, 1000);
