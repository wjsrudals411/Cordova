$(document).ready( function() {  
	$('#btnLoad2').click( function() {		
		$.getJSON('ajax-info.json', function(jsonData) {
			var tagList = "";
			$.each(jsonData.info, function() {
				tagList += "<li>" + this.기능 + "</li>";
			});
			$('#listArea').empty();				
			$('#listArea').append(tagList);
			$('#listArea').listview('refresh');
		});
	});
});	
