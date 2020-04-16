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
			var id = $("#searchIcon").getSelectedItemData().itemNum;
			var table = $("tbody");
			var td = table.getElementsByTagName("td");
		//	var item = td.attr("id");

			for(var i = 0; i < td.length; i++){
				if (td[i]].attr("id") != id) {
					td[i].style.display = "none";
				}
			}
		}
	}
	};

$('#searchIcon').easyAutocomplete(data);
});
