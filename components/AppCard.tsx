import React from 'react';
import styles from '../style/app-card.module.css';

type AppCardProps = {
  title: string;
  description: string;
  icon: string;
  link: string;
};

const AppCard: React.FC<AppCardProps> = ({ title, description, icon, link }) => (
  <a href={link} target="_blank" className={styles['app-card']}>
    <img src={icon} alt={title} className={styles['app-icon']} />
    <div className={styles['app-content']}>
      <h3 className={styles['app-title']}>{title}</h3>
      <p className={styles['app-description']}>{description}</p>
    </div>
  </a>
);

export default AppCard;