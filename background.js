chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch(message.type) {
    case "alertUser":
      	new Audio('sound/file.mp3').play();
      	chrome.tabs.update(sender.tab.id, {active: true});
      	break;
  }
});