import React from 'react';
import SingleChoiceQuestion from './components/singleChoiceQuestion';

export const lifeStyleQuestions = {
    "physicalActivities": '13. Do you regularly engage in physical activities or sports?',
    "fruits": '14. Do you consume fruits regularly?',
    "vegetables": '15. Do you consume vegetables regularly?',
    "alcohol": '16. Do you consume alcohol?',
};

function Lifestyle({ answers, onAnswerChange }) {
    return (
        <>
            {Object.entries(lifeStyleQuestions).map(([k, v], i) => (
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

export default Lifestyle;
