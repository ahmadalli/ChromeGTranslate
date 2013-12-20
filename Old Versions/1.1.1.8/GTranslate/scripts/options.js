$(function () {
    var langs = ['Afrikaans', 'Albanian', 'Arabic', 'Azerbaijani', 'Basque', 'Bengali', 'Belarusian', 'Bulgarian', 'Catalan', 'Chinese Simplified', 'Chinese Traditional', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Esperanto', 'Estonian', 'Filipino', 'Finnish', 'French', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati', 'Haitian Creole', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Kannada', 'Korean', 'Latin', 'Latvian', 'Lithuanian', 'Macedonian', 'Malay', 'Maltese', 'Norwegian', 'Persian', 'Polish', 'Portuguese', 'Romanian', 'Russian', 'Serbian', 'Slovak', 'Slovenian', 'Spanish', 'Swahili', 'Swedish', 'Tamil', 'Telugu', 'Thai', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Welsh', 'Yiddish'];
    var codes = ['af', 'sq', 'ar', 'az', 'eu', 'bn', 'be', 'bg', 'ca', 'zh-CN', 'zh-TW', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'tl', 'fi', 'fr', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'iw', 'hi', 'hu', 'is', 'id', 'ga', 'it', 'ja', 'kn', 'ko', 'la', 'lv', 'lt', 'mk', 'ms', 'mt', 'no', 'fa', 'pl', 'pt', 'ro', 'ru', 'sr', 'sk', 'sl', 'es', 'sw', 'sv', 'ta', 'te', 'th', 'tr', 'uk', 'ur', 'vi', 'cy', 'yi'];
    for (var i = 0; i < langs.length; i++) {
        var s = '<option value="{0}" >{1}</option>'.format(codes[i], langs[i]);
        $("#combobox").html($("#combobox").html() + s);
    }
	
	$("#combobox").val(config.lang);
	
	if(config.tab=="true"){
		$("#tab").attr("checked", "checked");
	}

	function CBSelect(){
		ChangeLang($("#combobox").val());
		setTimeout(function(){$.prompt("Well done!<br/> Configurations saved!",{timeout: 1000,buttons: {}});},30);
        
	}
	
	$( "#combobox" ).combobox({
		selected: function( event, ui ) {
			CBSelect();  
		}
	});
	
	$("#tab").click(function(){
		ChangeTabOption(this.checked);
		setTimeout(function(){$.prompt("Well done!<br/> Configurations saved!",{timeout: 1000,buttons: {}});},30);
	});
});