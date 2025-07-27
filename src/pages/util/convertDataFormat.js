export function convertDataFormat(answers) {
    const ageGroupMap = {
        '24 or below': 1,
        '25-29': 2,
        '30-34': 3,
        '35-39': 4,
        '40-44': 5,
        '45-49': 6,
        '50-54': 7,
        '55-59': 8,
        '60-64': 9,
        '65-69': 10,
        '70-74': 11,
        '75-79': 12,
        '80 or above': 13,
    };

    const result = {};

    for (const sectionKey in answers) {
        const section = answers[sectionKey];
        for (const key in section) {
            let val = section[key];

            // Normalize yes/no
            if (val === 'Yes') val = 1;
            else if (val === 'No') val = 0;

            // Gender mapping
            else if (key === 'gender') {
                if (val === 'Male') val = 1;
                else if (val === 'Female') val = 0;
            }

            // Age group mapping
            else if (key === 'ageGroup') {
                val = ageGroupMap[val] || 0; // default 0 if no match
            }

            // healthRating extract number
            else if (key === 'healthRating') {
                // extract first digit from string, fallback to 0
                const match = val.match(/\d/);
                val = match ? Number(match[0]) : 0;
            }

            // weight and height to number
            else if (key === 'weight' || key === 'height') {
                val = Number(val) || 0;
            }

            result[key] = val;
        }
    }

    return result;
}

export function convertPythonFormat(answers) {
    const result = convertDataFormat(answers);
    const bmi = +(result.weight / ((result.height) ** 2)).toFixed(1); // Calculate BMI

    const orderedArray = [
        result.gender,               // 'Gender'
        result.ageGroup,             // 'AgeGroup'
        bmi,                         // 'BMI'
        result.healthRating,         // 'HealthRating'
        result.highBloodPressure,    // 'HighBloodPressure'
        result.cholesterol,          // 'HighChol'
        result.smoker,               // 'Smoker'
        result.stroke,               // 'Stroke'
        result.heartDisease,         // 'HeartDisease'
        result.difficultyWalking,    // 'DiffWalk'
        result.healthCare,           // 'Healthcare'
        result.physicalActivities,   // 'Sports'
        result.fruits,               // 'Fruits'
        result.vegetables,           // 'Veggies'
        result.alcohol               // 'Alcohol'
    ];

    return orderedArray;
}
