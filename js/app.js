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


//submit info for contact page
function submitInfo() {
  var amountA = document.getElementById("numberinput").value;//Getting value from number input
  var amountB = "$" + (amountA * 125);//doing the math for caculation the amount a sponser cost
  .innerHTML = amountB;//attempting to display var amountB
}
document.getElementById("submitOne") .addEventListener("click", submitInfo, false); //added a event listener
document.querySelector('.results').innerHTML = amountB;//another attempt to display

//validator for contact us info on contact page
var name = document.getElementById('name');
var email = document.getElementById('email');
var form = document.getElementById('textarea');
var errorElement = document.getElementById('error');
var thanksElements = document.getElementById('thanks');

form.addEventListener('submit', (e)) {
  let messages = []
  if (name.value === '' || name.value == null) {
    message.push('Name is required');
  }
  if (email.value === '' || email.value == null) {
    message.push('email is required');
  }
  if (email.value <= 1) {
    messages.push('email is required');
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(', ');
  }
  else if () {
    alert("thank You!");
  }
});
