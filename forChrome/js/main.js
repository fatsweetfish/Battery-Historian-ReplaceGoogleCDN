chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('ajax.googleapis.com', 'ajax.loli.net');
		url = url.replace('fonts.googleapis.com','fonts.loli.net');
		url = url.replace('www.google.com/jsapi','www.google.cn/jsapi');
		url = url.replace('www.google.com/uds','www.google.cn/uds');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
	    "*://fonts.googleapis.com/*",
	    "*://www.google.com/jsapi*",
	    "*://www.google.com/uds/*"
        ]
    },
    ["blocking"]
);
