
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
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementById('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
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
        if (range.values.length > 0) {

            appendPre('Real, Month, Project, Skill, Staffing Status, Required FTE, Provided FTE');

            for (i = 0; i < range.values.length; i++) {
                var row = range.values[i];
                var real = row[0]
                var month = row[1]
                var project = row[2]
                var skill = row[3]
                var staffing_status = parseFloat(row[4])
                var required_FTE = parseFloat(row[5])
                var provided_FTE = parseFloat(row[6])

                appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] + ', ' + row[4] + ', ' + row[5] + ', ' + row[6]);
                
                
                // required dictionary

                if (project in req_overall_dict) {
                    var skill_dict = req_overall_dict[project];

                    if (skill in skill_dict) {
                        skill_dict[skill].push(required_FTE);
                    }

                    else{
                        skill_dict[skill] = [required_FTE];
                    }

                    req_overall_dict[project] = skill_dict;
                }

                else {
                    var skill_dict = {};

                    if (skill in skill_dict) {
                        skill_dict[skill].push(required_FTE);
                    }
                    else{
                        skill_dict[skill] = [required_FTE];
                    }

                    req_overall_dict[project] = skill_dict;
                }

                // provided dictionary

                if (project in prov_overall_dict) {
                    var skill_dict = prov_overall_dict[project];

                    if (skill in skill_dict) {
                        skill_dict[skill].push(provided_FTE);
                    }

                    else{
                        skill_dict[skill] = [provided_FTE];
                    }

                    prov_overall_dict[project] = skill_dict;
                }

                else {
                    var skill_dict = {};

                    if (skill in skill_dict) {
                        skill_dict[skill].push(provided_FTE);
                    }
                    else{
                        skill_dict[skill] = [provided_FTE];
                    }

                    prov_overall_dict[project] = skill_dict;
                }

            }

            console.log(req_overall_dict);
            console.log(prov_overall_dict);
        } else {
            appendPre('No data found.');
        }

        create_chart()



    }, function(response) {
        appendPre('Error: ' + response.result.error.message);
    });
}






function create_chart() {

    // Example:
    // create List for Merck Senior Client Mgmt
    // stack is 0, data is [1.10, 0.00, ...] 
    console.log(req_overall_dict['Merck']['Backend'])   
    console.log(prov_overall_dict['Merck']['Backend'])


    chart = Highcharts.chart('container', {
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
				enabled: true,
                alpha: 15,
                beta: 15,
                depth: 110
            }
        },
        plotOptions: {
            column: {
                depth: 40,
                stacking: true,
                grouping: false,
                groupZPadding: 30            
            }
        },
        series: [{
            data: prov_overall_dict['Merck']['Senior Client Mgmt'],
            stack: 0,
            name: 'Provided Senior Client Mgmt'
        }, {
            data: prov_overall_dict['Merck']['Data Science'],
            stack: 0,
            name: 'Provided Data Science'
        }, {
            data: prov_overall_dict['Merck']['Backend'],
            stack: 0,
            name: 'Provided Backend'
        }, {
            data: prov_overall_dict['Merck']['Engineering Mgmt'],
            stack: 0,
            name: 'Provided Engineering Mgmt'
        }, {
            data: req_overall_dict['Merck']['Senior Client Mgmt'],
            stack: 1,
            name: 'Required Senior Client Mgmt'
        }, {
            data: req_overall_dict['Merck']['Data Science'],
            stack: 1,
            name: 'Required Data Science'
        }, {
            data: req_overall_dict['Merck']['Backend'],
            stack: 1,
            name: 'Required Backend'
        }, {
            data: req_overall_dict['Merck']['Engineering Mgmt'],
            stack: 1,
            name: 'Required Engineering Mgmt'
        }],
        xAxis: {
            categories: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        zAxis: {
            offset: 30
        },
        credits: {
            enabled: false
        }


    });

    chart.yAxis[0].axisTitle.attr({
        text: 'FTE'
    });

    chart.setTitle({text: "Enigma Resource Modeling"});



};




