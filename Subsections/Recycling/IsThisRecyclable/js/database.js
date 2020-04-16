$( function() {
var data =
	{url: "json/database.json",
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
		}
	}
	};

$('#searchIcon').easyAutocomplete(data);
});
