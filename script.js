const events = document.querySelector(".event");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const timeZone = document.querySelector(".time-zone");
const searchBtn = document.querySelector(".gsc-search-button");

const updateDate = () => {
  const date = dayjs().format("dddd, DD, MMMM, YYYY");
  const time = dayjs().format("hh:mm:ss A");
  timeElement.innerText = time;
  dateElement.innerText = date;
  timeZone.innerText = getTimezoneName();
};

function getTimezoneName() {
  const today = new Date();
  const options = {
    timeZoneName: 'long'
  };

  return new Intl.DateTimeFormat('en-US', options).formatToParts(today).find(part => part.type === 'timeZoneName').value;
}


setInterval(updateDate, 1000);
