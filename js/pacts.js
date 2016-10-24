var rate = 1; // Default exchange rate
var payments = document.getElementsByClassName('valueR'); // load all payment values
var selectedCurrency = 'USD';
var substactPayoneerFees = false;
var pact = {};

chrome.storage.sync.get('pact', function(option){
  pact = option.pact;
  selectedCurrency = pact.currency;
  if(selectedCurrency !== 'USD'){
    if (pact.customRate) {
      rate = pact.rate;
      modifyPayments();
    } else {
      // Make an async call to retrieve the latests exchange rates
      httpGetAsync("https://api.fixer.io/latest?base=USD", function(data) {
        rate = data.rates[selectedCurrency];
        modifyPayments();
      });
    }
  }

});

function modifyPayments () {
  // Modify all payments in DOM
  for(var i=0; i < payments.length; i++){
    var newInnerHTML = document.createElement('div');

    var usdText = document.createElement('div');
    usdText.className += ' usdValue';
    usdText.innerHTML = payments[i].innerHTML;
    newInnerHTML.appendChild(usdText);

    var eurText = document.createElement('div');
    eurText.className += ' cusCurValue';
    eurText.innerHTML = convert(payments[i].innerHTML);
    newInnerHTML.appendChild(eurText);

    payments[i].innerHTML = "";
    payments[i].appendChild(newInnerHTML);

    payments[i].parentElement.children[1].className += ' payment-type';
    payments[i].parentElement.children[5].className += ' realease-date';
    payments[i].parentElement.children[6].className += ' payment-date';
    payments[i].parentElement.children[4].children[0].className += ' status-custom';
  }
}

// Convert USD value to EUR
function convert (i) {
  var t = i.split('$').join('').substring(0,i.length-3).split(',').join('').split('.').join('');
  var val = parseFloat(t) * rate;
  if(substactPayoneerFees){
    val -= (val * .02);
  }
  val -= pact.fees;
  return pact.prefix + val.toFixed(1) + pact.suffix;
}

// Retrieve excange rates
function httpGetAsync(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    callback(JSON.parse(xmlHttp.responseText));
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}
