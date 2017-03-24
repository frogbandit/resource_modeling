// Initial values
var projects = ["Merck", "Marketing Core"];
var client_projects = ["Merck", "Amex", "Celgene"]
var internal_projects = ["Marketing Core", "General Admin Core"]
var product_projects = ["Concourse Core", "Assembly Core", "Foundations Core"]

var skills = ['Engineering Mgmt', 'Data Science', 'Design', 'Backend'];
var months = ['March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017']
var num_employees = 73

// Colors are tol-rainbow
var colors_list = ['rgb(120,28,129)', 'rgb(72,37,133)', 'rgb(63,81,163)', 'rgb(68,124,191)', 'rgb(81,156,184)',
    'rgb(103,176,146)', 'rgb(131,186,109)', 'rgb(164,190,85)', 'rgb(195,186,69)', 'rgb(219,171,59)',
    'rgb(230,138,51)', 'rgb(228,89,42)', 'rgb(217,33,32)'
]

var months_list = ['March 2017', 'April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017',
    'September 2017', 'October 2017'
]

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
        create_total_chart(projects, skills, months);

    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}

function create_total_chart(projects, skills, months) {
    $('#container').append('<div style="height: 800px" id="total_chart"></div>');

    Highcharts.setOptions({
        colors: colors_list.slice(0, skills.length)
    })

    series_list = []

    month_indices = []

    for (var i = 0; i < months.length; i++) {
        month_indices.push(months_list.indexOf(months[i]))
    }

    // Prepare total provided column data
    for (var i = 0; i < skills.length; i++) {
        data_list = []
        
        for (var j = 0; j < month_indices.length; j++) {
            sum_projects = 0
            for (var k = 0; k < projects.length; k++){
                sum_projects += prov_overall_dict[projects[k]][skills[i]][1][month_indices[j]]
            }
            data_list.push(sum_projects)
        }

        series_list.push({
            data: data_list,
            name: 'Provided ' + skills[i],
            stack: 0
        });
    }

    // Prepare total required column data
    for (var i = 0; i < skills.length; i++) {
        data_list = []
        
        for (var j = 0; j < month_indices.length; j++) {
            sum_projects = 0
            for (var k = 0; k < projects.length; k++){
                sum_projects += req_overall_dict[projects[k]][skills[i]][month_indices[j]]
            }
            data_list.push(sum_projects)
        }

        series_list.push({
            data: data_list,
            name: 'Required ' + skills[i],
            stack: 1
        });
    }

    chart = Highcharts.chart("total_chart", {
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
            // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.series}</b> ({point.percentage:.0f}%)<br/>',

            formatter: function() {

                req_or_prov = this.point.series.name.substr(0, this.point.series.name.indexOf(' '));
                skill = this.point.series.name.substr(this.point.series.name.indexOf(' ') + 1);
                month_index = months_list.indexOf(this.point.category)
                if (req_or_prov == 'Provided') {
                    listed_employees_dict = {}
                    for (var i = 0; i < projects.length; i++){
                        employee_FTEs = prov_overall_dict[projects[i]][skill][0][month_index]
                        for (var j = 0; j < employee_FTEs.length; j++) {
                            employee_FTE = parseFloat(employee_FTEs[j][1])
                            employee_name = employee_FTEs[j][0]
                            if (employee_FTE > 0) {
                                if (employee_name in listed_employees_dict){
                                    listed_employees_dict[employee_name] += employee_FTE;
                                }
                                else{
                                    listed_employees_dict[employee_name] = employee_FTE;
                                }
                            }
                        }
                    }

                    listed_employees = []
                    for (key in listed_employees_dict){
                        listed_employees.push('<br/>' + '<b>' + key + '</b>: ' + listed_employees_dict[key].toFixed(2))
                    }
                    return '<span style="color:' + this.series.color + ';">' + this.point.series.name + "</span>: " + this.point.y.toFixed(2) + listed_employees;
                } else {
                    return '<span style="color:' + this.series.color + ';">' + this.point.series.name + "</span>: " + this.point.y.toFixed(2);
                }

            }
        }

    });

    chart.yAxis[0].axisTitle.attr({
        text: 'FTE'
    });

    chart.setTitle({ text: "Total Projects" });
}


function create_chart(project, skills, months) {
    // Example:
    // create List for Merck Senior Client Mgmt
    // stack is 0, data is [1.10, 0.00, ...] 

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
            data_list.push(prov_overall_dict[project][skills[i]][1][month_indices[j]])
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
            // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.series}</b> ({point.percentage:.0f}%)<br/>',

            formatter: function() {

                req_or_prov = this.point.series.name.substr(0, this.point.series.name.indexOf(' '));
                skill = this.point.series.name.substr(this.point.series.name.indexOf(' ') + 1);
                month_index = months_list.indexOf(this.point.category)
                if (req_or_prov == 'Provided') {

                    listed_employees = []
                    employee_FTEs = prov_overall_dict[project][skill][0][month_index]
                    for (var i = 0; i < employee_FTEs.length; i++) {
                        employee_FTE = employee_FTEs[i][1]
                        employee_name = employee_FTEs[i][0]
                        if (employee_FTE > 0) {
                            listed_employees.push('<br/>' + '<b>' + employee_name + '</b>: ' + employee_FTE)
                        }
                    }
                    return '<span style="color:' + this.series.color + ';">' + this.point.series.name + "</span>: " + this.point.y + listed_employees;
                } else {
                    return '<span style="color:' + this.series.color + ';">' + this.point.series.name + "</span>: " + this.point.y;
                }

            }
        }

    });

    chart.yAxis[0].axisTitle.attr({
        text: 'FTE'
    });

    chart.setTitle({ text: project });
};


// Dropdown for Projects
$('.client, .internal, .product').on('click', function(event) {
    var $target = $(event.currentTarget).parent('a'),
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

    create_total_chart(projects, skills, months);

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

    create_total_chart(projects, skills, months);

    return false;
});


// Dropdown for Months
$('#months-dropdown-menu a').on('click', function(event) {

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;
    console.log($target);

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

    create_total_chart(projects, skills, months);

    return false;
});

$("#checkAllClient").on('click', function (event) {
    if ($('#checkAllClient:checked').length < 1){
        setTimeout(function() { $('#checkAllClient').prop('checked', false) }, 0);
        setTimeout(function() { $('.client').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < client_projects.length; i++){
            if ((idx = projects.indexOf(client_projects[i])) > -1) {
                projects.splice(idx, 1);
            }
        }

        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

        create_total_chart(projects, skills, months);
    }
    else{
        setTimeout(function() { $('#checkAllClient').prop('checked', true) }, 0);
        setTimeout(function() { $('.client').prop('checked', true) }, 0);


        $('#container').html('');

        projects = projects.concat(client_projects).unique();

        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

        create_total_chart(projects, skills, months);
    }   
    console.log(projects);        
});

$("#checkAllInternal").on('click', function (event) {
    if ($('#checkAllInternal:checked').length < 1){
        setTimeout(function() { $('#checkAllInternal').prop('checked', false) }, 0);
        setTimeout(function() { $('.internal').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < internal_projects.length; i++){
            if ((idx = projects.indexOf(internal_projects[i])) > -1) {
                projects.splice(idx, 1);
            }
        }

        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

        create_total_chart(projects, skills, months);
    }
    else{
        setTimeout(function() { $('#checkAllInternal').prop('checked', true) }, 0);
        setTimeout(function() { $('.internal').prop('checked', true) }, 0);


        $('#container').html('');

        projects = projects.concat(internal_projects).unique();

        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

        create_total_chart(projects, skills, months);
    } 
    console.log(projects);       
});

$("#checkAllProduct").on('click', function (event) {
    if ($('#checkAllProduct:checked').length < 1){
        setTimeout(function() { $('#checkAllProduct').prop('checked', false) }, 0);
        setTimeout(function() { $('.product').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < product_projects.length; i++){
            if ((idx = projects.indexOf(product_projects[i])) > -1) {
                projects.splice(idx, 1);
            }
        }

        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

        create_total_chart(projects, skills, months);
    }
    else{
        setTimeout(function() { $('#checkAllProduct').prop('checked', true) }, 0);
        setTimeout(function() { $('.product').prop('checked', true) }, 0);


        $('#container').html('');

        projects = projects.concat(product_projects).unique();

        for (var i = 0; i < projects.length; i++) {
            create_chart(projects[i], skills, months);
        }

        create_total_chart(projects, skills, months);
    }        
    console.log(projects);   
});


Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};
