import Section from './Section';
import styles from './projects.module.css';
import { projects } from '../data/cv.json';

export default function Projects() {
  return (
    <Section title="Proyectos">
      <ul className={styles.container}>
        {projects.map(
          ({ name, isActive, description, highlights, url, id }) => (
            <li className={styles.item} key={id}>
              <article className={styles.project}>
                <header className={styles.header}>
                  <h3 className={styles.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={url}
                      title={`Ver el proyecto ${name}`}
                    >
                      {name}
                    </a>
                    <span
                      title={isActive ? 'Activo' : 'Inactivo'}
                      className={isActive ? styles.active : styles.inactive}
                    >
                      &bull;
                    </span>
                  </h3>
                  <p className={styles.description}>{description}</p>
                </header>
                <footer className={styles.footer}>
                  {highlights.map((highlight, index) => (
                    <span key={index}>{highlight}</span>
                  ))}
                </footer>
              </article>
            </li>
          )
        )}
      </ul>
    </Section>
  );
}
