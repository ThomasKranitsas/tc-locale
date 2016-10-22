var rate = 1; // Default exchange rate
var payments = document.getElementsByClassName('valueR'); // load all payment values
var selectedCurrency = 'USD';

    var currencies = {
      "USD":{
        "prefix": "$ ",
        "suffix": ""
      },
      "EUR":{
        "prefix":"",
        "suffix":" &euro;"
      }
    };
chrome.storage.sync.get('currency', function(option){
  selectedCurrency = option.currency;
    if(selectedCurrency !== 'USD'){
      // Make an async call to retrieve the latests exchange rates
      httpGetAsync("https://api.fixer.io/latest?base=USD", function(data) {
        rate = data.rates[selectedCurrency];
        // Modify all payments in DOM
        for(var i=0; i < payments.length; i++){
          var newInnerHTML = document.createElement('div');

          var usdText = document.createElement('div');
          usdText.className += ' usdValue';
          usdText.innerHTML = payments[i].innerHTML;
          newInnerHTML.appendChild(usdText);

          var eurText = document.createElement('div');
          eurText.className += ' eurValue';
          eurText.innerHTML = convert(payments[i].innerHTML);
          newInnerHTML.appendChild(eurText);

          payments[i].innerHTML = "";
          payments[i].appendChild(newInnerHTML);

          payments[i].parentElement.children[1].className += ' payment-type';
          payments[i].parentElement.children[5].className += ' realease-date';
          payments[i].parentElement.children[6].className += ' payment-date';
          payments[i].parentElement.children[4].children[0].className += ' status-custom';
        }
      });
    }

});
// Convert USD value to EUR
function convert (i) {
  var t = i.split('.').join('').split('$ ').join('').split(',').join('.');
  var val = parseFloat(t) * rate;
  chrome.storage.sync.get('payoneer', function(option){
    if(option.payoneer === true){
      val -= (val * .02);
    }
  });
  return currencies[selectedCurrency].prefix + val.toFixed(1) + currencies[selectedCurrency].suffix;
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
