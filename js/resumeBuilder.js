//BIO

var bio = {
    "name": "Stephen Pendergrass",
    "role": "Multimedia Developer",
    "contacts": {
        "mobile": "832-726-7119",
        "email": "StephenDPendergrass@gmail.com",
        "github": "github.com/sdpendergrass",
        "linkedin": "linkedin.com/in/stephenpendergrass",
        "location": "Nashville, TN"
    },
    "welcomeMessage": "Thank you for checking out my resume!",
    "skills": ['Content Writing', 'Video Production', 'Digital & Print Publishing', 'Instructional Design','Web Development',],
    "bioPic": "img/sdp.jpg"
}


//BIO
function displayBio() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedMessage);
    $("#header").append(formattedBioPic);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail .replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedin);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var contactInfo = ["#topContacts", "#footerContacts"];
    for (var i = 0; i < contactInfo.length; i++) {
        id = contactInfo[i];
        $(id).append(formattedMobile);
        $(id).append(formattedEmail);
        $(id).append(formattedGitHub);
        $(id).append(formattedLinkedIn);
        $(id).append(formattedLocation);
        }



    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $(skills).append(formattedSkills);
        }


}


displayBio();



//EDUCATION
var education = {
    "schools": [{
        "name": "Harvard Extension School",
        "location": "Cambridge, MA",
        "degree": "Master's Degree",
        "majors": ["Journalism (focused on professional writing and multimedia development"],
        "date": 2013,
        "url": "https://www.extension.harvard.edu"
    }, {
        "name": "University of Southern Mississippi",
        "location": "Hattiesburg, MS",
        "degree": "Bachelor's Degree",
        "majors": ["Mass Communications (focused on film and television production)"],
        "date": 2009,
        "url": "https://www.usm.edu"
    }]
}

function displayEducation() {

    for (var i = 0; i < education.schools.length; i++) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolLocation);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolMajors);

    }

}

displayEducation();




//WORK
var work = {
    "jobs": [{
        "employer": "Paragon Offshore",
        "title": "Multimedia Production Manager",
        "location" : "Houston, TX",
        "dates": "2014 - 2016",
        "description": "Reporting to the Senior VP of Investor Relations, Strategy and Planning, helped develop and implement the company’s global communications strategies.",
        "url" : "http://www.paragonoffshore.com"


    }, {
        "employer": "Diamond Offshore",
        "title": "Multimedia Production Supervisor",
        "location" : "Houston, TX",
        "dates": "2007 - 2014",
        "description": "Working closely with executives and directors of the Fortune 500 company, developed and implemented employee-focused multimedia related to global performance initiatives.",
        "url" : "http://www.diamondoffshore.com"

    }, {
        "employer": "PSAV",
        "title": "Audio-Visual Technician (Freelance & Full-time)",
        "location" : "Philadelphia, PA",
        "dates": "2005 - 2007",
        "description": "Delivered exceptional experiences for corporate clients using custom audiovisual systems in a wide range of venues.",
        "url" : "http://www.psav.com"

    }, {
        "employer": "WCBI (CBS Affiliate)",
        "title": "Production Assistant",
        "location" : "Columbus, MS",
        "dates": "2003 - 2005",
        "description": "Supported live broadcasts as floor manager, camera operator, and in other roles as needed.",
        "url" : "http://www.wcbi.com"

    }]
}

function displayWorkExperience() {

    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("#", work.jobs[i].url).replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
        $('.work-entry:last').append(formattedWorkLocation);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkDescription);

    }

}

displayWorkExperience();



//PROJECTS
var projects = {
    "projects": [{
            "title": "Portfolio Site",
            "dates": "2016",
            "description": "This portfolio project was created using HTML, CSS, JavaScript, and jQuery.",
            "url": "https://sdpendergrass.github.io/Portfolio-Pendergrass/",
            "images": [
                "img/portfolio_screenshot.png",

            ]
        }
    ]
}


function displayProjects() {

    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.
        replace("#", projects.projects[i].url).replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $('.project-entry').append(formattedProjectTitle);
        $('.project-entry').append(formattedProjectDates);
        $('.project-entry').append(formattedProjectDescription);
        $('.project-entry').append(formattedProjectImages);

    }

}

displayProjects();



$('#mapDiv').append(googleMap);



