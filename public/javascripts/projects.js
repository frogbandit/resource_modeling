// Initial values
var projects = ["Merck", "Amex", "Celgene", 'Citadel', 'EMD', 'Two Sigma', 'BB&T', 'PayPal', 'GIC',
    'Design Team General', 'Product Management Team General', 'Foundations Team General', 'SRE Team General',
    'Assembly Team General', 'Concourse Team General', 'Analytics Team General', 'Operations Team General',
    'People Team General', 'Commercial Team General', 'Data Team General', 'Marketing Team General',
    'Envoy Team General', 'Ingest Team General', 'Management and Administration Team General',
    'Assembly Product Development', 'Concourse Product Development', 'Data Product Development', 'Solutions Product Development'
];

var real_projects = ["Merck", "Amex", "Celgene", 'Citadel', 'EMD', 'Two Sigma', 'BB&T', 'PayPal', 'GIC',
    'Design Team General', 'Product Management Team General', 'Foundations Team General', 'SRE Team General',
    'Assembly Team General', 'Concourse Team General', 'Analytics Team General', 'Operations Team General',
    'People Team General', 'Commercial Team General', 'Data Team General', 'Marketing Team General',
    'Envoy Team General', 'Ingest Team General', 'Management and Administration Team General',
    'Assembly Product Development', 'Concourse Product Development', 'Data Product Development', 'Solutions Product Development'
];

var client_projects = ["Merck", "Amex", "Celgene", 'Citadel', 'EMD', 'Two Sigma', 'BB&T', 'PayPal', 'GIC']
var internal_projects = ['Design Team General', 'Product Management Team General', 'Foundations Team General', 'SRE Team General',
    'Assembly Team General', 'Concourse Team General', 'Analytics Team General', 'Operations Team General',
    'People Team General', 'Commercial Team General', 'Data Team General', 'Marketing Team General',
    'Envoy Team General', 'Ingest Team General', 'Management and Administration Team General'
]
var product_projects = ['Assembly Product Development', 'Concourse Product Development', 'Data Product Development', 'Solutions Product Development']

var skills = ['Senior Client Management', 'Project Management / L1 Support', 'Engineering Management', 'Product Management',
    'Data Science', 'Machine Learning Engineering', 'Data Engineering', 'Design', 'Front End Engineering', 'Backend Engineering',
    'Systems Reliability Engineering', 'Quality Engineering', 'Solutions Architect', 'Client Management',
    'Software Engineering General', 'Sales', 'Leadership', 'Support Engineering', 'Recruiting', 'Marketing',
    'Finance', 'Technical Writing'
];
var commercial_skills = ['Senior Client Management', 'Client Management', 'Sales', 'Support Engineering', 'Marketing']
var general_admin_skills = ["Project Management / L1 Support", 'Leadership', 'Recruiting', 'Finance']
var engineering_skills = ['Engineering Management', 'Data Science', 'Machine Learning Engineering', 'Data Engineering',
    'Front End Engineering', 'Backend Engineering', 'Systems Reliability Engineering', 'Quality Engineering',
    'Solutions Architect', 'Software Engineering General'
]
var product_skills = ['Product Management', 'Design', 'Technical Writing']

var months = ['April 2017', 'May 2017', 'June 2017']

var months_list = ['April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017',
    'October 2017', 'November 2017', 'December 2017'
]

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
        // Draft DB: Sample master data cojo
        // spreadsheetId: '1eOyTdGjSxrEs4AMnoX8VO-Y8cWZ46c-9wvz877zR_8w',
        // range: 'Sample master data cojo!A2:CB',

        // Draft 3: Project Staffing
        spreadsheetId: '1Lx6p5J-p419zeFP3cwNJWRP_neDcBDibPal2xpyIBy4',
        range: 'Project Staffing!A2:AA'
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
                var person = row[13]
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

                if (real == '1') {
                    // if Required
                    if (req_or_prov == 'Required') {
                        if (project in real_req_overall_dict) {
                            var skill_dict = real_req_overall_dict[project];

                            skill_dict[skill] = FTE_list

                            real_req_overall_dict[project] = skill_dict;
                            req_overall_dict[project] = skill_dict;

                        } else {
                            var skill_dict = {};

                            skill_dict[skill] = FTE_list

                            real_req_overall_dict[project] = skill_dict;
                            req_overall_dict[project] = skill_dict;
                        }
                    }

                    /// if Provided
                    else {
                        if (project in real_prov_overall_dict) {
                            var skill_dict = real_prov_overall_dict[project];

                            if (skill in skill_dict) {

                                skill_dict[skill][0].push(person)
                                skill_dict[skill][1].push(FTE_list)

                            } else {

                                skill_dict[skill] = [
                                    [person],
                                    [FTE_list]
                                ]
                            }

                            real_prov_overall_dict[project] = skill_dict;
                            prov_overall_dict[project] = skill_dict;
                        } else {
                            var skill_dict = {};

                            if (skill in skill_dict) {

                                skill_dict[skill][0].push(person)
                                skill_dict[skill][1].push(FTE_list)

                            } else {

                                skill_dict[skill] = [
                                    [person],
                                    [FTE_list]
                                ]
                            }

                            real_prov_overall_dict[project] = skill_dict;
                            prov_overall_dict[project] = skill_dict;
                        }
                    }
                }

            }

            // just to make sure the dictionaries are correct
            console.log(real_prov_overall_dict)
            console.log(real_req_overall_dict)
                // console.log(prov_overall_dict)
                // console.log(req_overall_dict)

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



function create_table(projects, skills, months) {


    for (project_index in projects) {
        project = projects[project_index]

        table_string = '<table class="table table-striped" id=' + project_index + '> \
        <colgroup><col class="col-xs-3"></col> \
        <col class="col-xs-1"></col><col class="col-xs-1"></col> \
        <col class="col-xs-1"></col><col class="col-xs-1"></col> \
        <col class="col-xs-1"></col><col class="col-xs-1"></col> \
        <col class="col-xs-1"></col></colgroup> \
        <caption>' + project + '</caption><thead><tr><th>Skills</th>'

        for (month_index in months) {
            month = months[month_index]
            table_string += ('<th>' + month + '</th>')
        }

        table_string += ('</tr></thead><tbody></tbody></table>')

        $('#container').append(table_string);
        sum_provided_list = new Array(months.length).fill(0);
        sum_required_list = new Array(months.length).fill(0);

        for (var i = 0; i < skills.length; i++) {

            skill = skills[i]

            if (real_prov_overall_dict[project] != undefined) {
                if (skill in real_prov_overall_dict[project]) {

                    month_string = '<tr><td rowspan="2">' + skill + '</td>'

                    people_list = real_prov_overall_dict[project][skill]

                    data_list = new Array(months.length).fill(0);

                    // for each of the people for this given skill
                    for (var l = 0; l < people_list[1].length; l++) {
                        person_FTE_list = people_list[1][l]

                        var sum_list = data_list.map(function(num, idx) {
                            return num + person_FTE_list[idx];
                        })

                        data_list = sum_list;
                    }


                    for (month_index in data_list) {

                        month = months_list[month_index]
                        sum_provided = 0
                        if (containsObject(month, months)) {
                            month_string += ('<td data-original-title="Provided" data-container="body" \
                                data-toggle="tooltip" data-placement="left">' + data_list[month_index].toFixed(2) + '</td>')
                            sum_provided += data_list[month_index]
                        }
                        sum_provided_list[month_index] += sum_provided
                    }

                    month_string += '</tr>'
                    month_string += '<tr>'


                    for (month_index in months) {

                        sum_required = 0
                        if (real_req_overall_dict[project][skill] != undefined) {
                            required_FTE = real_req_overall_dict[project][skill][month_index]
                            month_string += ('<td data-original-title="Required" data-container="body" data-toggle="tooltip" data-placement="left">' + required_FTE.toFixed(2) + '</td>')
                            sum_required += required_FTE
                        } else {
                            month_string += ('<td data-original-title="Required" data-container="body" data-toggle="tooltip" data-placement="left">' + 'N/A' + '</td>')
                        }
                        sum_required_list[month_index] += sum_required

                    }
                    month_string += '</tr>'

                    $('#' + project_index + ' tr:last').after(month_string);
                }


            }

        }

        sum_string = '<tr><td rowspan="2">Sum</td>'
        for (sum_index in sum_provided_list) {
            sum_string += ('<td data-original-title="Provided" data-container="body" data-toggle="tooltip" data-placement="left">' + sum_provided_list[sum_index].toFixed(2) + '</td>')
        }
        sum_string += '</tr>'

        sum_string += '<tr>'
        for (sum_index in sum_required_list) {
            sum_string += ('<td data-original-title="Required" data-container="body" data-toggle="tooltip" data-placement="left">' + sum_required_list[sum_index].toFixed(2) + '</td>')
        }
        sum_string += '</tr>'

        $('#' + project_index + ' tr:last').after(sum_string);
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

    $(function() {
        $("[data-toggle='tooltip']").tooltip();
    });

    return false;
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
