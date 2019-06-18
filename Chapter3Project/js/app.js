//main fuction for the clock
function clock() {
var fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
//adds 0 if a single digit
if (hours < 10) {
  hours = "0" + hours;
}
else if (mins < 10) {
  mins = "0" + mins;
}
else if (secs < 10) {
  secs = "0" + secs;
}
//sets script to html id tags
document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('seconds').innerHTML = ":" + secs;
}
//updates clock every second
setInterval(clock,100);
