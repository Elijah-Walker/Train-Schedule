// Initialize Firebase
var config = {
    apiKey: "AIzaSyCNMi9dSO-LOWUIiVmPVDUbK-oj-jxrrDg",
    authDomain: "train-schedule-ece28.firebaseapp.com",
    databaseURL: "https://train-schedule-ece28.firebaseio.com",
    projectId: "train-schedule-ece28",
    storageBucket: "",
    messagingSenderId: "1033520623174"
  };
  firebase.initializeApp(config);


// Form Submit

// Capture Button Click
$("#inputName").on("click", function(event) {
// prevent page from refreshing when form tries to submit itself
event.preventDefault();

// Capture user inputs and store them into variables
var name = $("#inputName").val().trim();
var destination = $("#inputDestination").val().trim();
var firstTime = $("#inputTime").val().trim();
var frequency = $("#inputFrequency").val().trim();

// Console log each of the user inputs to confirm we are receiving them
console.log(name);
console.log(destination);
console.log(firstTime);
console.log(frequency);

// Replaces the content in the "recent-member" div with the new info
$("#inputName").text(name);
$("#inputDestination").text(destination);
$("#inputTime").text(firstTime);
$("#inputFrequency").text(frequency);

// Clear localStorage
localStorage.clear();

// Store all content into localStorage
localStorage.setItem("name", name);
localStorage.setItem("destination", destination);
localStorage.setItem("time", time);
localStorage.setItem("frequency", frequency);
});

// By default display the content from localStorage
// $("#name-display").text(localStorage.getItem("name"));
// $("#email-display").text(localStorage.getItem("email"));
// $("#age-display").text(localStorage.getItem("age"));
// $("#comment-display").text(localStorage.getItem("comment"));


// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));