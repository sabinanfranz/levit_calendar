const currentDate = document.querySelector(".current-date");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

console.log(date, currYear, currMonth);

const renderCalendar = () => {
  currentDate.innerText = currMonth + " " + currYear;
};

renderCalendar();
