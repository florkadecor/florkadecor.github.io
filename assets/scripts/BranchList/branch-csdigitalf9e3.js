"use strict";

$(document).ready(function(){
	$(document).ready(function(){
	  $("#searchText").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
	    $("#tableOne tbody tr").filter(function() {
	      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
	    });
	  });
	});
	
      function populateTable() {
		$.get("https://www.bca.co.id/-/Media/Files/Branch-Temp/CABANG_CSDIGITAL?"+ (new Date()).getTime(), function (data) {
			var lineByline = data.split('\n');
			var columnByCol;
			var tableContent="";
			$.each(lineByline, function (key, value) {
				
				if(key==0){
					tableContent += '<thead><tr>';
				}
				else{
					tableContent += '<tr>';
				}
				
				columnByCol = value.split('\t');
				$.each(columnByCol, function(key1, value_){
					if(key1==0 && key>0){
						tableContent += '<td>' + value_.replace(/["?]/g,' ') + '</td>';
					}
					else{
						tableContent += '<td>' + value_.replace(/["?]/g,' ') + '</td>';
					}
					key1 = key1 +1;
				});
				
				tableContent += '</tr>';
				if(key==0){
					tableContent += '</thead>';
				}
				else{
					tableContent = tableContent;
				}
				key = key + 1;
			});
				//tableContent += '</table>';
				$("#tableOne").html(tableContent);
		});
	};
	
	populateTable();
});