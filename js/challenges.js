var button = document.createElement('button');
button.innerHTML = 'Use local date format';
button.className += ' convert-dates';
button.setAttribute("id", "convertDatesBtn");
button.addEventListener('click', function() { convertDates(); });
document.getElementById('main').appendChild(button);

function convertDates(){
    document.getElementById("convertDatesBtn").remove();
    var vStartDates = document.getElementsByClassName('vStartDate');
    var vEndRounds = document.getElementsByClassName('vEndRound');
    var vEndDate = document.getElementsByClassName('vEndDate');

    for(var i=0; i<vStartDates.length; i++){
        vStartDates[i].innerHTML = getDate(new Date(vStartDates[i].innerHTML));
    }

    for(var i=0; i<vEndRounds.length; i++){
        vEndRounds[i].innerHTML = getDate(new Date(vEndRounds[i].innerHTML));
    }

    for(var i=0; i<vEndDate.length; i++){
        vEndDate[i].innerHTML = getDate(new Date(vEndDate[i].innerHTML));
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
