var page = window.location.href;
var status;

chrome.storage.sync.get('status', function (result) {
    status = result.status;
	
	if(status == "play"){
		if(page.includes("shining-fates")){
			var stock = document.getElementsByClassName("js-stockStatus")[0].innerHTML;
			var recaptcha = document.getElementsByClassName("headline-inner")[0].innerHTML;

			if(stock.includes("Out Of Stock")){
				document.location.reload(true);	
			} else if (recaptcha.includes("Additional security check is required")){
				chrome.runtime.sendMessage({type: "alertUser"});
			} else {
				chrome.runtime.sendMessage({type: "alertUser"});
			}
		}
	}
});