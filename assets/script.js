// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(window).on("load", function() {
  getLocalMeeting();
});
$(button).on("click", function(event)
{
    event.preventDefault();
    var meeting = document.querySelector(".description").value;

    setLocalMeeting(meeting);
});

function setLocalMeeting(valuePassed)
{
    var info = localStorage.getItem("meeting");

    var meetingSearch = [];
    meetingSearch.push(info);
    localStorage.setItem("meeting", JSON.stringify(meetingSearch));
    console.log(meetingSearch + " saved.");

    info = valuePassed;
    localStorage.setItem("meeting", info);

    if (info.indexOf(valuePassed) === -1)
    {
        info = info + ',' + valuePassed;
        localStorage.setItem("meeting", info);
    }
}

function getLocalMeeting()
{ 
    //var savedFood = JSON.parse(localStorage.getItem("food"));
    var savedMeeting = localStorage.getItem("meeting");
    var saveArr = [];

    savedMeeting.trim();
    saveArr = savedMeeting.split(',');

    for (var i = 0; i < saveArr.length; i++)
    {
        appendFoodHistory(saveArr[i]);
    }
}
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

