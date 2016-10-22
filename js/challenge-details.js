var button = document.createElement('button');
button.innerHTML = 'Use local date format';
button.className += ' convert-dates';
button.setAttribute("id", "convertDatesBtn");
button.addEventListener('click', function() { convertDates(); });
document.getElementById('main').appendChild(button);

var OR = document.createElement('p');
var ORLink = document.createElement('a');
ORLink.innerHTML = 'View in Online Review'
ORLink.setAttribute('href', 'https://software.topcoder.com/review/actions/ViewProjectDetails?pid=' + getChallengeId());
OR.appendChild(ORLink);
var contestLink = document.getElementsByClassName('contestLinks')[1].children[1];
contestLink.appendChild(OR);

function convertDates(){
  document.getElementById("convertDatesBtn").remove();
  var deadlines = document.getElementsByClassName('allDeadlineNextBoxContent')[0];
  var regDates = document.getElementsByClassName('regDateColumn');
  var subDates = document.getElementsByClassName('subDateColumn');

  for(var i=0; i<deadlines.children.length; i++){
    deadlines.children[i].children[1].innerHTML = getDate(new Date(deadlines.children[i].children[1].innerHTML));
  }

  for(var i=1; i<regDates.length; i++){
    regDates[i].innerHTML = getDate(new Date(regDates[i].innerHTML));
  }

  for(var i=1; i<subDates.length; i++){
    if(subDates[i].innerHTML !== '--'){
      subDates[i].innerHTML = getDate(new Date(subDates[i].innerHTML));
    }
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

function getChallengeId() {
  var metas = document.getElementsByTagName('meta');

  for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("property") == "og:url") {
      return metas[i].getAttribute("content").split('/')[4];
    }
  }

  return "";
}
