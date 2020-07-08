var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
	{
	name: "Riverview",
	image: "https://b.domainstatic.com.au/w800-h600-w3600-h2394-2013185124_2_pi_161103_062947",
	description: "Bacon ipsum dolor amet pig shank shankle pork chop short loin tri-tip meatball turkey tenderloin jowl. Drumstick hamburger pancetta, frankfurter sirloin meatloaf pork belly cupim pastrami short loin landjaeger tail. Salami boudin ball tip biltong, t-bone bacon pork loin jowl short loin ham hock landjaeger ribeye hamburger kielbasa pork chop. T-bone pork chop frankfurter cow salami jerky. Meatloaf spare ribs tongue, pork chop fatback flank porchetta pastrami. Chuck landjaeger burgdoggen short ribs."
	},
	{
	name: "Hudson",
	image: "https://b.domainstatic.com.au/w750-h563-w800-h534-2012943074_1_pi_160721_065104",
	description: "Bacon ipsum dolor amet pig shank shankle pork chop short loin tri-tip meatball turkey tenderloin jowl. Drumstick hamburger pancetta, frankfurter sirloin meatloaf pork belly cupim pastrami short loin landjaeger tail. Salami boudin ball tip biltong, t-bone bacon pork loin jowl short loin ham hock landjaeger ribeye hamburger kielbasa pork chop. T-bone pork chop frankfurter cow salami jerky. Meatloaf spare ribs tongue, pork chop fatback flank porchetta pastrami. Chuck landjaeger burgdoggen short ribs."
	},
	{
	name: "Riverview",
	image: "https://b.domainstatic.com.au/w800-h600-w3600-h2394-2013185124_2_pi_161103_062947",
	description: "My old home"
	},
]

function seedDB(){
	//Remove all comments
	Comment.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log("Removed comments");
		}
	})
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log("Removed campgrounds");
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err)
					} else {
						console.log("added a campground");
						//Create a comment
						Comment.create(
						{
							text: "This place was so beautiful, I'm going to miss it",
							author: "paul"
						}, function(err, comment){
							if(err){
								console.log(err)
							} else {
							campground.comments.push(comment);
							campground.save();
							console.log("created new comment");
							}
						});
					};
				});
			});
		};
	});
};

module.exports = seedDB