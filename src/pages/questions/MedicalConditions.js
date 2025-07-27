import React from 'react';
import SingleChoiceQuestion from './components/singleChoiceQuestion';

export const medicalConditionsQuestions = {
    "highBloodPressure": '6. Do you have high blood pressure?',
    "cholesterol": '7. Do you have high cholesterol?',
    "smoker": '8. Are you a smoker?',
    "stroke": '9. Have you ever had a stroke?',
    "heartDisease": '10. Do you have heart disease?',
    "healthCare": '11. Do you have access to healthcare?',
    "difficultyWalking": '12. Do you have difficulty walking or climbing stairs?'
};

function MedicalConditions({ answers, onAnswerChange }) {
    return (
        <>
            {Object.entries(medicalConditionsQuestions).map(([k, v], i) => (
                <SingleChoiceQuestion
                    key={i}
                    question={v}
                    options={['Yes', 'No']}
                    selected={answers[k] || ''}
                    onSelect={(value) => onAnswerChange(k, value)}
                />
            ))}
        </>
    );
}

export default MedicalConditions;
