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

var months = ['April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017',
    'October 2017', 'November 2017', 'December 2017'
]

var num_employees = 73

// Colors are tol-rainbow
var colors_list = ['rgb(120, 28, 129)', 'rgb(87, 25, 127)', 'rgb(87, 25, 127)', 'rgb(65, 57, 146)', 'rgb(63, 81, 163)',
    'rgb(64, 103, 179)', 'rgb(68, 124, 191)', 'rgb(73, 142, 193)', 'rgb(81, 156, 184)', 'rgb(91, 167, 166)',
    'rgb(103, 176, 146)', 'rgb(116, 182, 126)', 'rgb(131, 186, 109)', 'rgb(147, 189, 96)', 'rgb(164, 190, 85)',
    'rgb(180, 189, 76)', 'rgb(195, 186, 69)', 'rgb(209, 180, 64)', 'rgb(219, 171, 59)', 'rgb(226, 157, 55)',
    'rgb(230, 138, 51)', 'rgb(231, 115, 47)', 'rgb(228, 89, 42)', 'rgb(224, 60, 37)', 'rgb(217, 33, 32)'
]

var months_list = ['April 2017', 'May 2017', 'June 2017', 'July 2017', 'August 2017', 'September 2017',
    'October 2017', 'November 2017', 'December 2017'
]

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
        getData();
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
 * Print the projects, skills, employee, month, FTE data from Draft DB:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
function getData() {
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

        // just to check which projects, skills, months the user selected
        console.log(skills);
        console.log(months);
        $('#container').html('');

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }

    }, function(response) {
        alert('Error: ' + response.result.error.message);
    });
}

function create_total_chart(p, prov, req, skills, months) {
    $('#container').append('<div style="height: 800px" id="total_chart"></div>');

    series_list = []

    month_indices = []

    for (var i = 0; i < months.length; i++) {
        month_indices.push(months_list.indexOf(months[i]))
    }


    // if skills is selected:     
    if ($("#projectskill-selection").text().trim() == "Breakdown: Skill") {

        Highcharts.setOptions({
            colors: colors_list.slice(0, skills.length)
        })

        // Prepare total provided column data
        for (var i = 0; i < skills.length; i++) {
            data_list = [0, 0, 0]

            for (var k = 0; k < p.length; k++) {
                if (prov[p[k]] != undefined) {
                    if (prov[p[k]][skills[i]] != undefined) {

                        // for each of the people for this given skill
                        for (var l = 0; l < prov[p[k]][skills[i]][1].length; l++) {
                            person_FTE_list = prov[p[k]][skills[i]][1][l]

                            var sum_list = data_list.map(function(num, idx) {
                                return num + person_FTE_list[idx];
                            })

                            data_list = sum_list;
                        }

                    }
                }
            }

            series_list.push({
                data: data_list,
                name: skills[i],
                stack: 0
            });
        }

        // Prepare total required column data
        for (var i = 0; i < skills.length; i++) {
            data_list = []

            for (var j = 0; j < month_indices.length; j++) {
                sum_projects = 0
                for (var k = 0; k < p.length; k++) {
                    if (req[p[k]][skills[i]] != undefined) {
                        sum_projects += req[p[k]][skills[i]][month_indices[j]]
                    }
                }
                data_list.push(sum_projects)
            }


            series_list.push({
                data: data_list,
                name: "Required " + skills[i],
                stack: 1,
                showInLegend: false
            });
        }
    }
    // if breakdown projects is selected
    else {

        Highcharts.setOptions({
            colors: colors_list.slice(0, p.length)
        })

        // Prepare total provided column data
        for (var i = 0; i < p.length; i++) {
            data_list = [0, 0, 0]

            for (var k = 0; k < skills.length; k++) {
                if (prov[p[i]] != undefined) {
                    if (prov[p[i]][skills[k]] != undefined) {

                        // for each of the people for this given skill
                        for (var l = 0; l < prov[p[i]][skills[k]][1].length; l++) {
                            person_FTE_list = prov[p[i]][skills[k]][1][l]

                            var sum_list = data_list.map(function(num, idx) {
                                return num + person_FTE_list[idx];
                            })

                            data_list = sum_list;
                        }
                    }
                }
            }
            series_list.push({
                data: data_list,
                name: p[i],
                stack: 0
            })
        }

        // Prepare total required column data
        for (var i = 0; i < p.length; i++) {
            data_list = []
            for (var j = 0; j < month_indices.length; j++) {
                sum_skills = 0
                for (var k = 0; k < skills.length; k++) {
                    if (req[p[i]][skills[k]] != undefined) {
                        sum_skills += req[p[i]][skills[k]][month_indices[j]]
                    }
                }
                data_list.push(sum_skills)
            }
            series_list.push({
                data: data_list,
                name: "Required " + p[i],
                stack: 1,
                showInLegend: false
            })
        }
    }

    chart = Highcharts.chart("total_chart", {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 30,
                beta: 40,
                depth: 110
            },
            events: {
                load: function() {
                    this.myTooltip = new Highcharts.Tooltip(this, this.options.tooltip);
                }
            }
        },
        plotOptions: {
            column: {
                depth: 40,
                stacking: true,
                grouping: false,
                groupPadding: 0.2,
                groupZPadding: 10,
                pointPadding: 0.1,
                borderWidth: 0,
                events: {
                    legendItemClick: function() {
                        return false;
                    }
                },
                softThreshold: false
            },
            series: {
                events: {
                    click: function(evt) {
                        tooltip_list = $('.highcharts-tooltip tspan').text().split(';');

                        query_string = ''
                        for (var i = 0; i < tooltip_list.length; i++) {
                            if (tooltip_list[i].includes(',')) {
                                name = tooltip_list[i].split(':').slice(0, 1)
                                query_string += (name + ';');
                            }
                        }


                        if (query_string != '') {
                            location.href = '/people?people=' + query_string.substring(0, query_string.length - 1);
                        } else {

                            if (containsObject(this.name, p)) {
                                query_string = this.name + ';' + evt.point.category

                                if (query_string != '') {
                                    location.href = '/projects?projects=' + query_string.substring(0, query_string.length);
                                }
                            }

                        }

                    }
                }

            }
        },
        series: series_list,
        xAxis: {
            categories: months,
            labels: {
                align: "right"
            }
        },
        yAxis: {
            min: 0,
            minRange: 0.1

        },
        zAxis: {
            min: 0,
            max: 1,
            labels: {
                align: "center"
            },
            categories: ['Provided', 'Required'],
        },
        credits: {
            enabled: false
        },
        tooltip: {
            // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.series}</b> ({point.percentage:.0f}%)<br/>',

            formatter: function() {

                // for skill breakdown
                if ($("#projectskill-selection").text().trim() == "Breakdown: Skill") {
                    req_or_prov = this.point.series.name.substr(0, this.point.series.name.indexOf(' '));

                    var delta;
                    listed_employees = []

                    if (req_or_prov != 'Required') {
                        skill = this.point.series.name;
                        month_index = months_list.indexOf(this.point.category);
                        listed_employees_dict = {}
                        for (var i = 0; i < p.length; i++) {
                            if (prov[p[i]] != undefined) {
                                if (prov[p[i]][skill] != undefined) {
                                    employees = prov[p[i]][skill][0]
                                    employees_FTEs = prov[p[i]][skill][1]
                                    for (var j = 0; j < employees.length; j++) {
                                        employee_name = employees[j]
                                        employee_FTE = employees_FTEs[j][month_index]

                                        if (employee_name in listed_employees_dict) {
                                            listed_employees_dict[employee_name] += employee_FTE;
                                        } else {
                                            listed_employees_dict[employee_name] = employee_FTE;
                                        }
                                    }

                                }
                            }
                        }

                        for (key in listed_employees_dict) {
                            listed_employees.push('<br/>' + '<b>' + key + '</b>: ' + listed_employees_dict[key].toFixed(2) + ';')
                        }

                        required_total_FTE = 0
                        for (var i = 0; i < p.length; i++) {
                            if (req[p[i]][skill] != undefined) {
                                required_total_FTE += req[p[i]][skill][month_index]
                            }
                        }

                        delta = this.point.y - required_total_FTE
                    } else {
                        skill = this.point.series.name.substr(this.point.series.name.indexOf(' ') + 1);
                        month_index = months_list.indexOf(this.point.category)

                        provided_total_FTE = 0
                        data_list = [0, 0, 0]
                        for (var i = 0; i < p.length; i++) {
                            if (prov[p[i]] != undefined) {
                                if (prov[p[i]][skill] != undefined) {

                                    // for each of the people for this given skill
                                    for (var l = 0; l < prov[p[i]][skill][1].length; l++) {
                                        person_FTE_list = prov[p[i]][skill][1][l]

                                        var sum_list = data_list.map(function(num, idx) {
                                            return num + person_FTE_list[idx];
                                        })

                                        data_list = sum_list;
                                    }
                                    provided_total_FTE = data_list[month_index]
                                }
                            }
                        }
                        delta = provided_total_FTE - this.point.y

                    }

                    listed_employees_string = ''
                    for (var i = 0; i < listed_employees.length; i++) {
                        listed_employees_string += listed_employees[i]
                    }
                    return '<span style="color:' + this.series.color + ';">' + this.point.series.name + "</span>: " + this.point.y.toFixed(2) + ';' +
                        listed_employees_string + '<br/>' + '<b>Delta: </b>' + delta.toFixed(2);
                }

                // for project
                else {
                    req_or_prov = this.point.series.name.substr(0, this.point.series.name.indexOf(' '));

                    var delta;
                    listed_employees = []

                    if (req_or_prov != 'Required') {
                        project = this.point.series.name;
                        month_index = months_list.indexOf(this.point.category);

                        required_total_FTE = 0
                        for (var i = 0; i < skills.length; i++) {
                            if (req[project][skills[i]] != undefined) {
                                required_total_FTE += req[project][skills[i]][month_index]
                            }
                        }

                        delta = this.point.y - required_total_FTE
                    } else {
                        project = this.point.series.name.substr(this.point.series.name.indexOf(' ') + 1);
                        month_index = months_list.indexOf(this.point.category)

                        provided_total_FTE = 0
                        data_list = [0, 0, 0]
                        for (var i = 0; i < skills.length; i++) {
                            if (prov[project] != undefined) {
                                if (prov[project][skills[i]] != undefined) {

                                    // for each of the people for this given skill
                                    for (var l = 0; l < prov[project][skills[i]][1].length; l++) {
                                        person_FTE_list = prov[project][skills[i]][1][l]

                                        var sum_list = data_list.map(function(num, idx) {
                                            return num + person_FTE_list[idx];
                                        })

                                        data_list = sum_list;
                                    }
                                    provided_total_FTE = data_list[month_index]
                                }
                            }

                        }
                        delta = provided_total_FTE - this.point.y
                    }

                    return '<span style="color:' + this.series.color + ';">' + this.point.series.name + "</span>: " + this.point.y.toFixed(2) +
                        '<br/>' + '<b>Delta: </b>' + delta.toFixed(2);
                }
            }
        }

    });

    if (chart.yAxis[0].axisTitle) {
        chart.yAxis[0].axisTitle.attr({
            text: 'FTE'
        });
    }

    chart.setTitle({ text: "Total Projects: " + p.join(', ') });
}


// Dropdown for Projects
$('.client, .internal, .productDevelopment').on('click', function(event) {
    var $target = $(event.currentTarget).parent('a'),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;


    if ((idx = projects.indexOf(val)) > -1) {
        projects.splice(idx, 1);
        real_projects.splice(idx, 1);
        setTimeout(function() { $inp.prop('checked', false) }, 0);
    } else {
        projects.push(val);
        real_projects.push(val);
        setTimeout(function() { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    $('#container').html('');

    if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
        create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        console.log(projects);
    } else {
        create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        console.log(real_projects);
    }

    return false;
});


// Dropdown for Skills
$('.commercial, .generalAdmin, .engineering, .product').on('click', function(event) {

    var $target = $(event.currentTarget).parent('a'),
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

    if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
        create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
    } else {
        create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
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
        months.splice(months_list.indexOf(val), 0, val);
        setTimeout(function() { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    console.log(months);

    $('#container').html('');

    if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
        create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
    } else {
        create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
    }

    return false;
});


// Projects
$("#checkAllClient").on('click', function(event) {
    if ($('#checkAllClient:checked').length < 1) {
        setTimeout(function() { $('#checkAllClient').prop('checked', false) }, 0);
        setTimeout(function() { $('.client').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < client_projects.length; i++) {
            if ((idx = projects.indexOf(client_projects[i])) > -1) {
                projects.splice(idx, 1);
            }
            if ((idx = real_projects.indexOf(client_projects[i])) > -1) {
                real_projects.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }

    } else {
        setTimeout(function() { $('#checkAllClient').prop('checked', true) }, 0);
        setTimeout(function() { $('.client').prop('checked', true) }, 0);


        $('#container').html('');

        projects = projects.concat(client_projects).unique();
        real_projects = real_projects.concat(client_projects).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
            console.log(projects);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
            console.log(real_projects);
        }
    }
});

$("#checkAllInternal").on('click', function(event) {
    if ($('#checkAllInternal:checked').length < 1) {
        setTimeout(function() { $('#checkAllInternal').prop('checked', false) }, 0);
        setTimeout(function() { $('.internal').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < internal_projects.length; i++) {
            if ((idx = projects.indexOf(internal_projects[i])) > -1) {
                projects.splice(idx, 1);
            }
            if ((idx = real_projects.indexOf(internal_projects[i])) > -1) {
                real_projects.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    } else {
        setTimeout(function() { $('#checkAllInternal').prop('checked', true) }, 0);
        setTimeout(function() { $('.internal').prop('checked', true) }, 0);


        $('#container').html('');

        projects = projects.concat(internal_projects).unique();
        real_projects = real_projects.concat(internal_projects).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
            console.log(projects);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
            console.log(real_projects);
        }
    }
});

$("#checkAllProductDevelopment").on('click', function(event) {
    if ($('#checkAllProductDevelopment:checked').length < 1) {
        setTimeout(function() { $('#checkAllProductDevelopment').prop('checked', false) }, 0);
        setTimeout(function() { $('.productDevelopment').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < product_projects.length; i++) {
            if ((idx = projects.indexOf(product_projects[i])) > -1) {
                projects.splice(idx, 1);
            }
            if ((idx = real_projects.indexOf(product_projects[i])) > -1) {
                real_projects.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    } else {
        setTimeout(function() { $('#checkAllProductDevelopment').prop('checked', true) }, 0);
        setTimeout(function() { $('.productDevelopment').prop('checked', true) }, 0);


        $('#container').html('');

        projects = projects.concat(product_projects).unique();
        real_projects = real_projects.concat(product_projects).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
            console.log(projects);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
            console.log(real_projects);
        }
    }
});


// Skills
$("#checkAllCommercial").on('click', function(event) {
    if ($('#checkAllCommercial:checked').length < 1) {
        setTimeout(function() { $('#checkAllCommercial').prop('checked', false) }, 0);
        setTimeout(function() { $('.commercial').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < commercial_skills.length; i++) {
            if ((idx = skills.indexOf(commercial_skills[i])) > -1) {
                skills.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    } else {
        setTimeout(function() { $('#checkAllCommercial').prop('checked', true) }, 0);
        setTimeout(function() { $('.commercial').prop('checked', true) }, 0);


        $('#container').html('');

        skills = skills.concat(commercial_skills).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    }
    console.log(skills);
});

$("#checkAllGeneralAdmin").on('click', function(event) {
    if ($('#checkAllGeneralAdmin:checked').length < 1) {
        setTimeout(function() { $('#checkAllGeneralAdmin').prop('checked', false) }, 0);
        setTimeout(function() { $('.generalAdmin').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < general_admin_skills.length; i++) {
            if ((idx = skills.indexOf(general_admin_skills[i])) > -1) {
                skills.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    } else {
        setTimeout(function() { $('#checkAllGeneralAdmin').prop('checked', true) }, 0);
        setTimeout(function() { $('.generalAdmin').prop('checked', true) }, 0);


        $('#container').html('');

        skills = skills.concat(general_admin_skills).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    }
    console.log(skills);
});

$("#checkAllEngineering").on('click', function(event) {
    if ($('#checkAllEngineering:checked').length < 1) {
        setTimeout(function() { $('#checkAllEngineering').prop('checked', false) }, 0);
        setTimeout(function() { $('.engineering').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < engineering_skills.length; i++) {
            if ((idx = skills.indexOf(engineering_skills[i])) > -1) {
                skills.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    } else {
        setTimeout(function() { $('#checkAllEngineering').prop('checked', true) }, 0);
        setTimeout(function() { $('.engineering').prop('checked', true) }, 0);


        $('#container').html('');

        skills = skills.concat(engineering_skills).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    }
    console.log(skills);
});

$("#checkAllProduct").on('click', function(event) {
    if ($('#checkAllProduct:checked').length < 1) {
        setTimeout(function() { $('#checkAllProduct').prop('checked', false) }, 0);
        setTimeout(function() { $('.product').prop('checked', false) }, 0);

        $('#container').html('');

        for (var i = 0; i < product_skills.length; i++) {
            if ((idx = skills.indexOf(product_skills[i])) > -1) {
                skills.splice(idx, 1);
            }
        }

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    } else {
        setTimeout(function() { $('#checkAllProduct').prop('checked', true) }, 0);
        setTimeout(function() { $('.product').prop('checked', true) }, 0);


        $('#container').html('');

        skills = skills.concat(product_skills).unique();

        if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
            create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
        } else {
            create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
        }
    }
    console.log(skills);
});



Array.prototype.unique = function() {
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) {
        for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}


$("#axes li a").click(function() {
    $("#axes-selection").html($(this).text() + '<span class="caret"></span>');
    $("#axes-selection").val($(this).text());
    $('#container').html('');
    if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
        create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
    } else {
        create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
    }
});

$("#projectskill li a").click(function() {
    $("#projectskill-selection").html($(this).text() + '<span class="caret"></span>');
    $("#projectskill-selection").val($(this).text());
    $('#container').html('');
    if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
        create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
    } else {
        create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
    }
});

$("#hypothetical li a").click(function() {
    $("#hypothetical-selection").html($(this).text() + '<span class="caret"></span>');
    $("#hypothetical-selection").val($(this).text());
    $('#container').html('');
    if ($("#hypothetical-selection").text().trim() == "Hypothetical On") {
        create_total_chart(projects, prov_overall_dict, req_overall_dict, skills, months);
    } else {
        create_total_chart(real_projects, real_prov_overall_dict, real_req_overall_dict, skills, months);
    }
});
