import Section from './Section';
import styles from './projects.module.css';
import { projects } from '../data/cv.json';

export default function Projects() {
  return (
    <Section title="Proyectos">
      <ul className={styles.container}>
        {projects.map(
          ({ name, isActive, description, highlights, url, repo, npm, id }) => (
            <li className={styles.item} key={id}>
              <article className={styles.project}>
                <header className={styles.header}>
                  <h3 className={styles.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={url}
                      title={`Ver demo de ${name}`}
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
                  <div className={styles.highlights}>
                    {highlights.map((highlight, index) => (
                      <span key={index}>{highlight}</span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    {url && (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        🔗 Demo
                      </a>
                    )}

                    {repo && (
                      <a href={repo} target="_blank" rel="noopener noreferrer">
                        💻 Code
                      </a>
                    )}

                    {npm && (
                      <a href={npm} target="_blank" rel="noopener noreferrer">
                        📦 NPM
                      </a>
                    )}
                  </div>
                </footer>
              </article>
            </li>
          )
        )}
      </ul>
    </Section>
  );
}
