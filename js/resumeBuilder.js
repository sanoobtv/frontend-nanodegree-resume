/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append("Sanoob");
var awesome = "iam awesome ";
console.log(awesome);
var fun = awesome.replace("awesome", "fun");
console.log(fun);
var name = "Sanoob ThekkeValappil"
var role = "Developer"
var formattedNmae = HTMLheaderName.replace("%data%", name)

var formattedrole = HTMLheaderRole.replace("%data%", role)
$('#header').prepend(formattedrole);
$('#header').prepend(formattedNmae);


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
var fphone = HTMLmobile.replace("%data%", bio.contacts.phone);
var email = HTMLemail.replace("%data%", bio.contacts.email);
//var location = HTMLemail.replace("%data%", bio.contacts.location);
var description = HTMLwelcomeMsg.replace("%data%", bio.contacts.description);
var url = HTMLbioPic.replace("%data%", bio.pictureurl);
$('#topContacts').prepend(fphone);
$('#topContacts').prepend(email);
//$('#topContacts').prepend(location);
$('#topContacts').prepend(description);
$('#header').append(url);



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



if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedskill = HTMLskills.replace("%data%", bio.skills[i])
        $('#skills').prepend(formattedskill);
    }
}

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
displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function inName() {
    var array = [];
    array = name.trim().split(" ");
    console.log(array);
    array[0] = array[0].slice(0, 1).toUpperCase() + array[0].slice(1).toLowerCase();
    array[1] = array[1].toUpperCase();
    return (array[0] + " " + array[1]);
}
$("#main").append(internationalizeButton);
projects.display();
$('#mapDiv').append(googleMap);
