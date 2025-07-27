import React from 'react';
import styles from './Resources.module.css';

const whatIsDiabetes = [
    {
        title: "WHO Fact Sheet on Diabetes",
        url: "https://www.who.int/news-room/fact-sheets/detail/diabetes",
        description: "This resource outlines the global impact of diabetes, its key risk factors, and the importance of prevention, early detection, and effective management."
    },
    {
        title: "Cleveland Clinic Overview of Diabetes",
        url: "https://my.clevelandclinic.org/health/diseases/7104-diabetes",
        description: "This comprehensive Cleveland Clinic resource explains diabetes as a chronic condition characterized by high blood sugar due to insufficient insulin production or improper insulin use, outlines the types of diabetes (such as type 1, type 2, gestational, and prediabetes), and details diagnostic tests, management strategies, treatment options, and potential complications."
    },
    {
        title: "NIDDK “What Is Diabetes?” Overview",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes",
        description: "This NIDDK overview explains that diabetes is a condition marked by chronically elevated blood glucose—due to insufficient insulin production or improper utilization—and describes the primary types (type 1, type 2, gestational, and prediabetes), along with their causes, symptoms, complications, and prevention or management strategies."
    }
];

const statisticsAboutDiabetes = [
    {
        title: "American Diabetes Association – Statistics About Diabetes",
        url: "https://diabetes.org/about-diabetes/statistics/about-diabetes",
        description: "In 2021, approximately 38.4 million Americans (11.6% of the population) had diabetes—with about 29.7 million diagnosed and 8.7 million undiagnosed; every year around 1.2 million new cases are diagnosed, and nearly 97.6 million adults (≈ 37%) have prediabetes."
    },
    {
        title: "International Diabetes Federation – Diabetes Facts & Figures (2025)",
        url: "https://idf.org/about-diabetes/diabetes-facts-figures/",
        description: "The latest IDF Diabetes Atlas reveals that approximately 589 million adults (20–79 years old)—about 1 in 9 globally—are living with diabetes in 2025, with projections reaching 853 million by 2050, and that over 4 in 10 of these individuals remain undiagnosed."
    },
    {
        title: "IDF Diabetes Atlas 2025 (11th Edition)",
        url: "https://diabetesatlas.org/",
        description: "n 2024, approximately 589 million adults (20–79 years)—about 1 in 9 globally—lived with diabetes, with projections indicating this could rise to 853 million (1 in 8) by 2050; additionally, around 252 million (43%) remain undiagnosed, diabetes caused 3.4 million deaths, and health expenditures surpassed USD 1 trillion in 2024."
    }
];

const typesOfDiabetes = [
    {
        title: "Types of Diabetes – Diabetes UK Overview",
        url: "https://www.diabetes.org.uk/about-diabetes/types-of-diabetes",
        description: "Diabetes UK outlines common types like Type 1, Type 2, and gestational diabetes, along with several rare forms such as MODY, LADA, and Type 3c."
    },
    {
        title: "NHS – Diabetes Overview",
        url: "https://www.nhs.uk/conditions/diabetes/",
        description: "The NHS describes diabetes as a long-term condition causing high blood sugar, with various types requiring different management and lifestyle approaches."
    },
    {
        title: "CDC – Diabetes Overview",
        url: "https://www.cdc.gov/diabetes/about/index.html",
        description: "The CDC defines diabetes as a chronic condition marked by high blood sugar and highlights its widespread impact, risk factors, symptoms, and the importance of prevention and management."
    }
];

const howToPreventDiabetes = [
    {
        title: "Mayo Clinic – Diabetes Prevention",
        url: "https ://www.mayoclinic.org/diseases-conditions/type-2-diabetes/in-depth/diabetes-prevention/art-20047639",
        description: "Mayo Clinic outlines key steps to prevent type 2 diabetes, including weight loss, regular exercise, and healthy eating habits."
    },
    {
        title: "Ten Tips for Healthy Eating – Diabetes UK",
        url: "https://www.diabetes.org.uk/about-diabetes/type-2-diabetes/preventing/ten-tips-for-healthy-eating",
        description: "Diabetes UK offers simple, practical tips for healthy eating to help prevent or manage type 2 diabetes through balanced, lower-sugar, high-fibre food choices."
    },
    {
        title: "ADA – Diabetes Prevention",
        url: "https://diabetes.org/about-diabetes/diabetes-prevention",
        description: "The ADA highlights that healthy lifestyle changes, like weight loss and regular exercise, can significantly lower the risk of type 2 diabetes."
    }
];

const stepsToTake = [
    {
        title: "Newly Diagnosed With Diabetes – American Diabetes Association",
        url: "https ://diabetes.org/living-with-diabetes/newly-diagnosed",
        description: "This guide reassures those newly diagnosed with diabetes that while the news may feel overwhelming, they are not alone—offering practical support through diet, exercise, medical care, and community resources to help manage their condition and thrive."
    },
    {
        title: "Mayo Clinic – Diabetes Management",
        url: "https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-management/art-20045803",
        description: "Managing diabetes involves healthy eating, regular exercise, monitoring blood sugar, taking medications, and controlling other health risks."
    },
    {
        title: "NIDDK – Managing Diabetes",
        url: "https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes",
        description: "NIDDK highlights that managing diabetes requires healthy habits, regular monitoring, medication adherence, and support from a healthcare team to prevent complications."
    }
];

const ResourceList = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '1000px' }}>
            <div className={styles.bigTitle}>Resources</div>
            {/* Blog Posts 1*/}
            <div className={styles.section}>
                <div className={styles.title}>What is Diabetes?</div>
                {whatIsDiabetes.map((post, index) => (
                    <div key={index} style={{ padding: '8px' }}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {post.title}
                        </a>
                        <div className={styles.description}>{post.description}</div>
                    </div>
                ))}
            </div>
            {/* Blog Posts 2*/}
            <div className={styles.section}>
                <div className={styles.title}>Statistics about Diabetes?</div>
                {statisticsAboutDiabetes.map((post, index) => (
                    <div key={index} style={{ padding: '8px' }}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {post.title}
                        </a>
                        <div className={styles.description}>{post.description}</div>
                    </div>
                ))}
            </div>
            {/* Blog Posts 3*/}
            <div className={styles.section}>
                <div className={styles.title}>Types of Diabetes</div>
                {typesOfDiabetes.map((post, index) => (
                    <div key={index} style={{ padding: '8px' }}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {post.title}
                        </a>
                        <div className={styles.description}>{post.description}</div>
                    </div>
                ))}
            </div>
            {/* Blog Posts 4*/}
            <div className={styles.section}>
                <div className={styles.title}>How to Prevent Diabetes?</div>
                {howToPreventDiabetes.map((post, index) => (
                    <div key={index} style={{ padding: '8px' }}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {post.title}
                        </a>
                        <div className={styles.description}>{post.description}</div>
                    </div>
                ))}
            </div>
            {/* Blog Posts 5*/}
            <div className={styles.section}>
                <div className={styles.title}>What steps should I take after being diagnosed with diabetes?</div>
                {stepsToTake.map((post, index) => (
                    <div key={index} style={{ padding: '8px' }}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            {post.title}
                        </a>
                        <div className={styles.description}>{post.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResourceList;

