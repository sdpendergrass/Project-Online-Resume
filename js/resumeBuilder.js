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
        "degree": "Master's Degree",
        "majors": ["Journalism"],
        "date": 2013,
        "url": "https://www.extension.harvard.edu"
    }, {
        "name": "University of Southern Mississippi",
        "city": "Hattiesburg, MS",
        "degree": "Bachelor's Degree",
        "majors": ["Mass Communications & Journalism"],
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
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
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
        "dates": "Oct 2014 - April 2016",
        "description": "Led the development of ..."
    }, {
        "employer": "Diamond Offshore",
        "title": "Multimedia Production Supervisor",
        "dates": "August 2007- September 2014",
        "description": "Led the development of ..."
    }]
}

function displayWorkExperience() {

    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("#", education.schools[i].url).replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].date);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].city);
        var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolLocation);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolMajors);

    }

}

displayWorkExperience();





/*
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
