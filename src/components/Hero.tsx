import styles from './hero.module.css';

import cv from '../data/cv.json';
import Section from './Section';
import MailIcon from '../icons/correo';
import PhoneIcon from '../icons/telefono';

import GithubIcon from '../icons/github';
import LinkedInIcon from '../icons/linkedIn';
import WorldIcon from '../icons/Mundo';

const { name, label, image, location, email, phone, profiles } = cv.basics;
const { city, region } = location;

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
};

const linkedinInfo = profiles.find(({ network }) => network === 'LinkedIn');
const linkedInUrl = linkedinInfo?.url;
const printInfo = [email, phone, linkedInUrl].filter(Boolean).join(' • ');

export default function Hero() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.label}>{label}</h2>
          <span className={styles.location}>
            <WorldIcon></WorldIcon>
            {city}, {region}
          </span>
          <footer className={styles.print}>
            <div>{printInfo}</div>
          </footer>
          <footer className={styles.social}>
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon></MailIcon>
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                title={`Llamar por teléfono a ${name} al número ${phone}`}
              >
                <PhoneIcon></PhoneIcon>
              </a>
            )}
            <div>
              {profiles.map(({ network, url, username }) => {
                const Icon = SOCIAL_ICONS[network];
                if (!Icon) return null;
                return (
                  <a
                    title={`Ir a ${network} de ${name} (${username})`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={network}
                  >
                    <Icon></Icon>
                  </a>
                );
              })}
            </div>
          </footer>
        </div>
        <figure>
          <img className={styles.image} src={image} alt={name} />
        </figure>
      </div>
    </Section>
  );
}
