//**CODE TO BE RELOCATED TO APPROPRIATE LOCATION**
// The following section of code is intended to satisfy the first Acceptance Criterion: 
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// Imports localizedFormat plug-in for dayjs API and allows the plug-in to be used

var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

// Defines variables that select the #currentDay from the HTML file (currentDayElement).

var currentDayElement = $("#currentDay");

// Gets the current date and time using day.js() and formats it to a string in the 'LLLL' style.

var nowVariable = dayjs().format('LLLL');

// Selects the #currentDay element from the HTML file, and generates text based on the logic run within the 
// nowVariable

currentDayElement.text(nowVariable);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
