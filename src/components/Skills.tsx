import Section from './Section';
import styles from './skills.module.css';

import cv from '../data/cv.json';

const { skills } = cv;

export default function Skills() {
  return (
    <Section title="Habilidades">
      <ul className={styles.container}>
        {skills.map(({ name }) => (
          <li key={name}>
            <span className={styles.name}>{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
