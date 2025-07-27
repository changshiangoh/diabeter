import React from 'react';
import styles from './StatisticsSection.module.css';

export const StatisticsSection = ({ title, description, figureName, link, linkName, figureName2, link2, linkName2 }) => {
    return (
        <div style={{ width: '700px' }}>
            <div style={{ fontSize: '24px', paddingBottom: '16px' }}>{title}</div>
            {description && <div style={{ textAlign: 'left', fontWeight: 200 }} className={styles.link}>{description}</div>}
            <img style={{ padding: '24px', width: '600px' }} src={process.env.PUBLIC_URL + "/figures/" + figureName + ".png"} alt={title} />
            {figureName2 && <img style={{ padding: '24px', width: '600px' }} src={process.env.PUBLIC_URL + "/figures/" + figureName2 + ".png"} alt={title} />}
            {link && <div style={{ display: 'flex' }}>
                <div className={styles.link} style={{ paddingRight: '8px', fontWeight: 200 }}>Link: </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link} style={{ fontWeight: 200 }}>
                    {linkName}
                </a>
            </div>}
            {link2 && <div style={{ display: 'flex' }}>
                <div className={styles.link} style={{ paddingRight: '8px', fontWeight: 200 }}>Link: </div>
                <a href={link2} target="_blank" rel="noopener noreferrer" className={styles.link} style={{ fontWeight: 200 }}>
                    {linkName2}
                </a>
            </div>}
        </div>
    );
}