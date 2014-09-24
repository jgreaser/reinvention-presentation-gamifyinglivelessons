
$(document).ready(function () {
		
		var arrayHeaders = [];
		
	//WTH MAKE THIS GO, YO	
	var feed = $.get("https://spreadsheets.google.com/feeds/list/1m_7OD_z6sUBCy1HLv1ev0qzO3lqLamWmSu2mR-Sr5cE/default/public/values?alt=json");
		

$.getJSON("https://spreadsheets.google.com/feeds/list/1m_7OD_z6sUBCy1HLv1ev0qzO3lqLamWmSu2mR-Sr5cE/default/public/values?alt=json",
    function(data, textStatus, jqXHR)
    {
		
		var searchText = "Victory Points";
		var searchSuccess = true;
		
        var entries = data['feed']['entry'];
		
		
		for(var i=0; entries.length; i++){
        
		
				buildView();
							
		}
		
		function buildView(){
			
			$('#navlist').append("<li><a href='#"+i+"'>"+entries[i]['gsx$victorymechanic']['$t']+" and "+entries[i]['gsx$playmechanic']['$t'] + " = " + entries[i]['gsx$topic']['$t'] + "</a></li>");
			var entryNumber = i+1;
		$('#bigContainer').append("<div class='row' class='idea'><a id="+i+"></a><h3>#" + entryNumber +" " +entries[i]['gsx$victorymechanic']['$t']+" and "+entries[i]['gsx$playmechanic']['$t'] + " = " + entries[i]['gsx$topic']['$t'] + "</h3><div class='col-md-4'><p>Some details:</p><ul><li>Purpose: " + entries[i]['gsx$purpose']['$t'] + " </li><li>Kind of fun: " + entries[i]['gsx$kindoffun']['$t'] + "</li><li>Subject: " + entries[i]['gsx$subject']['$t'] + "</li><li>Grades: " + entries[i]['gsx$grades']['$t'] + "</li></ul></div><div class='col-md-8'><p>Description:</p><p>" + entries[i]['gsx$gamedescription']['$t'] + "</p></div></div><a href='#top'>back to top</a><hr />");
		}
    });	
});
	
