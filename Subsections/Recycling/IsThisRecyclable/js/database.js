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
			var tr = $("#resultsHere tr");
			for(var i = 0; i < tr.length; i++){
				if (tr[i].id != idNum) { // if id doesn't match, hide it
					tr[i].style.display = "none";
				}
				if (tr[i].id == idNum) { // if id does match, make sure its display prop is not none
					tr[i].style.display = "";
				}
			}
		}
	}
	};

$('#searchIcon').easyAutocomplete(data);
});
