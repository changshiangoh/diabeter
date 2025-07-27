import React from 'react';

function TextInputQuestion({ question, placeholder, value, onChange }) {
    return (
        <>
            <div style={{ fontSize: '20px', marginTop: '16px' }}>{question}</div>
            <div style={{ marginTop: '8px' }}>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    style={{
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        width: '200px',
                        textAlign: 'right'
                    }}
                />
            </div>
        </>
    );
}

export default TextInputQuestion;
