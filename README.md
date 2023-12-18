# Work Day Scheduler Starter Code

PROJECT DESCRIPTION:

Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

The starter code uses the Day.jsLinks to an external site. library to work with date and time, but feel free to use a different JavaScript solution to handle this functionality.

SCREENSHOT:
![Screenshot of Work Day Scheduler App](<Screenshot 2023-12-17 at 11.25.56 PM.png>)

USER STORY:

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

ACCEPTANCE CRITERIA:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours of 9am to 5pm
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

REFERENCES:

Utilized chatGPT and bootcamp Xpert Learning Assistant to assist in troubleshooting with $(".time-block-container").each(function() {
	https://bootcampspot.instructure.com/courses/4644/external_tools/313
	https://openai.com/chatgpt

Github repository source for starter code:
	https://github.com/coding-boot-camp/crispy-octo-meme

Source for Project Description, User Story, and Acceptance Criteria:
	https://bootcampspot.instructure.com/courses/4644/assignments/65727?module_item_id=1127542

Day.js library source code:
	https://day.js.org/

Reference for jQuery DOM Selectors:
	https://www.w3schools.com/jquery/jquery_selectors.asp

jQuery cheatsheet:
	https://htmlcheatsheet.com/jquery/

jQuery text method () reference:
	https://www.w3schools.com/jquery/html_text.asp

Day.js formatting and commands reference:
	https://day.js.org/docs/en/
	https://day.js.org/docs/en/display/format

localizedFormat plug-in for day.js API, for formatting the current date in the desired way:
	https://day.js.org/docs/en/plugin/localized-format

Referenced for using the require () method:
	https://www.w3schools.com/nodejs/nodejs_modules.asp

Reference for jquery use of each() method:	
	https://api.jquery.com/each/

Using this within jQuery reference:
	https://www.w3schools.com/js/js_this.asp

Using parseInt () within jQuery reference:
	https://www.w3schools.com/jsref/jsref_parseint.asp
	
Referenced for parseInt () on a string:
	https://www.shecodes.io/athena/60744-what-is-parseint-in-javascript

Referenced for using split () in jQuery:
	https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20splits,string%20is%20split%20between%20words.

Using addClass() in jQuery reference:
	https://api.jquery.com/addClass/

Referenced for using localStorage:
	https://www.w3schools.com/jsref/prop_win_localstorage.asp
	https://www.w3schools.com/js/js_api_web_storage.asp
	https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

Using the ready() in jQuery to run a function when the DOM is finished loading:
	https://api.jquery.com/ready/#:~:text=The%20.,event%20handlers%20and%20initialize%20plugins.

Referenced for utilizing ‘length’ in Javascript
	https://www.w3schools.com/jsref/jsref_length_string.asp

Referenced for understanding NaN value:
	https://www.w3schools.com/jsref/jsref_number_nan.asp

Writing a console error just in case something I don’t understand breaks I can see the error reference:
	https://www.w3schools.com/jsref/met_console_error.asp

Utilizing localStorage() reference:
	https://www.w3schools.com/jsref/prop_win_localstorage.asp

Utilizing eventListener reference:
	https://www.w3schools.com/js/js_htmldom_eventlistener.asp

Traversing the DOM with jQuery:
	https://api.jquery.com/category/traversing/

Getting and Setting items using localStorage reference:
	https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/#:~:text=setItem()%20%3A%20This%20method%20is,delete%20all%20instances%20of%20localStorage.
	https://blog.logrocket.com/localstorage-javascript-complete-guide/#:~:text=getItem()%20allows%20you%20to,the%20value%20as%20a%20string.
