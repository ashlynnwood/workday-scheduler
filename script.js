// Global Variables
var saveBtn = $('.saveBtn');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Listener for click events on the save button
  saveBtn.on('click', function () {
    // Get the user input in text area
    var workInput = $(this).siblings('.description').val();
    // Get the hour timeblock for input
    var hour = $(this).parent().attr('id');
    
    // Save in local storage
    localStorage.setItem(hour, JSON.stringify(workInput));
  
  });

  
  // Apply past, present, or future class depending on current Hour
  function colorTime() {
    // Get the current hour
    var currentHour = dayjs().hour();
    // Check to see if accurately grabbing current hour
    console.log(currentHour);

    $('.time-block').each(function() {
      var timeBlock = parseInt($(this).attr('id'));
      // Check to see if accurately grabbing timeblock
        console.log(timeBlock);

      // Compare current hour to timeblock
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

  // Get user input that was saved in localStorage
  $('.description').each(function() {
    var storedHour = $(this).attr('data-hour');
    var savedCode = localStorage.getItem(storedHour); 
    $(this).text(JSON.parse(savedCode));

    // Log the tasks for the workday on console
  console.log('At ' + storedHour + ': ' + savedCode);
  })

  
 
  // Display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM Do'))
});
