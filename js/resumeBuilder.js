var bio = {
	"name" : "Celio Nelson",
	"role" : "Administrator / Project Manager / Learning Web Developer",
	"contacts" : {
		"mobile" : "+33647407660",
		"email" : "celio.nelson@gmail.com",
		"github" : "celionelson",
		"linkedin" : "https://www.linkedin.com/pub/celio-nelson/54/689/4b0/fr",
		"location" : "San Francisco, CA"},
	"bioPic" : "images/bioPic2.png",
	"welcomeMsg" : "Hi and Welcome on my 'Web Resume'!, <br> This webpage is my second project with Udacity's Front End Web Dev Nanodegree and I'm very excited about it!",
	"skills" : ["project management", "administration", "logistics", "buildings automation", "programming"]
 };

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin)
	var formattedLocation = HTMLlocation.replace(/%data%/g, bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#navheaderTopContent").append(formattedBioPic);
	$("#navheaderBottomContent").prepend(formattedLocation);
	$("#navheaderBottomContent").prepend(formattedGithub);
	$("#navheaderBottomContent").prepend(formattedLinkedin);
	$("#navheaderBottomContent").prepend(formattedEmail);
	$("#navheaderBottomContent").prepend(formattedMobile);
	$("#mainheaderContent").prepend(formattedRole);
	$("#mainheaderContent").prepend(formattedName);
	$("#navmenuContent").append(HTMLhomeMenu);
	
	$("#home").append(formattedWelcomeMsg);

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedLinkedin);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

	if(bio.skills.length > 0) {
		
		$("#home").append(HTMLskillsStart);

		for(skill in bio.skills) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#home").append(formattedSkill);
		}
	};
};

bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "SFE",
			"title" : "Administrator / Logistician",
			"dates" : "Jul 2011 to Jun 2014",
			"location" : "Thateng, Laos",
			"description" : "Christian Swiss-French NGO working in Medical Cooperation and Rural Development in Laos.<br>Managed Administration, Finances, Human Resources and Logistics of a Community Agriculture Development Project employing 13 local staff.<br>Supported the project's field activities and Directed baseline and endline surveys in the poor villages.<br>More globally in the NGO, provided Administrative support to the Head Office, IT Support and Management. Implemented new management tools for expatriate staff administrative procedures.",
			"url" : ""
		},
		{
			"employer" : "ISS FM Services",
			"title" : "Key Account Manager / Team Leader",
			"dates" : "May 2010 to May 2011",
			"location" : "Geneva, Switzerland",
			"description" : "Managed multiple Facility Management Accounts, which entailed Holding Customer Relations, Leading a team of 5 Site Managers, Handling the Sub-Contractors, Implementing changes or new accounts.<br>Carried out successfully the implementation of new Facility Management Services Accounts for a leading bank and a private client's luxury property.",
			"url" : ""
		},
		{
			"employer" : "Cofely GDF-SUEZ",
			"title" : "Project Manager in Buildings Automation",
			"dates" : "Jan 2008 to Apr 2010",
			"location" : "Geneva, Switzerland",
			"description" : "Managed Building Automation projects in HVAC from the Conception of the electrical schemes and the automatons' programs to the software commissioning of facilities (ventilation, heating, air-conditioning).<br>Initiated and achieved conception of powerful tools that led to save substantial amounts of time in the company's work process for projects.",
			"url" : ""
		}
	]
};

work.display = function () {
	
	$("#navmenuContent").append(HTMLworkMenu);

	for(job in work.jobs) {

		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedWorkEmployer = formattedWorkEmployer.replace("#", work.jobs[job].url);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedWorkEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

if(work.jobs.length > 0) {
	work.display();
};

var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "Mountain View, CA",
			"degree" : "Online Nanodegree",
			"major" : "Front-End Web Developer",
			"dates" : "2015 - present",
			"url" : "https://www.udacity.com/course/nd001"
		},
		{
			"name" : "University of Marne-la-Vallée",
			"location" : "Champs-sur-Marne (77), France",
			"degree" : "BS",
			"major" : "Energy and Thermal Engineering",
			"dates" : "2005 - 2007",
			"url" : "http://www.u-pem.fr"
		},
		{
			"name" : "University of Paris-Est Créteil",
			"location" : "Créteil (94), France",
			"degree" : "Studies",
			"major" : "Science of Matter",
			"dates" : "2004 - 2005",
			"url" : "http://www.u-pec.fr"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Introduction to Database by Jenifer Widom",
			"school" : "Stanford University",
			"dates" : "2013",
			"url" : "https://class.stanford.edu/courses/Engineering/db/2014_1/about"
		},
		{
			"title" : "Introduction to Computer Programming Using Python by Eric Grimson (6.00.1x, Verified)",
			"school" : "edX, MIT",
			"dates" : "2014",
			"url" : "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0#.VNeDEkLeuGQ"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud304"
		},
		{
			"title" : "How to Use Git and GitHub",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud804"
		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud245-nd"
		},
		{
			"title" : "Object-Oriented Javascript",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud015"
		},
		{
			"title" : "HTML5 Canvas",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/ud292"
		}
	]
};

education.displaySchool = function () {

	$("#navmenuContent").append(HTMLeducationMenu);

	for(school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("Major: %data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
};

if(education.schools.length > 0) {
	education.displaySchool();
};

education.displayOnline = function () {

	if(education.schools.length === 0) {
		$("#navmenuContent").append(HTMLeducationMenu);
	}

	$("#education").append(HTMLonlineClasses);
	
	for(online in education.onlineCourses) {

		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[online].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);

		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", " ");
		//formattedOnlineURL = formattedOnlineURL.replace("#", education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

if(education.onlineCourses.length > 0) {
	education.displayOnline();
};

var projects = {
	"projects" : [
		{
			"title" : "Front-End Web Dev Nanodegree - P1 Mockup to Website",
			"dates" : "2015",
			"description" : "Provided with a design mockup as a PDF-file, I had to replicate that design in HTML and CSS. I developed a responsive website that displays images, descriptions and links.",
			"url" : "https://github.com/celionelson/frontend-nanodegree-p1.git",
			"img" : "images/img-p1.png"
		},
		{
			"title" : "Front-End Web Dev Nanodegree - P2 Interactive Resume",
			"dates" : "2015",
			"description" : "You're looking at it right now! I had to write clean code and to apply my knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges. I also had the opportunity to play with the new polymer features.",
			"url" : "https://github.com/celionelson/frontend-nanodegree-p2.git",
			"img" : "images/img-p2.png"
		},
		{
			"title" : "Front-End Web Dev Nanodegree - P3 Classic Arcade Game Clone",
			"dates" : "2015",
			"description" : "I was provided with visual assets and a game loop engine; using these tools I added a number of entities to the game including the player characters, gems and enemies to recreate the classic arcade game Frogger.",
			"url" : "https://github.com/celionelson/frontend-nanodegree-p3.git",
			"img" : "images/img-p3.png"
		}

	]
};

projects.display = function () {

	$("#navmenuContent").append(HTMLprojectMenu);

	for(project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		formattedProjectTitle = formattedProjectTitle.replace("#",projects.projects[project].url);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].img);
		$(".project-entry:last").append(formattedProjectImage);
	}
};

if(projects.projects.length > 0) {
	projects.display();
};

//$("#main").append(internationalizeButton);

$("#navmenuContent").append(HTMLmapMenu);
$("#mapDiv").append(googleMap);