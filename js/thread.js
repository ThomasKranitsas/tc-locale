var button = document.createElement('button');
button.innerHTML = 'Use local date format';
button.className += ' convert-dates';
button.setAttribute("id", "convertDatesBtn");
button.addEventListener('click', function() { convertDatesFromThread(); });
document.getElementsByTagName('body')[0].appendChild(button);

function convertDatesFromThread(){
  document.getElementById("convertDatesBtn").remove();
  var dates = document.getElementsByClassName('rtHeader');

  for(var i=0; i<dates.length; i++){
    var dateIndex = (dates[i].children[0].children.length > 1) ? 1 : 0;
    dates[i].children[0].children[dateIndex].innerHTML = dates[i].children[0].children[dateIndex].innerHTML.split('at').join('');
    dates[i].children[0].children[dateIndex].innerHTML = getDate(new Date(dates[i].children[0].children[dateIndex].innerHTML));
  }
}

function getDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()-1] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', '
  + date.getFullYear() + ' at ' + twoDigitNum(date.getHours()) + ':' + twoDigitNum(date.getMinutes()) + " (Local time)";
}

function twoDigitNum(num){
  return num > 9 ? num : '0'+num;
}
