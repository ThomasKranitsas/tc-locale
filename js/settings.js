// Saves settings to chrome.storage
function save_settings() {
  var currency = document.getElementById('currency').value;
  var localDates = document.getElementById('localDates').checked;
  var payoneer = document.getElementById('payoneer').checked;
  chrome.storage.sync.set({
    currency: currency,
    localDates: localDates,
    payoneer: payoneer
  }, function() {
    // Update status to let user know settings were saved.
    var status = document.getElementById('status');
    status.textContent = 'Settings updated!';
    // Hide the status text
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restore default settings
function restore_settings() {
  // Use default value currency = 'USD' and localDates = false.
  chrome.storage.sync.get({
    currency: 'USD',
    localDates: false,
    payoneer: false
  }, function(items) {
    document.getElementById('currency').value = items.favoriteColor;
    document.getElementById('localDates').checked = items.likesColor;
    document.getElementById('payoneer').checked = items.payoneer;
  });
}

//document.addEventListener('DOMContentLoaded', restore_settings);
document.getElementById('save').addEventListener('click', save_settings);
document.getElementById('restore').addEventListener('click', restore_settings);
