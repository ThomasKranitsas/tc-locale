var button = document.createElement('button');
button.innerHTML = 'Use local date format';
button.className += ' convert-dates';
button.setAttribute("id", "convertDatesBtn");
button.addEventListener('click', function() { convertDates(); });
document.getElementById('main').appendChild(button);

function convertDates(){
  document.getElementById("convertDatesBtn").remove();
  var deadlines = document.getElementsByClassName('allDeadlineNextBoxContent')[0];

  for(var i=0; i<deadlines.children.length; i++){
    deadlines.children[i].children[1].innerHTML = getDate(new Date(deadlines.children[i].children[1].innerHTML));
  }
}

function getDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()] + ' ' + date.getDate() + ', '
  + date.getFullYear() + ' ' + twoDigitNum(date.getHours()) + ':' + twoDigitNum(date.getMinutes());
}

function twoDigitNum(num){
  return num > 9 ? num : '0'+num;
}
