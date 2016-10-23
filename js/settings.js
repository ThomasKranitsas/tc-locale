// Saves settings to chrome.storage
function save_settings() {
  var currency = document.getElementById('currency').value;
  var fees = document.getElementById('fees').value;
  var customRate = document.getElementById('customRate').checked;
  var payoneer = document.getElementById('payoneer').checked;
  var prefix = document.getElementById('prefix').value;
  var suffix = document.getElementById('suffix').value;
  var rate = document.getElementById('rate').value;
  chrome.storage.sync.set({
    pact:{
      currency,
      fees,
      customRate,
      payoneer,
      prefix,
      suffix,
      rate
    }
  }, function() {
    // Update status to let user know settings were saved.
    var status = document.getElementById('status');
    status.className = 'alert alert-info';
    // Hide the status text
    setTimeout(function() {
    status.className = 'hidden';
    }, 750);
  });
}

chrome.storage.sync.get('pact', function(option){
    document.getElementById('currency').value = option.pact.currency;
    document.getElementById('fees').value = option.pact.fees;
    document.getElementById('customRate').checked = option.pact.customRate;
    document.getElementById('payoneer').checked = option.pact.payoneer;
    document.getElementById('prefix').value = option.pact.prefix;
    document.getElementById('suffix').value = option.pact.suffix;
    document.getElementById('rate').value = option.pact.rate;
});

document.getElementById('save').addEventListener('click', save_settings);
