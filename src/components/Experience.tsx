import styles from './experience.module.css';
import Section from './Section';
import cv from '../data/cv.json';

const { work } = cv;
const formatYear = (date: string | null) =>
  date ? new Date(date).getFullYear() : 'Actualidad';

export default function Experience() {
  return (
    <Section title="Experiencia profesional">
      <h3 className={styles.titlePosition}>Desarrollador Web Freelance</h3>
      <h4 className={styles.time}>2023 – Actualidad</h4>
      <p className={styles.summary}>
        Desarrollo de sitios y aplicaciones web para clientes
        reales.Implementación de interfaces en React, integración de formularios
        y servicios externos.Optimización de velocidad de carga, SEO básico y
        experiencia de usuario.Comunicación directa con clientes, toma de
        requerimientos y entregas iterativas.
      </p>

      <ul className={styles.container}>
        {work.map(
          ({
            name,
            position,
            summary,
            startDate,
            endDate,
            url,
            highlights,
          }) => (
            <li key={name}>
              <article className={styles.item} key={name}>
                <header className={styles.header}>
                  <div>
                    <h3 className={styles.containername}>
                      <a
                        className={styles.name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                      </a>
                    </h3>
                    <h4 className={styles.position}>{position}</h4>
                  </div>

                  <time className={styles.time}>
                    {formatYear(startDate)} – {formatYear(endDate)}
                  </time>
                </header>
                <p className={styles.summary}>{summary}</p>
                <span>{highlights}</span>
              </article>
            </li>
          )
        )}
      </ul>
    </Section>
  );
}
