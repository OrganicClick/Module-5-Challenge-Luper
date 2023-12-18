//**CODE TO BE RELOCATED TO APPROPRIATE LOCATION**


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
 
    // Add a click event listener to all elements with class saveBtn
    $(".saveBtn").on("click", function() {
      // Get the ID of the parent time-block container, which will be the corresponding time-block hour. This
      // is written so that the timeBlockID stores the value of the nearest time-block-container to the save
      // button that is clicked.
      var timeBlockID = $(this).closest(".time-block-container").attr("id");
  
      // Get the user input from the textarea within the same time block. The syntax here is structured to identify the '.description'
      // class as a sibling to the save button.
      var userInput = $(this).siblings(".description").val();
  
      // Save the user input in local storage using the time block ID as a key
      localStorage.setItem(timeBlockID, userInput);
    });

  //
  // Get the current hour using dayjs, using 24-hour format
  var currentHour = dayjs().hour();

  // Logs the value of currentHour to console
  console.log("Current Hour:", currentHour);
 
  $(".time-block-container").each(function() {
    // Extract the hour part from the ID
    var idParts = $(this).attr("id").split("-");
    
    // Check if the ID has the expected structure, which is two parts separated by a hyphen. This also creates a variable that 
    // has a stored value of the second index item of the array (the array being the id of the container, with two indeces separated by
    // a hyphen).
    if (idParts.length === 2) {
      var blockHourString = idParts[1];
  
      // Log the ID parts for debugging
      console.log("ID Parts:", idParts);
      console.log("blockHourString:", blockHourString);
  
      // Parse the blockHourString to an integer. This converts the string value stored within the blockHourString into an integer.
      // Function was breaking before I think because string was not being converted into an integer so values weren't being compared
      // appropriately between currentHour and blockhour.
      var blockHour = parseInt(blockHourString);
  
      // Log the parsed blockHour for debugging
      console.log("blockHour:", blockHour);
  
      // Check if blockHour is a valid number, added as an additional check due to unexpected errors generated during testing.
      if (!isNaN(blockHour)) {

        // Creates variable to store retrieved user input from local storage using the time block ID as a key.
        var retrieveUserInput = localStorage.getItem("hour-" + blockHour);
  
        // Set the value of the textarea, within the relevant time-block-container, to the retrieved user input.
        $(this).find(".description").val(retrieveUserInput);
        
         // Constructs logic argument to color-code each time-block-container based on comparison between blockHour and
         // currentHour values
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      } else {
        // Log an error or handle the case where blockHour is not a valid number
        console.error("Invalid blockHour:", blockHourString);
      }
    } else {
      // Log an error or handle the case where the ID structure is unexpected
      console.error("Unexpected ID structure:", idParts);
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


    // Defines variables that select the #currentDay from the HTML file (currentDayElement).

    var currentDayElement = $("#currentDay");

    // Gets the current date and time using day.js() and formats it to a string in the 'LLLL' style.

    var nowVariable = dayjs().format('dddd, MMMM D, YYYY h:mm A	');

    // Selects the #currentDay element from the HTML file, and generates text based on the logic run within the 
    // nowVariable

    currentDayElement.text(nowVariable);

    console.log(nowVariable);
});

