import React from 'react';
import SingleChoiceQuestion from './components/singleChoiceQuestion.js';
import TextInputQuestion from './components/textInputQuestion.js';

export const demographicsQuestions = {
    "gender": '1. What is your gender?',
    "ageGroup": '2. What is your age group?',
    "weight": '3. What is your weight? (Please enter in kilograms)',
    "height": '4. What is your height? (Please enter in meters)',
    "healthRating": '5. How would you rate your general health? \n (1 = Excellent, 5 = Poor)'
};

const genderOptions = ['Male', 'Female'];
const ageGroups = [
    '24 or below', '25-29', '30-34', '35-39', '40-44', '45-49',
    '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80 or above'
];
const healthRatings = [
    '1 - Excellent', '2 - Good', '3 - Average', '4 - Fair', '5 - Poor'
];

function Demographics({ answers = {}, onAnswerChange }) {
    return (
        <>
            <SingleChoiceQuestion
                question={demographicsQuestions['gender']}
                options={genderOptions}
                selected={answers.gender}
                onSelect={(val) => onAnswerChange('gender', val)}
            />

            <SingleChoiceQuestion
                question={demographicsQuestions['ageGroup']}
                options={ageGroups}
                selected={answers.ageGroup}
                onSelect={(val) => onAnswerChange('ageGroup', val)}
            />

            <TextInputQuestion
                question={demographicsQuestions['weight']}
                placeholder="kg"
                value={answers.weight || ''}
                onChange={(val) => onAnswerChange('weight', val)}
            />

            <TextInputQuestion
                question={demographicsQuestions['height']}
                placeholder="m"
                value={answers.height || ''}
                onChange={(val) => onAnswerChange('height', val)}
            />

            <SingleChoiceQuestion
                question={demographicsQuestions['healthRating']}
                options={healthRatings}
                selected={answers.healthRating}
                onSelect={(val) => onAnswerChange('healthRating', val)}
            />
        </>
    );
}

export default Demographics;
