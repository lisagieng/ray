$( function() {
var data =
	{url: "json/database-2.json",
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
