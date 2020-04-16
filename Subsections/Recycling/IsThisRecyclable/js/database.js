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

			for(var i = 0; i < tr.length; i++){
				if (tr[i].id != idNum) {
					tr[i].style.display = "none";
				}
				if (tr[i].style.display == "none" && tr[i].id == idNum) {
					tr[i].style.display =="block";
				}
			}
		}
	}
	};

$('#searchIcon').easyAutocomplete(data);
});
