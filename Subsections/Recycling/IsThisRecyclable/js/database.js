$( function() {
var data =
	{url: "json/database.json",
	listLocation: "items",
	getValue: "name",
	template: {
		type: "description",
		fields: {
			description: "recyclable"
		}
	},
	list: {
		match: {
			enabled: true
		},
		onSelectItemEvent: function () {
			var idNum = $("#searchIcon").getSelectedItemData().itemNum;
			var tr = $("tbody tr");
			//console.log(tr);
			//var td = table.$("td");
		//	var item = td.attr("id");

			for(var i = 0; i < tr.length; i++){
				if (tr[i].id != idNum) {
					tr[i].style.display = "none";
				}
			}
		}
	}
	};

$('#searchIcon').easyAutocomplete(data);
});
