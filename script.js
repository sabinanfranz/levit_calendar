const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

console.log(date, currYear, currMonth);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let liTag = "";

  //for 문
  for (let i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }
  console.log(lastDateofMonth);
  currentDate.innerText = months[currMonth] + " " + currYear;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if 문
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    //달력 업데이트를 계속 해주는 것.
    renderCalendar();
  });
});
