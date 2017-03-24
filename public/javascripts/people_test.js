// for people (incomplete)

for (var j = 7; j < row.length; j++) {
    var employee_FTE = row[j]
    var employee_name = people[j - 7]


    if (employee_name in people_dict) {


        if (project in people_dict[employee_name]) {
            // every 13 rows is a new month
            if (i % 13 == 0) {
                console.log('asdf')
                people_dict[employee_name][project][0].push(total_month_skill);
                people_dict[employee_name][project][1].push(total_month_FTE);
                total_month_skill = []
                total_month_FTE = 0
            } else {
                console.log('jkl;')
                total_month_skill.push([skill, employee_FTE])
                total_month_FTE += employee_FTE;
            }

        } else {
            if (i % 13 == 0) {
                people_dict[employee_name][project] = [
                    [total_month_skill],
                    [total_month_FTE]
                ]
                total_month_skill = []
                total_month_FTE = 0
            } else {
                total_month_skill.push([skill, employee_FTE])
                total_month_FTE += employee_FTE;
            }

        }

    } else {
        console.log('asdfadsf')
        people_dict[employee_name] = {}
    }
}

// for skills (slightly more complete, still incomplete)

if (month == previous_month) {
    if (skill in month_skill_dict) {
        employee_FTE_list = []
        month_skill_FTE = month_skill_dict[skill][1]

        for (var j = 7; j < row.length; j++) {
            var employee_FTE = row[j]
            var employee_name = people[j - 7]
            if (employee_FTE > 0) {
                employee_FTE_list.push([employee_name, employee_FTE])
            }
        }
        month_skill_FTE += provided_FTE
        month_skill_dict[skill][0].push(employee_FTE_list);
        month_skill_dict[skill][1] = month_skill_FTE
    } else {
        employee_FTE_list = []

        for (var j = 7; j < row.length; j++) {
            var employee_FTE = row[j]
            var employee_name = people[j - 7]
            if (employee_FTE > 0) {
                employee_FTE_list.push([employee_name, employee_FTE])
            }
        }
        month_skill_dict[skill] = [employee_FTE_list, provided_FTE];
    }
} else {
    console.log(month_skill_dict)
    for (var key in month_skill_dict) {
        if (key in overall_skill_dict) {
            overall_skill_dict[key][0].push(month_skill_dict[key][0])
            overall_skill_dict[key][1].push(month_skill_dict[key][1])
        } else {
            overall_skill_dict[key] = [month_skill_dict[key][0],
                [month_skill_dict[key][1]]
            ]
        }
    }
    month_skill_dict = {};
}
