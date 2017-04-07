// Initial values
var projects = ["Merck", "Amex"];
var skills = ['Engineering Mgmt', 'Data Science', 'Design', 'Backend'];
var months = ['April 2017', 'May 2017']
var num_employees = 73
var query = '?=';


var people = ["BARKER, JOHN E", "DONATZ, MICHAEL G", "JOHNSON, COURTNEY A", "CHRISTENSEN, EMIL R",
    "EASTBURN, BENJAMIN C", "MORAN, THOMAS C", "DELGADILLO, SUSANA C", "KELMANSKIY, YEFIM", "OMI, ALISA",
    "KNUPP, JEFFREY C", "LEONE, MICHAEL A", "VARSHAVSKY, PETER", "PARKER, JARROD R", "WARDY, JASON I",
    "DANTON, CRAIG A", "LEV, IGOR", "BOMAN, BLAINE", "KEITER, KENNETH S", "KIRCHER, ASHLEY W", "PRATER, RICHARD T",
    "WELLS, THOMAS F", "WHITING, OWEN S", "YANG, YANG", "RUBENSTEIN, ABRAHAM E", "ATTAHRI, MOHAMED", "BERNARDIN, JAMES P",
    "CREIGHTON, JENNIFER L", "GELB, BENJAMIN E", "HAMMER, MELODY A", "ROTH, ALEXANDER I", "MONK, CLINTON D",
    "KREMLER, GREGORY J", "AHEARN, EVE G", "KERLE, INDIA H", "TEYSSIER, MAUREEN E", "ULMAN, JEREMY W", "WATT, CECILIA I",
    "KRINSLEY, JEREMY A", "EDGAR, JAMES H", "OUDGHIRI, HICHAM", "PRICE, REBECCA L", "SESSER, BENJAMIN C", "CHAN, KELVIN K",
    "HALLOCK, SAMANTHA L", "LI, ANN L", "NORTHINGTON, ALEXANDRA E", "SULLAM, JULIANA M", "ESTES, STEPHEN B", "FLOWERS, MICHAEL P",
    "LEVIN, JONATHAN T", "HORAN, MATTHEW T", "KHALIFA, DONIA A", "SPIEGEL, STEPHANIE B", "AFROOZE, JALEH", "GUTMAN, LEE E",
    "WHALEN, CAITLIN M", "BENOIT, MICHAEL G", "GONZALEZ, JUAN", "WILSON, JOSHUA B", "IANIUK, OLGA", "PARIKH, URVISH",
    "WEBB, WILLIAM A", "MADDALA, BHASKAR", "CASAMONA, CARLA", "CHOLAS-WOOD, ALEX", "HENDERSON, PETER", "SHAO, BRYAN",
    "STANLEY, MICHAEL", "PRAINITO, JOE", "MUKHERJEE, ISHANI", "MIKAELIAN, ALEXIS", "GAO, DAVID", "BECKER, NICK"
]

// Colors are tol-rainbow
var colors_list = ['rgb(120,28,129)', 'rgb(72,37,133)', 'rgb(63,81,163)', 'rgb(68,124,191)', 'rgb(81,156,184)',
    'rgb(103,176,146)', 'rgb(131,186,109)', 'rgb(164,190,85)', 'rgb(195,186,69)', 'rgb(219,171,59)',
    'rgb(230,138,51)', 'rgb(228,89,42)', 'rgb(217,33,32)'
]

var months_list = ['March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017',
    'September 2017', 'October 2017'
]

var people_list = ["BARKER, JOHN E", "DONATZ, MICHAEL G", "JOHNSON, COURTNEY A", "CHRISTENSEN, EMIL R",
    "EASTBURN, BENJAMIN C", "MORAN, THOMAS C", "DELGADILLO, SUSANA C", "KELMANSKIY, YEFIM", "OMI, ALISA",
    "KNUPP, JEFFREY C", "LEONE, MICHAEL A", "VARSHAVSKY, PETER", "PARKER, JARROD R", "WARDY, JASON I",
    "DANTON, CRAIG A", "LEV, IGOR", "BOMAN, BLAINE", "KEITER, KENNETH S", "KIRCHER, ASHLEY W", "PRATER, RICHARD T",
    "WELLS, THOMAS F", "WHITING, OWEN S", "YANG, YANG", "RUBENSTEIN, ABRAHAM E", "ATTAHRI, MOHAMED", "BERNARDIN, JAMES P",
    "CREIGHTON, JENNIFER L", "GELB, BENJAMIN E", "HAMMER, MELODY A", "ROTH, ALEXANDER I", "MONK, CLINTON D",
    "KREMLER, GREGORY J", "AHEARN, EVE G", "KERLE, INDIA H", "TEYSSIER, MAUREEN E", "ULMAN, JEREMY W", "WATT, CECILIA I",
    "KRINSLEY, JEREMY A", "EDGAR, JAMES H", "OUDGHIRI, HICHAM", "PRICE, REBECCA L", "SESSER, BENJAMIN C", "CHAN, KELVIN K",
    "HALLOCK, SAMANTHA L", "LI, ANN L", "NORTHINGTON, ALEXANDRA E", "SULLAM, JULIANA M", "ESTES, STEPHEN B", "FLOWERS, MICHAEL P",
    "LEVIN, JONATHAN T", "HORAN, MATTHEW T", "KHALIFA, DONIA A", "SPIEGEL, STEPHANIE B", "AFROOZE, JALEH", "GUTMAN, LEE E",
    "WHALEN, CAITLIN M", "BENOIT, MICHAEL G", "GONZALEZ, JUAN", "WILSON, JOSHUA B", "IANIUK, OLGA", "PARIKH, URVISH",
    "WEBB, WILLIAM A", "MADDALA, BHASKAR", "CASAMONA, CARLA", "CHOLAS-WOOD, ALEX", "HENDERSON, PETER", "SHAO, BRYAN",
    "STANLEY, MICHAEL", "PRAINITO, JOE", "MUKHERJEE, ISHANI", "MIKAELIAN, ALEXIS", "GAO, DAVID", "BECKER, NICK"
]

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
        spreadsheetId: '1eOyTdGjSxrEs4AMnoX8VO-Y8cWZ46c-9wvz877zR_8w',
        range: 'Sample master data cojo!A2:CB',
    }).then(function(response) {




        console.log(people);

        console.log(response);
        var range = response.result;
        // Get the spreadsheet data into required and provided dictionaries
        if (range.values.length > 0) {
            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
                var real = row[0]
                var month = row[1]
                var project = row[2]
                var skill = row[3]
                var staffing_status = parseFloat(row[4])
                var required_FTE = parseFloat(row[5])
                var provided_FTE = parseFloat(row[6])



                if (!(month in overall_dict)) {
                    overall_dict[month] = {}
                }


                for (var j = 7; j < row.length; j++) {
                    var employee_FTE = row[j]
                    var employee_name = people_list[j - 7]

                    if (!(employee_name in overall_dict[month])) {
                        overall_dict[month][employee_name] = {}
                    }

                    if (employee_FTE > 0) {

                        if (project in overall_dict[month][employee_name]) {
                            overall_dict[month][employee_name][project].push([skill, employee_FTE])
                        } else {
                            overall_dict[month][employee_name][project] = [
                                [skill, employee_FTE]
                            ]
                        }

                    }
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

        socket.on('people_query', function(msg) {
            if (msg != null) {
                people = msg.split(';');
            }
            console.log(people);
            create_table(people, months)
        });


    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}



function create_table(people, months) {
    for (month_index in months) {
        month = months[month_index]
        for (person_index in people) {

            person = people[person_index]

            $('#container').append('<table class="table table-striped" id=' + month_index + '_' + person_index + '> \
        <caption>' + month + ': ' + person + '</caption><thead><tr><th>Person</th><th>Project</th><th>Skill</th><th>FTE</th></tr></thead> \
        <tbody></tbody></table>');


            if (!(Object.keys(overall_dict[month][person]).length === 0 && overall_dict[month][person].constructor === Object)) {
                for (var i in overall_dict[month][person]) {
                    length = Object.keys(overall_dict[month][person]).length
                    for (var j in overall_dict[month][person][i]) {
                        skill = overall_dict[month][person][i][j][0];
                        FTE = overall_dict[month][person][i][j][1];
                        project = Object.keys(overall_dict[month][person])[j]
                        $('#' + month_index + '_' + person_index + ' tr:last').after('<tr><td>' + person + '</td><td>' + project + '</td><td>' + skill + '</td><td>' + FTE + '</td></tr>')
                    }
                }
            } else {
                $('#' + month_index + '_' + person_index + ' tr:last').after('<tr><td>' + person + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td><td>' + ' ' + '</td></tr>')
            }

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
        months.push(val);
        setTimeout(function() { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    console.log(months);

    $('#container').html('');

    // for (var i = 0; i < projects.length; i++) {
    create_table(people, months);
    // }

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
