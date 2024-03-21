// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function get_time_detials() {
  let Time = new Date();

  let weak = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let get_day = Time.getDay();

  console.log(`Today is : ${weak[get_day]}`);

  let hour = Time.getHours();
  let minute = Time.getMinutes();
  let second = Time.getSeconds();

  let ampm = hour >= 12 ? "PM" : "AM";

  let hour_new = hour >= 12 ? hour - 12 : hour;

  if (hour == 0) {
    hour_new = 12;
  }
  console.log(` ${hour_new}:${ampm} : ${minute} : ${second}`);
}

// 2. Write a JavaScript program to print the current window contents.
// in the script for the print the page
// window.print()

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

() => {
  let Time = new Date();
  let day = Time.getDate().toString();
  let month = (Time.getMonth() + 1).toString();
  let fullyear = Time.getFullYear();
  let new_day = day.length == 1 ? "0" + day : day;
  let new_month = month.length == 1 ? "0" + month : month;
  console.log(`${new_month}-${new_day}-${fullyear}`);
};

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
(() => {
  let side1 = 5;
  let side2 = 6;
  let side3 = 7;

  let s = (side1 + side2 + side3) / 2;

  let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  console.log(area);
})();


