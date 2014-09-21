
$(document).ready(function () {
		
		
	//WTH MAKE THIS GO, YO	
	var feed = $.get("https://spreadsheets.google.com/feeds/list/1m_7OD_z6sUBCy1HLv1ev0qzO3lqLamWmSu2mR-Sr5cE/default/public/values?alt=json");
	
	console.log(jQuery.parseJSON(feed));


	//GET FEED AS OBJECT
	
	//ITERATE THROUGH EACH ROW OF TABLE & PUBLISH ACCORDING TO ideasTemplate on ideas.html
	
});
	
