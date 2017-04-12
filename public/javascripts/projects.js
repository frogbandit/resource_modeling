// Initial values
var projects = ["Merck", "Amex", "Celgene", "Marketing Core", "General Admin Core", "Concourse Core", "Assembly Core", "Foundations Core"];
var real_projects = ["Merck", "Amex", "Celgene", "Marketing Core", "General Admin Core", "Concourse Core", "Assembly Core", "Foundations Core"];
var skills = ['Project Mgmt / L1 Support', 'Senior Client Mgmt', 'Engineering Mgmt', 'Data Science', 'Design', 'Backend'];


var months = ['March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017']
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

var req_overall_dict = {};
var prov_overall_dict = {};

var real_req_overall_dict = {};
var real_prov_overall_dict = {};
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


                // if the project is real
                if (real == "1") {
                    // add required FTE to a dictionary of skills within a dictionary of projects
                    if (project in real_req_overall_dict) {
                        var skill_dict = real_req_overall_dict[project];

                        if (skill in skill_dict) {
                            skill_dict[skill].push(required_FTE);

                        } else {
                            skill_dict[skill] = [required_FTE];
                        }

                        real_req_overall_dict[project] = skill_dict;
                        req_overall_dict[project] = skill_dict;

                    } else {
                        var skill_dict = {};

                        if (skill in skill_dict) {
                            skill_dict[skill].push(required_FTE);
                        } else {
                            skill_dict[skill] = [required_FTE];
                        }

                        real_req_overall_dict[project] = skill_dict;
                        req_overall_dict[project] = skill_dict;
                    }

                    // add provided FTE and names of employees to a dictionary of skills within a dictionary of projects
                    if (project in real_prov_overall_dict) {
                        var skill_dict = real_prov_overall_dict[project];

                        if (skill in skill_dict) {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill][0].push(employee_FTE_list);
                            skill_dict[skill][1].push(provided_FTE);
                        } else {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill] = [
                                [employee_FTE_list],
                                [provided_FTE]
                            ];
                        }

                        real_prov_overall_dict[project] = skill_dict;
                        prov_overall_dict[project] = skill_dict;
                    } else {
                        var skill_dict = {};

                        if (skill in skill_dict) {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill][0].push(employee_FTE_list);
                            skill_dict[skill][1].push(provided_FTE);

                        } else {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill] = [
                                [employee_FTE_list],
                                [provided_FTE]
                            ];
                        }

                        real_prov_overall_dict[project] = skill_dict;
                        prov_overall_dict[project] = skill_dict;
                    }
                }

                //if the project is hypothetical
                else {
                    // do the same thing with the hypothetical dictionaries instead
                    if (project in req_overall_dict) {
                        var skill_dict = req_overall_dict[project];

                        if (skill in skill_dict) {
                            skill_dict[skill].push(required_FTE);

                        } else {
                            skill_dict[skill] = [required_FTE];
                        }

                        req_overall_dict[project] = skill_dict;

                    } else {
                        var skill_dict = {};

                        if (skill in skill_dict) {
                            skill_dict[skill].push(required_FTE);
                        } else {
                            skill_dict[skill] = [required_FTE];
                        }

                        req_overall_dict[project] = skill_dict;
                    }

                    // provided dictionary
                    if (project in prov_overall_dict) {
                        var skill_dict = prov_overall_dict[project];

                        if (skill in skill_dict) {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill][0].push(employee_FTE_list);
                            skill_dict[skill][1].push(provided_FTE);
                        } else {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill] = [
                                [employee_FTE_list],
                                [provided_FTE]
                            ];
                        }

                        prov_overall_dict[project] = skill_dict;
                    } else {
                        var skill_dict = {};

                        if (skill in skill_dict) {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill][0].push(employee_FTE_list);
                            skill_dict[skill][1].push(provided_FTE);

                        } else {
                            employee_FTE_list = []

                            for (var j = 7; j < row.length; j++) {
                                var employee_FTE = row[j]
                                var employee_name = people[j - 7]
                                employee_FTE_list.push([employee_name, employee_FTE])
                            }
                            skill_dict[skill] = [
                                [employee_FTE_list],
                                [provided_FTE]
                            ];
                        }

                        prov_overall_dict[project] = skill_dict;
                    }
                }

            }

            // just to make sure the dictionaries are correct
            console.log(real_prov_overall_dict)
            console.log(real_req_overall_dict)
            console.log(prov_overall_dict)
            console.log(req_overall_dict)

        } else {
            alert('No data found.');
        }

        console.log(projects);
        console.log(skills);
        console.log(months);


        var socket = io.connect();

        socket.on('query', function(msg) {
            if (msg != null) {
                projects = [msg.split(';')[0]];
                months = [msg.split(';')[1]]
            }
            create_table(projects, skills, months)

            $(function() {
                $("[data-toggle='tooltip']").tooltip();
            });
        });


    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}



function create_table(projects, skills, months) {


    for (project_index in projects) {
        project = projects[project_index]

        table_string = '<table class="table table-striped" id=' + project_index + '> \
        <caption>' + project + '</caption><thead><tr><th>Skills</th>'

        for (month_index in months) {
            month = months[month_index]
            table_string += ('<th>' + month + '</th>')
        }

        table_string += ('</tr></thead><tbody></tbody></table>')

        $('#container').append(table_string);

        for (var i = 0; i < skills.length; i++) {
            skill = skills[i]

            if (skill in real_prov_overall_dict[project]) {

                month_string = '<tr><td rowspan="2">' + skill + '</td>'
                for (month_index in months) {
                    provided_FTE = real_prov_overall_dict[project][skill][1][month_index]
                    month_string += ('<td data-original-title="Provided" data-container="body" data-toggle="tooltip" data-placement="left">' + provided_FTE + '</td>')
                }
                month_string += '</tr>'

                month_string += '<tr>'
                for (month_index in months) {
                    required_FTE = real_req_overall_dict[project][skill][month_index]
                    month_string += ('<td data-original-title="Required" data-container="body" data-toggle="tooltip" data-placement="left">' + required_FTE + '</td>')
                }
                month_string += '</tr>'


                $('#' + project_index + ' tr:last').after(month_string);

            }
        }

    }

};



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

    // for (var i = 0; i < projects.length; i++) {
    create_table(projects, skills, months);
    // }

    return false;
});
