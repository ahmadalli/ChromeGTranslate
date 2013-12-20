String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
    });
};

function OpenURL(url, tab)
{
	
	if(config.tab=="true")
	{
		var id = tab.index +1;
		chrome.tabs.create({'url': url, 'index': id});
	}
	else
	{
		// chrome.webRequest.onBeforeSendHeaders.addListener(
		// function(info) {
			// // Replace the User-Agent header
			// var headers = info.requestHeaders;
			// headers.forEach(function(header, i) {
				// if (header.name.toLowerCase() == 'user-agent') { 
					// header.value = 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10';
				// }
			// });  
			// return {requestHeaders: headers};
		// },
		// // Request filter
		// {
			// // Modify the headers for these pages
			// urls: [
				// "*://translate.google.com/*",
			// ],
			// // In the main window and frames
			// types: ["main_frame", "sub_frame"]
		// },
		// ["blocking", "requestHeaders"]
		// );
		newwindow = window.open(url, "_blank", "resizable=yes, scrollbars=yes, titlebar=yes, location=yes");
	}
}

function clickEvent(info, tab) {
    update();
    var url = "http://translate.google.com/#auto/{0}/{1}".format(config.lang, info.selectionText);
	OpenURL(url, tab);
	trackEvent();
}
var id = chrome.contextMenus.create({
    "title": "Translate", "contexts": ["selection"],
    "onclick": clickEvent
});

function trackEvent() {
    _gaq.push(['_trackEvent', "Translate", 'Translate']);
};