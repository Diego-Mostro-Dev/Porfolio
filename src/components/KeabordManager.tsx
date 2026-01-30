import { useEffect, useRef } from 'react';
import 'ninja-keys';
import styles from './keyboardManager.module.css';
import cv from '../data/cv.json';

type NinjaCommand = {
  id: string;
  title: string;
  icon?: string;
  keywords?: string;
  hotkey?: string;
  section?: string;
  handler?: () => void;
};

type NinjaKeysElement = HTMLElement & {
  open: () => void;
  data?: NinjaCommand[];
};

const { profiles } = cv.basics;

const SOCIAL_ICONS_SVG: Record<string, string> = {
  GitHub: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="margin-right:8px" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
      0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
      -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
      .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
      -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.6 9.6 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337
      c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688
      0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747
      0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2"/>
    </svg>
  `,
  LinkedIn: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="margin-right:8px" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6a2.5 2.5 0 0 1 0-5c1.38 0 2.48 1.12 2.48 2.5M0 24h5V7H0z
      M7.5 7h4.8v2.4h.1c.7-1.3 2.4-2.6 4.9-2.6 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.9c0-1.9 0-4.3-2.6-4.3
      s-3 2-3 4.1V24h-5V7z"/>
    </svg>
  `,
};

const profilesCommands: NinjaCommand[] = profiles.map(({ network, url }) => {
  const firstLetter = network[0].toLowerCase();

  return {
    id: `social-${network.toLowerCase()}`,
    title: `Visitar ${network}`,
    section: 'Social',
    hotkey: `ctrl+shift+${firstLetter}`,
    icon: SOCIAL_ICONS_SVG[network],
    handler: () => window.open(url, '_blank'),
  };
});

export default function KeyboardManager() {
  const ninjaRef = useRef<NinjaKeysElement>(null);
  const openPalette = () => {
    ninjaRef.current?.open();
  };
  useEffect(() => {
    const footer = document.querySelector(`.${styles.footer}`);

    const onScroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
        footer?.classList.add(styles.visible);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.querySelectorAll('ninja-keys').forEach((el) => el.remove());

    const ninja = document.createElement('ninja-keys') as NinjaKeysElement;

    document.body.appendChild(ninja);
    ninjaRef.current = ninja;

    customElements.whenDefined('ninja-keys').then(() => {
      ninja.setAttribute('placeholder', 'Escribí un comando o buscá...');
      ninja.setAttribute('hideBreadcrumbs', 'true');

      ninja.data = [
        {
          id: 'print',
          title: 'Imprimir',
          icon: `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M17 17h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2
              m10-8V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4"/>
              <path d="M7 15a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"/>
            </svg>
          `,
          section: 'Acciones',
          handler: () => window.print(),
        },
        ...profilesCommands,
      ];
    });

    return () => {
      ninja.remove();
    };
  }, []);

  return (
    <>
      <footer className={styles.footer} ref={containerRef}>
        Pulsa <kbd>Cmd</kbd> + <kbd>K</kbd> para abrir la paleta de comandos.
      </footer>
      <button className={styles.mobileButton} onClick={openPalette}>
        ⌘
      </button>
    </>
  );
}
