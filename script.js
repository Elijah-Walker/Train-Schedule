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

// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

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