document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('submit');
    link.addEventListener('click', function() {
        var status;
        var switcher = document.getElementById('switcher');
        var updateStatus = document.getElementById("extensionStatus");

        if(switcher.checked == true) {
            status = "paused";
        } else {
            status = "play";
        }

        chrome.storage.sync.set({'status': status});

        chrome.storage.sync.get('status', function (result) {
            status = result.status;
            updateStatus.innerHTML = "<span class=" + status + ">Current Status: " + status + "</span>";

            if(status == "paused") {
                switcher.checked = true;
            }
        });
    });
});

/*
        var backgroundPage = chrome.runtime.getBackgroundPage();
        backgroundPage.savePopup();
*/