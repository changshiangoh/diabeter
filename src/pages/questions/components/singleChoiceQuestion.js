import React from 'react';

function SingleChoiceQuestion({ question, options, selected, onSelect }) {
    return (
        <>
            <div style={{ fontSize: '20px', marginTop: '16px' }}> {question}</div >
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '8px', fontSize: '20px' }}>
                {options.map((option, index) => (
                    <label key={index} style={{ marginBottom: '8px' }}>
                        <input
                            type="radio"
                            name={question}
                            checked={selected === option}
                            onChange={() => onSelect(option)}
                        />{' '}
                        {option}
                    </label>
                ))}
            </div>
        </>
    );
}

export default SingleChoiceQuestion;
