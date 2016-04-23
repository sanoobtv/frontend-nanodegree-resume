/*
This is empty on purpose! Your code to build the resume will go here.
Sanoob thekke Valappil

 */
$("#main").append("Sanoob");
console.log(awesome);

//appending some data to the page


var name = "Sanoob ThekkeValappil"
var role = "Developer"
//replace the %data% from helper.js, after replacing append it to the index.html page on header
var formattedNmae = HTMLheaderName.replace("%data%", name)
var formattedrole = HTMLheaderRole.replace("%data%", role)

$('#header').prepend(formattedrole);
$('#header').prepend(formattedNmae);

//create JSON sample objects.
//the bio object
var bio = {
    "name": "Sanoob Thekke Valappil",
    "age": 25,
    "role": "Im BatMan",
    "contacts": {
        "phone": "0450741259",
        "email": "sanoob.tv@gmail.com",
        "location": "Melbourne",
        "description": "Iam Batman"
    },
    "skills": ["set of skills", "skillset2", "skillset3"],
    "pictureurl": "./images/fry.jpg"
};

// replace %data% in helper.js with corresponding fields and append it to the dic section in index.html
var fphone = HTMLmobile.replace("%data%", bio.contacts.phone);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var description = HTMLwelcomeMsg.replace("%data%", bio.contacts.description);
var url = HTMLbioPic.replace("%data%", bio.pictureurl);

$('#topContacts').prepend(fphone);
$('#topContacts').prepend(email);
$('#topContacts').prepend(description);
//profile pic append in header for better layout.
$('#header').append(url);

//the work object
var work = {
    "jobs": [{
            "position": "Research Assitant",
            "Employer": "Deakin University",
            "location": "Melbourne",
            "year": "2015/16",
            "description": "aajshdalskjdhaosidhjasopidhjasopidhj"
        },

        {
            "position": "Teaching Assistant",
            "Employer": "Deakin University",
            "location": "Melbourne",
            "year": "2015/16",
            "description": "aajshdalskjdhaosidhjasopidhjasopidhj"


        }, {
            "position": "Developer",
            "Employer": "4Code",
            "location": "Cochin",
            "year": "2013/14",
            "description": "aajshdalskjdhaosidhjasopidhjasopidhj"


        }
    ]
};
//the project object
var projects = {
    "project": [{
        "title": "Title1",
        "date": "2014/15",
        "description": "asdasdas ddfsadkfha sdopighasogiha ergoiuahzjhdasj hvasjdhgasvjdh asgdujhasgduja shdgaujshdgas ujhdgasidj hgasjdhg asiudyh fgasuidyh agfsdiu hasvdiua  hasiu dgbasi uasi duas d ioua hd oiau dhoaisud hasidoud hsadiufgasdiufjhbaSD esrgf a isdfsdiu fpiufghweioufh SDikjvc hSEPF9U7T f oiusdhfs gpoiaudsf hgpaiosdfughpasu ghaspioufghasp dfuhasdpiofuh asdpifuhasdpif uahsdpifuashdf "
    }, {
        "title": "Title2",
        "date": "2014/15",
        "description": "asdasdasddfsadkfhasdopighasogihaergoiuahzsgpoiaudsfhgpaiosdfughpasughaspioufghaspdfuhasdpiofuhasdpifuhasdpifuahsdpifuashdf"
    }, {
        "title": "Title3",
        "date": "2014/15",
        "description": "asdasdasddfsadkfhasdopighasogihaergoiuahzsgpoiaudsfhgpaiosdfughpasughaspioufghaspdfuhasdpiofuhasdpifuhasdpifuahsdpifuashdf"
    }]


};
// creating a function display for object projects
//creating an encapsulation function
//js treats functions as objects. so create a display function for the project object.
//holding the display function inside the project object
projects.display = function() {

    for (proj in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedtitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
        $(".project-entry:last").append(formattedtitle);
        var formatteddate = HTMLprojectDates.replace("%data%", projects.project[proj].date);
        $(".project-entry:last").append(formatteddate);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
        $(".project-entry:last").append(formattedDescription);
    }
}
//the education object
var education = {

    "schools": [{
        "Name": "University Of Calicut",
        "location": "Calicut",
        "degree": "Bachelor of Technology",
        "Major": "ComputerScience"
    }, {
        "Name": "Deakin University",
        "location": "Melbourne",
        "degree": "MIT Professional",
        "Major": "Software devlpmnt and Networking"
    }]
};


//appending the skills on to the main page. using an IF statement to check the length
if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedskill = HTMLskills.replace("%data%", bio.skills[i])
        $('#skills').prepend(formattedskill);
    }
}
// a normal function to display all the work experience.
//not encapsulated
function displayWork() {
    for (i in work.jobs) {

        $("#workExperience").append(HTMLworkStart);
        var formattedemployer = HTMLworkEmployer.replace("%data%", work.jobs[i].Employer);
        var formattedtitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[i].location)
        var formatteddate = HTMLworkDates.replace("%data%", work.jobs[i].year);
        var formatteddesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedet = formattedemployer + formattedtitle;
        $(".work-entry:last").prepend(formatteddesc);
        $(".work-entry:last").prepend(formatteddate);
        $(".work-entry:last").prepend(formattedlocation);
        $(".work-entry:last").prepend(formattedet);

    }
}
//calling the function DisplayWork
displayWork();
//a sample script added to track if mouse events were listening.
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
// trying out string functions. when the button is clicked the name format is changed to Sanoob THEKKEVALAPPIL
function inName() {
    var array = [];
    array = name.trim().split(" ");
    console.log(array);
    array[0] = array[0].slice(0, 1).toUpperCase() + array[0].slice(1).toLowerCase();
    array[1] = array[1].toUpperCase();
    return (array[0] + " " + array[1]);
}
$("#main").append(internationalizeButton);
//calling the projects.display function.
projects.display();
//activating the map data, all the objects are traversed in the helper.js
//locations from all the objects are stored in to an array, and displayed on the map.
$('#mapDiv').append(googleMap);
