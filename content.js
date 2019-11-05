chrome.browserAction.onClicked.addListener(function(tab) {

  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, {file: "jquery-3.4.1.min.js"});
  chrome.tabs.executeScript(null, {file: "copy-data.js"});

});