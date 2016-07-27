//can delete this line, test 3

//check out www.d3js.org for interactive js to make skills, etc, really look good. will still need a google map on the resume.

//BIO

var bio = {
    "name": "Stephen Pendergrass",
    "role": "Multimedia Developer",
    "contacts": {
        "mobile": "fsfdghgfh222",
        "email": "email@.com",
        "github": "info goes here",
        "twitter": "info goes here",
        "location": "Nashville, TN"
    },
    "welcomeMessage": "Hello and welcome to my resume.",
    "skills": ['Video Production', 'Graphic Design', 'Web Development', 'Content Writing'],
    "bioPic": "images/sdp.jpg"
}

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
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var contactInfo = ["#topContacts", "#footerContacts"];
    for (var i = 0; i < contactInfo.length; i++) {
        id = contactInfo[i];
        $(id).append(formattedMobile);
        $(id).append(formattedEmail);
        $(id).append(formattedGitHub);
        $(id).append(formattedTwitter);
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
        "city": "Cambridge, MA",
        "degree": "Masters",
        "majors": ["Journalism"],
        "date": 2013,
        "url": "https://www.extension.harvard.edu"
    }, {
        "name": "University of Southern Mississippi",
        "city": "Hattiesburg, MS",
        "degree": "Bachelors",
        "majors": ["Mass Communications & Journalism"],
        "date": 2009,
        "url": "https://www.usm.edu"
    }]
}

function displayEducation() {

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools.city);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
    var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools.majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools.date);

    $("#education-entry").append(formattedSchoolName);
    $("#education-entry").append(formattedSchoolLocation);
    $("#education-entry").append(formattedSchoolDegree);
    $("#education-entry").append(formattedSchoolMajors);
    $("#education-entry").append(formattedSchoolDates);


    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        var formattedEducation = HTMLschoolName.replace("%data%", education.schools[i]);
        $(education-entry).append(formattedEducation);
    }

}

displayEducation();



/*
//WORK
var work = {
    "jobs": [{
        "employer": "Paragon Offshore",
        "title": "Multimedia Production Manager",
        "dates": "Oct 2014 - April 2016",
        "description": "Led the development of ..."
    }, {
        "employer": "Diamond Offshore",
        "title": "Multimedia Production Supervisor",
        "dates": "August 2007- September 2014",
        "description": "Led the development of ..."
    }]
}


//PROJECTS
var projects = {
    "projects": [{
            "title": "Sample Project 1",
            "dates": "2010",
            "description": "Crew Security Awareness / Judo App ...",
            "images": [
                "url goes here",
                "url goes here"
            ]
        }
    ]
}
*/
