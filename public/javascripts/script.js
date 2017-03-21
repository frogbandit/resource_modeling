// Initial values
var projects = ["Merck", "Amex"];
var skills = ['Engineering Mgmt', 'Data Science', 'Design', 'Backend'];
var months = ['March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017']

var req_overall_dict = {};
var prov_overall_dict = {};

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


                // required dictionary
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
                        skill_dict[skill].push(provided_FTE);
                    } else {
                        skill_dict[skill] = [provided_FTE];
                    }

                    prov_overall_dict[project] = skill_dict;
                } else {
                    var skill_dict = {};

                    if (skill in skill_dict) {
                        skill_dict[skill].push(provided_FTE);
                    } else {
                        skill_dict[skill] = [provided_FTE];
                    }

                    prov_overall_dict[project] = skill_dict;
                }

            }
            console.log(prov_overall_dict)
            console.log(req_overall_dict)

        } else {
            alert('No data found.');
        }

        console.log(projects);
        console.log(skills);
        console.log(months);

        // For each project, create a chart
        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}



function create_chart(project, skills, months) {
    // Example:
    // create List for Merck Senior Client Mgmt
    // stack is 0, data is [1.10, 0.00, ...] 

    // Testing: 
    // console.log(req_overall_dict[project]['Backend'])   
    // console.log(prov_overall_dict[project]['Backend'])

    // Colors are tol-rainbow
    var colors_list = ['rgb(120,28,129)', 'rgb(72,37,133)', 'rgb(63,81,163)', 'rgb(68,124,191)', 'rgb(81,156,184)',
        'rgb(103,176,146)', 'rgb(131,186,109)', 'rgb(164,190,85)', 'rgb(195,186,69)', 'rgb(219,171,59)',
        'rgb(230,138,51)', 'rgb(228,89,42)', 'rgb(217,33,32)'
    ]

    var months_list = ['March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017',
        'September 2017', 'October 2017'
    ]

    $('#container').append('<div style="height: 800px" id="' + project + '"></div>');

    Highcharts.setOptions({
        colors: colors_list.slice(0, skills.length)
    })

    series_list = []

    month_indices = []

    for (var i = 0; i < months.length; i++) {
        month_indices.push(months_list.indexOf(months[i]))
    }

    // Prepare provided column data
    for (var i = 0; i < skills.length; i++) {
        data_list = []
        for (var j = 0; j < month_indices.length; j++) {
            data_list.push(prov_overall_dict[project][skills[i]][month_indices[j]])
        }
        series_list.push({
            data: data_list,
            name: 'Provided ' + skills[i],
            stack: 0
        });
    }

    // Prepare required column data
    for (var i = 0; i < skills.length; i++) {
        data_list = []
        for (var j = 0; j < month_indices.length; j++) {
            data_list.push(req_overall_dict[project][skills[i]][month_indices[j]])
        }
        series_list.push({
            data: data_list,
            name: 'Required ' + skills[i],
            stack: 1
        });
    }

    chart = Highcharts.chart(project, {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 30,
                beta: 40,
                depth: 110
            }
        },
        plotOptions: {
            column: {
                depth: 40,
                stacking: true,
                grouping: false,
                groupZPadding: 30,
                borderWidth: 0
            }
        },
        series: series_list,
        xAxis: {
            categories: months
        },
        zAxis: {
            min: 0,
            max: 1,
            categories: ['Provided', 'Required'],
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        }

    });

    chart.yAxis[0].axisTitle.attr({
        text: 'FTE'
    });

    chart.setTitle({ text: project });
};


// Dropdown for Projects
$('#projects-dropdown-menu a').on('click', function(event) {

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if ((idx = projects.indexOf(val)) > -1) {
        projects.splice(idx, 1);
        setTimeout(function() { $inp.prop('checked', false) }, 0);
    } else {
        projects.push(val);
        setTimeout(function() { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    console.log(projects);

    $('#container').html('');

    for (var i = 0; i < projects.length; i++) {
        create_chart(projects[i], skills, months);
    }

    return false;
});


// Dropdown for Skills
$('#skills-dropdown-menu a').on('click', function(event) {

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if ((idx = skills.indexOf(val)) > -1) {
        skills.splice(idx, 1);
        setTimeout(function() { $inp.prop('checked', false) }, 0);
    } else {
        skills.push(val);
        setTimeout(function() { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    console.log(skills);

    $('#container').html('');

    for (var i = 0; i < projects.length; i++) {
        create_chart(projects[i], skills, months);
    }

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

    for (var i = 0; i < projects.length; i++) {
        create_chart(projects[i], skills, months);
    }

    return false;
});
