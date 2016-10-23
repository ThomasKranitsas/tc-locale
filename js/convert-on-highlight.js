var popup = document.createElement('div');
popup.innerHTML = 'Date in your local timezone: ';
popup.className = 'coverted-date-popup popup-hidden';
popup.setAttribute("id", "convertedDatePopup");

var localDate = document.createElement('span');
localDate.innerHTML = ' ';
popup.appendChild(localDate);

document.getElementsByTagName('body')[0].appendChild(popup);

var mouseX = 0;
var mouseY = 0;

function convertHighlightedDate(e){
  var selection = getSelectionText().split('at').join(' ').split('.').join('/').split(',').join(' ');
  var convertedDate = Date.parse(selection);
  if(selection !== '' && convertedDate + '' !== 'NaN'){
    popup.className = 'coverted-date-popup';
    popup.style.top = (e.clientY + 20) + 'px';
    popup.style.left = mouseX + 'px';
    localDate.innerHTML = getDate(new Date(convertedDate));
  }else{
    hidePopup();
  }
}

function hidePopup() {
  popup.className = 'coverted-date-popup popup-hidden';
}

function getDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()] + ' ' + date.getDate() + ', '
  + date.getFullYear() + ' ' + twoDigitNum(date.getHours()) + ':' + twoDigitNum(date.getMinutes());
}

function twoDigitNum(num){
  return num > 9 ? num : '0'+num;
}

function getSelectionText() {
  var text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text;
  }
  return text;
}

document.addEventListener('mouseup', function(e) {
  if(e.clientX < mouseX) {
    mouseX = e.clientX;
  }
  convertHighlightedDate(e);
});
document.addEventListener('mousedown', function(e) {
  mouseX = e.clientX;
  hidePopup();
});
document.addEventListener('mousewheel', function() {
  hidePopup();
});
