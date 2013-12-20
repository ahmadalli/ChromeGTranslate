String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
    });
};

function update() {
    config = { 'lang': localStorage["lang"],'tab': localStorage["tab"]};
}

var config;
if (localStorage["lang"] == null) {
    localStorage.setItem("lang", "en");
}
if (localStorage["tab"] == null) {
    localStorage.setItem("tab", true);
}

update();

if (localStorage["ver1118updated"] == null) {
	var notification = webkitNotifications.createNotification(
		'icon.png',  // icon url - can be relative
		'GTranslate is updated!',  // notification title
		'The SPAM Toolbar is removed now. Sorry for that! see the changelog in option page'  // notification body text
	);
	notification.show();
    localStorage.setItem("ver1118updated", true);
}

function ChangeLang(newL) {
    localStorage.setItem("lang", newL);
    update();
}

function ChangeTabOption(tab)
{
	localStorage.setItem("tab", tab);
	update();
}


