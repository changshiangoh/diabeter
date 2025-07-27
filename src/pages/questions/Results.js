import React from 'react';

function Result({ answers, iframeUrl, risk, suggestion }) {
    return (
        <>
            <div style={{ fontSize: '24px', fontWeight: 'bold', borderBottom: '1px solid #DCD0A8', width: '315px' }}>Summary of Your Responses</div>
            <ul style={{ listStyle: 'none', paddingLeft: '8px', fontSize: '20px' }}>
                {Object.entries(answers).map(([sectionKey, sectionValue]) =>
                    Object.entries(sectionValue).map(([questionKey, response]) => (
                        <li key={`${sectionKey}-${questionKey}`}>
                            <strong>{formatLabel(questionKey)}:</strong> {response}
                        </li>
                    ))
                )}
            </ul>
            <div style={{ fontSize: '24px', fontWeight: 'bold', borderBottom: '1px solid #DCD0A8', width: '80px' }}>Results</div>

            {/* Sample Output */}
            {!iframeUrl && <div style={{ fontSize: '16px', textAlign: 'center', paddingTop: '16px' }}>This is a sample output. Please connect to the Python model to see the actual results. In order to connect to the Python model, please clone the repo from github and do npm start.</div>}
            {!iframeUrl && <div style={{ fontSize: '20px', textAlign: 'center', paddingTop: '16px' }}>Predicted Risk Probability and Main Risk Factors for Diabetes</div>}
            {!iframeUrl && (
                <div style={{ color: "#ffffff", marginTop: '16px', padding: '8px 16px' }}>
                    <iframe
                        src={`${process.env.PUBLIC_URL}/22229b92b1b04136ab4cfd301b1efdd9.html`}
                        title="LIME Explanation"
                        style={{ width: '1000px', height: "200px", border: "1px solid #ccc", backgroundColor: "#ffffff", justifyContent: 'center', display: 'flex' }}
                    />
                </div>
            )}
            {!iframeUrl && <div style={{ fontSize: '20px', textAlign: 'center', paddingTop: '32px' }}>Visual Comparison with General Population</div>}
            {!iframeUrl && <img src={`${process.env.PUBLIC_URL}/fig.png`} alt=" Your Plot" />}
            {!risk && (<div style={{ fontSize: '20px', fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>You are in Medium Risk!</div>)}
            {!suggestion && (<div style={{ width: '1000px', fontSize: '20px', padding: '8px 16px 24px' }}>Suggestion for you: Maintaining a healthy lifestyle may help reduce your risk of developing diabetes.Effective control of cholestrol level may help reduce your risk of developing diabetes.</div>)}

            {/* Actual Output */}
            {iframeUrl && <div style={{ fontSize: '20px', textAlign: 'center', paddingTop: '16px' }}>Predicted Risk Probability and Main Risk Factors for Diabetes</div>}
            {iframeUrl && (
                <div style={{ color: "#ffffff", marginTop: '16px', padding: '8px 16px' }}>
                    <iframe
                        src={iframeUrl}
                        title="LIME Explanation"
                        style={{ width: '1000px', height: "200px", border: "1px solid #ccc", backgroundColor: "#ffffff", justifyContent: 'center', display: 'flex' }}
                    />
                </div>
            )}
            {iframeUrl && <div style={{ fontSize: '20px', textAlign: 'center', paddingTop: '32px' }}>Visual Comparison with General Population</div>}
            {iframeUrl && <img src="http://localhost:8000/static/fig.png" alt="Your Plot" />}
            {risk && (<div style={{ fontSize: '20px', fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>You are in {risk}!</div>)}
            {suggestion && (<div style={{ width: '1000px', fontSize: '20px', padding: '8px 16px 24px' }}>Suggestion for you: {suggestion}</div>)}
        </>
    );
}

// Optional: Formats keys like "highBloodPressure" to "High Blood Pressure"
function formatLabel(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
}

export default Result;
