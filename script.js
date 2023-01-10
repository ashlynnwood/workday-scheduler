// Global Variables
var saveBtn = $('.saveBtn');

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
  
  saveBtn.on('click', function () {
    // Get the user input in text area
    var workInput = $(this).siblings('.description').val();
    // Get the hour timeblock for input
    var hour = $(this).parent().attr('id');
    
    // Save in local storage
    localStorage.setItem(hour, JSON.stringify(workInput));
  
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  function colorTime() {
    var currentHour = dayjs().hour();
    // Check to see if accurately grabbing current hour
    console.log(currentHour);
    $('.time-block').each(function() {
      var timeBlock = parseInt($(this).attr('id'));
      // Check to see if accurately grabbing timeblock
        console.log(timeBlock);
      if (currentHour > timeBlock) {
        $(this).addClass('past').removeClass('present future');
      
      } else if (currentHour < timeBlock) {
        $(this).addClass('future').removeClass('present past');
      
      } else {
        $(this).addClass('present').removeClass('past future');
      }
    });
  
  }
  
  // Call colortime function
  colorTime();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
 
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D[th]'))
});
