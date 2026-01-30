import styles from './about.module.css';
import Section from './Section';

import cv from '../data/cv.json';

const { summary } = cv.basics;

export default function About() {
  return (
    <Section title="Sobre mí">
      <p className={styles.summary}>{summary}</p>
    </Section>
  );
}
