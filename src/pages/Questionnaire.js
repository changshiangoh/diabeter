import React, { useState } from 'react';
import styles from './Questionnaire.module.css';
import Demographics, { demographicsQuestions } from './questions/Demographics.js';
import MedicalConditions, { medicalConditionsQuestions } from './questions/MedicalConditions.js';
import Lifestyle, { lifeStyleQuestions } from './questions/Lifestyle.js';
import Result from './questions/Results.js';
import axios from 'axios';
import { convertPythonFormat } from './util/convertDataFormat.js';

const steps = ['Demographics', 'Medical Conditions', 'Lifestyle & Habits', 'Results'];

const initialAnswers = {
    demographics: {},
    medicalConditions: {},
    lifestyle: {},
};

function Questionnaire() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState(initialAnswers);
    const [risk, setRisk] = useState("");
    const [suggestion, setSuggestion] = useState("");
    const [iframeUrl, setIframeUrl] = useState(null);

    function handleAnswerChange(stepKey, question, value) {
        setAnswers(prev => ({
            ...prev,
            [stepKey]: {
                ...prev[stepKey],
                [question]: value,
            },
        }));
    }

    function validateCurrentStep() {
        let stepKey;
        let criteria;

        if (currentStep === 0) {
            stepKey = 'demographics';
            criteria = Object.keys(demographicsQuestions);
        } else if (currentStep === 1) {
            stepKey = 'medicalConditions';
            criteria = Object.keys(medicalConditionsQuestions);
        } else if (currentStep === 2) {
            stepKey = 'lifestyle';
            criteria = Object.keys(lifeStyleQuestions);
        } else {
            stepKey = 'Result';
            return true;
        }

        for (const c of criteria) {
            if (!answers[stepKey][c] || answers[stepKey][c] === '') {
                return false;
            }
        }
        return true;
    }

    function nextStep() {
        if (!validateCurrentStep()) {
            alert('Please answer all questions before proceeding.');
            return;
        }
        setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }

    function prevStep() {
        setCurrentStep(prev => Math.max(prev - 1, 0));
    }

    function restartStep() {
        setCurrentStep(0);
        setAnswers(initialAnswers);
    }

    function renderPage() {
        switch (currentStep) {
            case 0:
                return (
                    <Demographics
                        answers={answers.demographics}
                        onAnswerChange={(q, v) => handleAnswerChange('demographics', q, v)}
                    />
                );
            case 1:
                return (
                    <MedicalConditions
                        answers={answers.medicalConditions}
                        onAnswerChange={(q, v) => handleAnswerChange('medicalConditions', q, v)}
                    />
                );
            case 2:
                return (
                    <Lifestyle
                        answers={answers.lifestyle}
                        onAnswerChange={(q, v) => handleAnswerChange('lifestyle', q, v)}
                    />
                );
            default:
                return (
                    <Result
                        answers={answers}
                        iframeUrl={iframeUrl}
                        risk={risk}
                        suggestion={suggestion}
                    />
                );
        }
    }

    const submit = async () => {
        setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
        await onClick();
    }

    const onClick = async () => {
        try {
            const formattedArray = convertPythonFormat(answers); // Replace with your real data
            const response = await axios.post('http://localhost:8000/runModel/', {
                data: formattedArray
            });

            const fullUrl = `http://localhost:8000${response.data.htmlPath}`;
            setIframeUrl(fullUrl);

            setRisk(response.data.risk);
            setSuggestion(response.data.suggestion);
            console.log("Success!")
        } catch (error) {
            console.error("Error:", error);
        }
    };

    function clickOnStep(index) {
        if (index <= currentStep) {
            setCurrentStep(index);
        }
    }

    return (
        <div className={styles.stepContainer}>
            <div className={styles.title}>Diabetes Risk Checker</div>
            <div className={styles.stepper}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <button className={index < currentStep ? styles.stepActive : index === currentStep ? styles.stepCurrent : styles.step} onClick={() => clickOnStep(index)}>
                            {index + 1}. {step}
                        </button>
                        {index < steps.length - 1 && (
                            <div style={{ margin: '0 10px', color: '#DCD0A8', userSelect: 'none' }}>
                                &gt;
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>


            <div className={styles.stepContent}>
                {renderPage()}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '30px', alignItems: 'center' }}>
                {currentStep !== 0 ?
                    <button
                        onClick={currentStep === steps.length - 1 ? restartStep : prevStep}
                        disabled={currentStep === 0}
                        className={styles.actionButton}
                    >
                        {currentStep !== steps.length - 1 ? "Back" : "Restart"}
                    </button> : null
                }


                {currentStep !== steps.length - 1 ?
                    <button
                        onClick={currentStep <= 1 ? nextStep : submit}
                        disabled={currentStep === steps.length - 1}
                        className={styles.actionButton}
                    >
                        {currentStep <= 1 ? "Next" : "Submit"}
                    </button> : null
                }

            </div>
        </div>
    );
}

export default Questionnaire;
