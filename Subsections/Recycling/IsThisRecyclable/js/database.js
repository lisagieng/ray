$( function() {
var data = [
	{
		"name": "water bottle",
		"image": "img/WaterBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "Sometimes (if plastic is type #1 or #5)",
		"moreInfo": "Can be reused if type #2, #4, or #5. Do NOT reuse if type #1. Number can usually be found on bottom of the bottle."
	},

	{
		"name": "plastic",
		"image": "img/Plastic.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "sometimes",
		"moreInfo": "If #1-7 and clean, it can be recycled. Not styrofoam. No plastic bags/wrappers."
	},

	{
		"name": "metal",
		"image": "img/Metal.png",
		"commonlyMadeOf": "metal",
		"recyclable": "sometimes",
		"moreInfo": "Aluminum trays, plates, and foils can be recycled. Must be clean."
	},

	{
		"name": "glass",
		"image": "img/Glass.png",
		"commonlyMadeOf": "glass",
		"recyclable": "Sometimes",
		"moreInfo": "(Clean) jars and bottles can be recycled. No dishes/windows/ceramics."
	},

	{
		"name": "paper",
		"image": "img/Paper.png",
		"commonlyMadeOf": "paper",
		"recyclable": "Yes",
		"moreInfo": "No paper plates, cups, or napkins"
	},

	{
		"name": "rubber",
		"image": "img/Rubber.png",
		"commonlyMadeOf": "rubber",
		"recyclable": "no",
		"moreInfo": "When possible, reuse rubber instead of throwing it out (such as by making rubber compost bins)."
	},

	{
		"name": "cardboard",
		"image": "img/Cardboard.png",
		"commonlyMadeOf": "paper",
		"recyclable": "Yes",
		"moreInfo": "Staples, tape, and labels are okay. No food product."
	},

	{
		"name": "plastic bag",
		"image": "img/PlasticBag.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": "Reuse if possible, either as trash bags or on subsequent trips to the store! Alternatively, most supermarkets will let you return bags."
	},

	{
		"name": "milk jug",
		"image": "img/MilkJug.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "ketchup bottle",
		"image": "img/KetchupBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Yogurt container",
		"image": "img/Yogurt.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Soap bottle",
		"image": "img/SoapBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Shampoo bottle",
		"image": "img/SoapBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Conditioner bottle",
		"image": "img/SoapBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Mouthwash bottle",
		"image": "img/Mouthwash.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Pill bottle",
		"image": "img/PillBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Vitamin bottle",
		"image": "img/PillBottle.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "yes",
		"moreInfo": "Must be clean and empty."
	},

	{
		"name": "Styrofoam",
		"image": "img/Styrofoam.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": ""
	},

	{
		"name": "Packing peanuts",
		"image": "img/PackingPeanuts.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": ""
	},

	{
		"name": "Cling wrap",
		"image": "img/ClingWrap.jpg",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": ""
	},

	{
		"name": "Black plastic",
		"image": "img/BlackPlastic.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": ""
	},

	{
		"name": "Toys",
		"image": "img/PlasticToy.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": ""
	},

	{
		"name": "Coat hanger",
		"image": "img/CoatHanger.png",
		"commonlyMadeOf": "plastic",
		"recyclable": "no",
		"moreInfo": ""
	},

	{
		"name": "Shredded paper",
		"image": "img/ShreddedPaper.png",
		"commonlyMadeOf": "paper",
		"recyclable": "Sometimes",
		"moreInfo": "If the paper is smaller than 2\"x2\", it is NOT recyclable."
	},

	{
		"name": "",
		"image": "",
		"commonlyMadeOf": "",
		"recyclable": "",
		"moreInfo": ""
	},

	{
		"name": "",
		"image": "",
		"commonlyMadeOf": "",
		"recyclable": "",
		"moreInfo": ""
	}

];
$('#searchIcon').autocomplete({
  source: data
});
});
