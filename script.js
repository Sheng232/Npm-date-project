const events = document.querySelector(".event");

const updateDate = () => {
  const currentDate = new Date();
  events.setAttribute("data-date", `${currentDate}`);

  const date = dayjs(events.dataset.date).format("MMM-DD-YYYY hh:mm:ss A");
  const dateElement = events.querySelector(".date");
  dateElement.innerText = date;
};


updateDate();

setInterval(updateDate, 1000);
