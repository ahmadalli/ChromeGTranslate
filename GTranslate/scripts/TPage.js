    function ChangeUrl(url,id)
    {
    	if(!(typeof TPageAlive == 'function')) { 
    		chrome.tabs.create({ 'url': 'TPage.html', 'index': id });
    	}
    	TPageChangeUrl(url);
    }