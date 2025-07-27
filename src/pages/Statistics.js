import React, { useState } from 'react';
import styles from './Statistics.module.css';
import { StatisticsSection } from './statistics/StatisticsSection';

const Statistics = () => {
    const [activeTab, setActiveTab] = useState('main');

    return (
        <div style={{ width: '1000px' }}>
            <div className={styles.title}>Statistics</div>
            <div className={styles.description}>SHAP (SHapley Additive exPlanations) values reflect how a variable contributes to diabetes risk. Positive SHAP values signify an increased risk, while negative SHAP values indicate a decreased risk of developing diabetes. The shaded region illustrates the distribution of the variable.</div>
            <div className={styles.container}>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('main')}
                    >
                        Overview
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('gender')}
                    >
                        Gender
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('age')}
                    >
                        Age
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('bmi')}
                    >
                        BMI
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('general-health')}
                    >
                        Health Rating
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('high-bp')}
                    >
                        High Blood Pressure
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('high-chol')}
                    >
                        High Cholesterol
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('smoker')}
                    >
                        Smoker
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('stroke')}
                    >
                        Stroke
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('heart')}
                    >
                        Heart Disease
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('health-care')}
                    >
                        Health Care
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('diff-walk')}
                    >
                        Difficulty Walking
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('sports')}
                    >
                        Sports
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('fruits')}
                    >
                        Fruits & Vegetables
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={() => setActiveTab('alcohol')}
                    >
                        Alcohol
                    </button>

                </div>

                {/* Tab content */}
                <div className={styles.tabContent}>
                    {activeTab === 'main' && (
                        <StatisticsSection
                            title={"Main Risk Factors for Diabetes"}
                            figureName={"Main"}
                        />
                    )}
                    {activeTab === 'gender' && (
                        <StatisticsSection
                            title={"Gender"}
                            description={"Diabetes is more prevalent in males than in females."}
                            figureName={"Gender"}
                            link={"https://www.news-medical.net/health/Diabetes-in-Men-versus-Women.aspx"}
                            linkName={"Diabetes in Men versus Women"}
                        />
                    )}
                    {activeTab === 'age' && (
                        <StatisticsSection
                            title={"Age"}
                            description={"As age increases, the likelihood of developing diabetes also rises."}
                            figureName={"Age"}
                            link={"https://www.webmd.com/diabetes/diabetes-link-age"}
                            linkName={"How Age Relates to Type 2 Diabetes"}
                        />
                    )}
                    {activeTab === 'bmi' && (
                        <StatisticsSection
                            title={"BMI"}
                            description={"As BMI increases, the risk of developing diabetes also becomes higher. Given that height remains constant, managing body weight is a crucial factor in controlling diabetes."}
                            figureName={"BMI"}
                            link={"https://www.diabetes.co.uk/diabetes-and-obesity.html"}
                            linkName={"Obesity and Diabetes"}
                        />
                    )}
                    {activeTab === 'general-health' && (
                        <StatisticsSection
                            title={"Health Rating"}
                            description={"Maintaining a healthy lifestyle lowers the risk of developing diabetes."}
                            figureName={"GenHealth"}
                            link={"https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-management/art-20047963"}
                            linkName={"Diabetes management: How lifestyle, daily routine affect blood sugar"}
                        />
                    )}
                    {activeTab === 'high-bp' && (
                        <StatisticsSection
                            title={"High Blood Pressure"}
                            description={"Having a high blood pressure is associated with a higher risk of diabetes."}
                            figureName={"BP"}
                            link={"https://www.diabetes.org.uk/about-diabetes/looking-after-diabetes/blood-pressure"}
                            linkName={"Diabetes and blood pressure"}
                        />
                    )}
                    {activeTab === 'high-chol' && (
                        <StatisticsSection
                            title={"Cholesterol Level"}
                            description={"Having a high cholesterol level is associated with a higher risk of diabetes."}
                            figureName={"Chol"}
                            link={"https://www.diabetes.org.uk/living-with-diabetes/eating/managing-other-medical-conditions/cholesterol-and-diabetes"}
                            linkName={"Cholesterol and diabetes"}
                        />
                    )}
                    {activeTab === 'smoker' && (
                        <StatisticsSection
                            title={"Smoking"}
                            description={""}
                            figureName={"Smoker"}
                            link={"https://www.cdc.gov/diabetes/risk-factors/diabetes-and-smoking.html"}
                            linkName={"Diabetes and Smoking"}
                        />
                    )}
                    {activeTab === 'stroke' && (
                        <StatisticsSection
                            title={"Stroke"}
                            description={"Individuals with stroke have a higher likelihood of developing diabetes, and the reverse is also true—those with diabetes are at increased risk of stroke."}
                            figureName={"Stroke"}
                            link={"https://www.stroke.org/en/about-stroke/stroke-risk-factors/diabetes-and-stroke-prevention"}
                            linkName={"Diabetes and Stroke Prevention"}
                        />
                    )}
                    {activeTab === 'heart' && (
                        <StatisticsSection
                            title={"Heart Disease"}
                            description={"Individuals with heart disease have a higher likelihood of developing diabetes, and the reverse is also true—those with diabetes are at increased risk of heart disease."}
                            figureName={"Heart"}
                            link={"https://www.diabetes.org.uk/about-diabetes/looking-after-diabetes/complications/cardiovascular-disease"}
                            linkName={"Diabetes and heart disease"}
                        />
                    )}
                    {activeTab === 'health-care' && (
                        <StatisticsSection
                            title={"Health Care"}
                            description={"There is no direct correlation between access to healthcare and the incidence of diabetes."}
                            figureName={"Healthcare"}
                        />
                    )}
                    {activeTab === 'diff-walk' && (
                        <StatisticsSection
                            title={"Difficult in Walking"}
                            description={"Experiencing difficulty in walking is associated with a higher likelihood of having diabetes."}
                            figureName={"DiffWalk"}
                            link={"https://www.webmd.com/diabetes/peripheral-neuropathy-risk-factors-symptoms"}
                            linkName={"Peripheral Neuropathy and Diabetes"}
                        />
                    )}
                    {activeTab === 'sports' && (
                        <StatisticsSection
                            title={"Sports"}
                            description={"Sports and physical activities are not directly linked to the development of diabetes. However, engaging in regular physical activity is a highly effective way to support overall health and well-being."}
                            figureName={"Sports"}
                            link={"https://idf.org/about-diabetes/diabetes-management/physical-activity/"}
                            linkName={"Diabetes and physical activity"}
                        />
                    )}
                    {activeTab === 'fruits' && (
                        <>
                            <StatisticsSection
                                title={"Fruits and Vegetables Consumption"}
                                description={"Fruits and vegetables consumption is not directly linked to the development of diabetes."}
                                figureName={"Fruits"}
                                figureName2={"Veggies"}
                                link={"https://www.diabetes.org.uk/living-with-diabetes/eating/fruit-and-diabetes"}
                                linkName={"Fruit, vegetables and diabetes"}
                                link2={"https://www.webmd.com/diabetes/fruit-diabetes"}
                                linkName2={"What Are the Best Fruits for Diabetes?"}
                            />
                        </>

                    )}
                    {activeTab === 'alcohol' && (
                        <StatisticsSection
                            title={"Alcohol Consumption"}
                            description={"Alcohol consumption is not directly linked to the development of diabetes. However, excessive drinking may increase your risk of diabetes. "}
                            figureName={"Alcohol"}
                            link={"https://www.diabetes.org.uk/living-with-diabetes/eating/what-to-drink-with-diabetes/alcohol-and-diabetes"}
                            linkName={"Alcohol and diabetes"}
                        />
                    )}
                </div>
            </div>

        </div>
    );
};

export default Statistics;
