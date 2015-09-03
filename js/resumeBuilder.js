/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
	"name" : "Lionel Claudon",
	"role" : "Software Engineer",
	"welcomeMessage" : "Hello, welcome to my Resume",
	"contacts" : {
		"email" : "lionel.claudon@gmail.com",
		"mobile" : "079 781 69 83",
		"location" : "Lausanne",
		"github" : "LionelClaudon"
	},
	"img" : "images/id.png",
	"skills" : ["Java", "Spring", "Agile"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Sicpa",
		"title" : "Software Engineer",
		"years" : "2012 - 2015",
		"location" : "Lausanne",
		"description" : "Taxed products marking and tracking"
	}, 
	{
		"employer" : "CES",
		"title" : "Software Engineer",
		"years" : "2012",
		"location" : "Geneva",
		"description" : "JPEG2000 for embedded video"
	}
	]
};

var education = {
	"schools" : [
	{
		"school" : "Grenoble INP",
		"degree" : "Master",
		"location" : "Grenoble",
		"majors" : ["Mathematics"],
		"years" : "2009 - 2012",
		"url" : "http://grenoble-inp.com"
	},
	{
		"school" : "IUT Annecy",
		"degree" : "Technician",
		"location" : "Annecy",
		"major" : ["Thermodynamics"],
		"years" : "2007 - 2009",
		"url" : "http://annecy.com"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Javascript Basics",
		"school" : "Udacity",
		"dates" : "2015"
	}
	]
};

var projects = {
	"project": [
	{
		"title" : "Assembly language compiler",
		"dates" : "2011",
		"description" : "Compile using C language an assembly file"
	}
	]
};

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	console.log("Appending " + formattedSkill + " to skills");

	for(var i in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		console.log("Appending " + formattedSkill + " to skills");
	}
}


function displayWork() {
	for(var j in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].years);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[j].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(name) {
	var names = name.split(" ");

	names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1);
	names[1] = names[1].toUpperCase();

	return names[0] + " " + names[1];
}

projects.display = function() {
	for (p in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[p].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[p].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[p].description);
		$(".project-entry:last").append(formattedDescription);
			 
	} 
}

projects.display();

$("#mapDiv").append(googleMap);

//$("#workExperience").append(work.name);
//$("#education").append(education["school"]);



