// Initial values
var projects = ["Merck", "Amex"];
var skills = ['Engineering Mgmt', 'Data Science', 'Design', 'Backend'];
var months = ['April 2017', 'May 2017']
var num_employees = 73
var query = '?=';

var people = ['AFROOZE, JALEH', 'AHEARN, EVE', 'ATTAHRI, MOHAMED', 'BARKER, JOHN', 'BECKER, NICK',
    'BENOIT, MICHAEL', 'BOMAN, BLAINE', 'CHAN, KELVIN', 'CHOLAS-WOOD, ALEX', 'CHRISTENSEN, EMIL',
    'CREIGHTON, JENNIFER', 'DACOSTA, MARC', 'DANTON, CRAIG', 'DELGADILLO, SUSANA', 'DONATZ, MICHAEL',
    'EASTBURN, BENJAMIN', 'EDGAR, JAMES', 'ESTES, STEPHEN', 'FLOWERS, MICHAEL', 'GAO, DAVID',
    'GELB, BENJAMIN', 'GONZALEZ, JUAN', 'GUTMAN, LEE', 'HALLOCK, SAMANTHA', 'HAMMER, MELODY',
    'HENDERSON, PETER', 'HILEWICZ, RONEN', 'HORAN, MATTHEW', 'IANIUK, OLGA', 'JOHNSON, COURTNEY',
    'KEITER, KENNETH', 'KELMANSKIY, YEFIM', 'KERLE, INDIA', 'KHALIFA, DONIA', 'KIRCHER, ASHLEY',
    'KNUPP, JEFFREY', 'KREMLER, GREGORY', 'KRINSLEY, JEREMY', 'LEONE, MICHAEL', 'LEV, IGOR',
    'LEVIN, JONATHAN', 'LI, ANN', 'MADDALA, BHASKAR', 'MELEMED, DANIEL', 'MIKAELIAN, ALEXIS',
    'MONK, CLINTON', 'MORAN, THOMAS', 'MUKHERJEE, ISHANI', 'NORTHINGTON, ALEXANDRA', 'OMI, ALISA',
    'OUDGHIRI, HICHAM', 'PARIKH, URVISH', 'PARKER, JARROD', 'PRAINITO, JOE', 'PRATER, RICHARD',
    'PRICE, REBECCA', 'ROTH, ALEXANDER', 'RUBENSTEIN, ABRAHAM', 'RUBINSTEIN, DAVID', 'SESSER, BENJAMIN',
    'SHAO, BRYAN', 'SPIEGEL, STEPHANIE', 'STANLEY, MICHAEL', 'SULLAM, JULIANA', 'TEYSSIER, MAUREEN',
    'ULMAN, JEREMY', 'VARSHAVSKY, PETER', 'WARDY, JASON', 'WATT, CECILIA', 'WEBB, WILLIAM', 'WEINBERG, JEFF',
    'WELLS, THOMAS', 'WHALEN, CAITLIN', 'WHITING, OWEN', 'WILSON, JOSHUA', 'WRISINGER, ANDREW', 'YANG, YANG'
];

// Colors are tol-rainbow
var colors_list = ['rgb(120,28,129)', 'rgb(72,37,133)', 'rgb(63,81,163)', 'rgb(68,124,191)', 'rgb(81,156,184)',
    'rgb(103,176,146)', 'rgb(131,186,109)', 'rgb(164,190,85)', 'rgb(195,186,69)', 'rgb(219,171,59)',
    'rgb(230,138,51)', 'rgb(228,89,42)', 'rgb(217,33,32)'
]

var months_list = ['April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017',
    'October 2017', 'November 2017', 'December 2017'
]

var people_list = ['AFROOZE, JALEH', 'AHEARN, EVE', 'ATTAHRI, MOHAMED', 'BARKER, JOHN', 'BECKER, NICK',
    'BENOIT, MICHAEL', 'BOMAN, BLAINE', 'CHAN, KELVIN', 'CHOLAS-WOOD, ALEX', 'CHRISTENSEN, EMIL',
    'CREIGHTON, JENNIFER', 'DACOSTA, MARC', 'DANTON, CRAIG', 'DELGADILLO, SUSANA', 'DONATZ, MICHAEL',
    'EASTBURN, BENJAMIN', 'EDGAR, JAMES', 'ESTES, STEPHEN', 'FLOWERS, MICHAEL', 'GAO, DAVID',
    'GELB, BENJAMIN', 'GONZALEZ, JUAN', 'GUTMAN, LEE', 'HALLOCK, SAMANTHA', 'HAMMER, MELODY',
    'HENDERSON, PETER', 'HILEWICZ, RONEN', 'HORAN, MATTHEW', 'IANIUK, OLGA', 'JOHNSON, COURTNEY',
    'KEITER, KENNETH', 'KELMANSKIY, YEFIM', 'KERLE, INDIA', 'KHALIFA, DONIA', 'KIRCHER, ASHLEY',
    'KNUPP, JEFFREY', 'KREMLER, GREGORY', 'KRINSLEY, JEREMY', 'LEONE, MICHAEL', 'LEV, IGOR',
    'LEVIN, JONATHAN', 'LI, ANN', 'MADDALA, BHASKAR', 'MELEMED, DANIEL', 'MIKAELIAN, ALEXIS',
    'MONK, CLINTON', 'MORAN, THOMAS', 'MUKHERJEE, ISHANI', 'NORTHINGTON, ALEXANDRA', 'OMI, ALISA',
    'OUDGHIRI, HICHAM', 'PARIKH, URVISH', 'PARKER, JARROD', 'PRAINITO, JOE', 'PRATER, RICHARD',
    'PRICE, REBECCA', 'ROTH, ALEXANDER', 'RUBENSTEIN, ABRAHAM', 'RUBINSTEIN, DAVID', 'SESSER, BENJAMIN',
    'SHAO, BRYAN', 'SPIEGEL, STEPHANIE', 'STANLEY, MICHAEL', 'SULLAM, JULIANA', 'TEYSSIER, MAUREEN',
    'ULMAN, JEREMY', 'VARSHAVSKY, PETER', 'WARDY, JASON', 'WATT, CECILIA', 'WEBB, WILLIAM', 'WEINBERG, JEFF',
    'WELLS, THOMAS', 'WHALEN, CAITLIN', 'WHITING, OWEN', 'WILSON, JOSHUA', 'WRISINGER, ANDREW', 'YANG, YANG'
];

var overall_dict = {}

// Client ID and API key from the Developer Console
var CLIENT_ID = '258110252035-ue2704r46okci98s11hk890jbi2kbli2.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function() {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        listMajors();
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function listMajors() {
    gapi.client.sheets.spreadsheets.values.get({
        // example spreadsheet
        // spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',

        // my spreadsheet
        // spreadsheetId: '1eOyTdGjSxrEs4AMnoX8VO-Y8cWZ46c-9wvz877zR_8w',
        // range: 'Sample master data cojo!A2:CB',

        // Draft 3: Project Staffing
        spreadsheetId: '1Lx6p5J-p419zeFP3cwNJWRP_neDcBDibPal2xpyIBy4',
        range: 'Project Staffing!A2:AA',
    }).then(function(response) {

        console.log(response);
        var range = response.result;
        // Get the spreadsheet data into required and provided dictionaries

        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
                var req_or_prov = row[0]

                var real = row[2]
                var project = row[3]
                var project_category = row[5]
                var project_owner = row[6]
                var project_owner_skill = row[7]
                var project_owner_skill_category = row[8]
                var project_owner_team = row[9]
                var project_owner_team_category = row[10]
                var skill = row[11]
                var skill_category = row[12]
                var employee_name = row[13]
                var person_skill = row[14]
                var person_skill_category = row[15]
                var person_team = row[16]
                var person_team_category = row[17]


                var FTE_list = []
                for (var j = 0; j < row.slice(18).length; j++) {
                    if (req_or_prov == 'Required') {
                        FTE_list.push(parseFloat(-row.slice(18)[j]) || 0)
                    } else {
                        FTE_list.push(parseFloat(row.slice(18)[j]) || 0)
                    }
                }


                if (!(employee_name in overall_dict)) {
                    overall_dict[employee_name] = {}
                }


                if (project in overall_dict[employee_name]) {
                    overall_dict[employee_name][project].push([skill, FTE_list])
                } else {
                    overall_dict[employee_name][project] = [
                        [skill, FTE_list]
                    ]
                }


            }
            console.log(overall_dict)

        } else {
            alert('No data found.');
        }

        console.log(projects);
        console.log(skills);
        console.log(months);


        var socket = io.connect();

        socket.on('query', function(msg) {
            if (msg != null) {
                people = msg.split(';');
            }
            create_table(people, months)
        });


        var $rows = $('#container');

        $('#srch-term').keyup(function() {
            var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

            children = $rows.children()
            for (var i = 0; i < children.length; i++) {
                child = children[i]
                caption = child.getElementsByTagName("caption")
                table = document.getElementById(child.id);

                if ((caption[0].innerHTML.toLowerCase()).indexOf(val) > -1) {
                    table.style.display = "";
                } else {
                    table.style.display = "none";
                }
            }
        });


    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}


function create_table(people, months) {

    for (person_index in people) {

        person = people[person_index]
        $('#container').append('<table class="table table-striped" id=' + person_index + '> \
        <colgroup><col class="col-xs-2"></col><col class="col-xs-4"></col><col class="col-xs-4"></col></colgroup> \
        <caption>' + person + '</caption><thead><tr><th>Month</th><th>Project</th><th>Skill</th><th>FTE</th></tr></thead> \
        <tbody></tbody></table>');



        if (!(Object.keys(overall_dict[person]).length === 0 && overall_dict[person].constructor === Object)) {
            projects_list = new Array(months.length).fill('');
            projects = overall_dict[person]
            for (var i in projects) {

                project = projects[i];
                project_name = i

                for (var k in project) {
                    skill = project[k][0]
                    FTE_list = project[k][1]

                    for (var l in FTE_list) {
                        month = months_list[l]
                        if (containsObject(month, months)) {
                            if (projects_list[l] != '' && projects_list[l] != undefined) {
                                projects_list[l].push('<tr><td>' + month + '</td><td>' + project_name + '</td><td>' + skill + '</td><td>' + FTE_list[l] + '</td></tr>')
                            } else {
                                projects_list[l] = ['<tr><td>' + month + '</td><td>' + project_name + '</td><td>' + skill + '</td><td>' + FTE_list[l] + '</td></tr>']
                            }
                        }
                    }
                }
            }
            for (project_index in projects_list) {
                $('#' + person_index + ' tr:last').after(projects_list[project_index])
            }


            // $('#' + person_index + ' tr:last').after('<tr><td>' + month + '</td><td>' + project_name + '</td><td>' + skill + '</td><td>' + FTE_list[l] + '</td></tr>')

        } else {
            $('#' + person_index + ' tr:last').after('<tr><td>' + '' + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td></tr>')
        }

    }
};


// Dropdown for People
$('#people-dropdown-menu a').on('click', function(event) {
    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if (val != undefined) {
        if ((idx = people.indexOf(val)) > -1) {
            people.splice(idx, 1);
            setTimeout(function() { $inp.prop('checked', false) }, 0);
        } else {
            people.splice(people_list.indexOf(val), 0, val);
            setTimeout(function() { $inp.prop('checked', true) }, 0);
        }
    }

    $(event.target).blur();

    console.log(people);

    $('#container').html('');

    create_table(people, months);

    return false;
});


// Dropdown for Months
$('#months-dropdown-menu a').on('click', function(event) {

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if ((idx = months.indexOf(val)) > -1) {
        months.splice(idx, 1);
        setTimeout(function() { $inp.prop('checked', false) }, 0);
    } else {
        months.splice(months_list.indexOf(val), 0, val);
        setTimeout(function() { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    console.log(months);

    $('#container').html('');

    create_table(people, months);

    return false;
});



// Projects
$("#checkAllPeople").on('click', function(event) {
    if ($('#checkAllPeople:checked').length < 1) {
        setTimeout(function() { $('#checkAllPeople').prop('checked', false) }, 0);
        setTimeout(function() { $('.people').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < people_list.length; i++) {
            if ((idx = people.indexOf(people_list[i])) > -1) {
                people.splice(idx, 1);
            }
        }

        create_table(people, months);
    } else {
        setTimeout(function() { $('#checkAllPeople').prop('checked', true) }, 0);
        setTimeout(function() { $('.people').prop('checked', true) }, 0);


        $('#container').html('');

        people = people.concat(people_list);

        create_table(people, months);
    }
    console.log(people);
});

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}
