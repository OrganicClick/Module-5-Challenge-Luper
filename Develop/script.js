//**CODE TO BE RELOCATED TO APPROPRIATE LOCATION**


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
  // Get the current hour using dayjs, using 24-hour format
 var currentHour = dayjs().hour();
 
 // Loops through each time block, running the function within to compare and color-code each time-block-container
 $(".time-block-container").each(function() {
   // Created variable that stores value of parseInt function, that parses the hour from each time block's ID
   var blockHour = parseInt($(this).attr("id").split("-")[1]);
 
   // Constructs logic argument to color-code each time-block-container based on comparison between blockHour and
   // currentHour values
   if (blockHour < currentHour) {
     // Past time block, color-code to gray
     $(this).addClass("past");
   } else if (blockHour === currentHour) {
     // Current time block, color-code to green
     $(this).addClass("present");
   } else {
     // Future time block, color-code to blue
     $(this).addClass("future");
   }
 
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  // TODO: Add code to display the current date in the header of the page.

  // The following section of code is intended to satisfy the first Acceptance Criterion: 
    // WHEN I open the planner
    // THEN the current day is displayed at the top of the calendar


    // Defines variables that select the #currentDay from the HTML file (currentDayElement).

    var currentDayElement = $("#currentDay");

    // Gets the current date and time using day.js() and formats it to a string in the 'LLLL' style.

    var nowVariable = dayjs().format('dddd, MMMM D, YYYY h:mm A	');

    // Selects the #currentDay element from the HTML file, and generates text based on the logic run within the 
    // nowVariable

    currentDayElement.text(nowVariable);

    console.log(nowVariable);
});
