import Section from './Section';
import styles from './education.module.css';
import cv from '../data/cv.json';

const { education } = cv;
export default function Education() {
  return (
    <Section title="Educación y Formación">
      <h2 className={styles.title}>Programación y Desarrollo Web</h2>

      <ul className={styles.container}>
        {education
          .filter((item) => item.type === 'programming')
          .map(({ institution, startDate, endDate, courses }) => (
            <li key={institution}>
              <article className={styles.item}>
                <header className={styles.header}>
                  <h3 className={styles.name}>{courses}</h3>
                </header>

                <p className={styles.institution}>{institution}</p>

                <footer>
                  <time className={styles.time}>
                    {startDate} &bull; {endDate}
                  </time>
                </footer>
              </article>
            </li>
          ))}
      </ul>

      <hr className={styles.separator} />

      <h2 className={styles.title}>Educación universitaria</h2>

      <ul className={styles.container}>
        {education
          .filter((item) => item.type === 'university')
          .map(({ institution, startDate, endDate, courses }) => (
            <li key={institution}>
              <article className={styles.item}>
                <header className={styles.header}>
                  <h3 className={styles.name}>{courses}</h3>
                </header>

                <p className={styles.institution}>{institution}</p>

                <footer>
                  <time className={styles.time}>
                    {startDate} &bull; {endDate}
                  </time>
                </footer>
              </article>
            </li>
          ))}
      </ul>
    </Section>
  );
}
