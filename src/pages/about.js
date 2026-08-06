import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SafeMailLink from '../components/SafeMailLink';
import styles from './about.module.css';

const jobs = [
  {
    company: 'maexware solutions GmbH',
    period: 'seit März 2019',
    duration: '7 Jahre und 3 Monate',
    dynamicStart: {year: 2019, month: 2},
    role: 'Webentwickler',
    type: 'Angestellt',
    status: 'Aktuell',
    mark: 'MW',
  },
  {
    company: 'TANDEM Kommunikation GmbH',
    period: 'Juli 2016 - Feb. 2019',
    duration: '2 Jahre und 8 Monate',
    role: 'Technische Realisierung / E-Commerce / Webentwickler',
    type: 'Angestellt',
    mark: 'TK',
  },
  {
    company: 'tp-werbeagentur',
    period: 'März 2016 - Juni 2016',
    duration: '4 Monate',
    role: 'Webentwickler',
    type: 'Angestellt',
    mark: 'TP',
  },
  {
    company: 'Jankowfsky AG',
    period: 'Juli 2014 - Dez. 2015',
    duration: '1 Jahr und 6 Monate',
    role: 'Webentwickler',
    type: 'Angestellt',
    mark: 'JA',
  },
  {
    company: 'Info-Art',
    period: 'Okt. 2010 - Juli 2014',
    duration: '3 Jahre und 10 Monate',
    role: 'Webentwickler',
    type: 'Angestellt',
    mark: 'IA',
  },
  {
    company: 'Bioraum GmbH',
    period: 'Aug. 2010 - Juli 2014',
    duration: '4 Jahre',
    role: 'Webentwickler',
    type: 'Angestellt',
    mark: 'BR',
    details: 'Wartung und Pflege der Shops, Modulentwicklung und Templating',
  },
  {
    company: 'Commodule',
    period: 'Juni 2011 - März 2013',
    duration: '1 Jahr und 10 Monate',
    role: 'Webentwickler',
    type: 'Angestellt',
    mark: 'CO',
  },
  {
    company: 'Möbel-Schau Norsingen GmbH & Co',
    period: 'Aug. 2007 - Juli 2010',
    duration: '3 Jahre',
    role: 'Auszubildender',
    type: 'Angestellt',
    mark: 'MS',
    details: 'Ausbildung zum Kaufmann im Einzelhandel',
  },
];

const stats = [
  ['Name', 'Danny Zimmer'],
  ['Aktuelle Position', 'maexware solutions GmbH'],
  ['Fokus', 'Webentwicklung, E-Commerce, OXID, Shopware, O3'],
  ['Erstellt mit', 'Docusaurus'],
  ['GitHub', 'dazi-web'],
];

const skillGroups = [
  {
    title: 'Backend & Architektur',
    skills: [
      'PHP',
      'OOP',
      'Backend-Entwicklung',
      'Symfony Frameworks',
      'Laravel',
      'LAMP',
      'REST',
      'SOAP',
      'WSDL',
      'SOA',
      'Design-Pattern',
      'Unit Testing',
      'Technische Dokumentation',
    ],
  },
  {
    title: 'E-Commerce & Shopsysteme',
    skills: [
      'E-Commerce',
      'Online-Shops',
      'eCommerce Projekte',
      'OXID',
      'Shopware',
      'Shopify',
      'Joomla',
      'WordPress',
      'Kundenbetreuung',
    ],
  },
  {
    title: 'Frontend & Templates',
    skills: [
      'JavaScript',
      'jQuery',
      'Ajax',
      'Angular',
      'Node.js',
      'Frontend Entwicklung',
      'Responsive Webdesign',
      'HTML',
      'CSS3',
      'Less',
      'Smarty',
    ],
  },
  {
    title: 'Daten, Suche & Betrieb',
    skills: [
      'MySQL',
      'SQL',
      'XML',
      'Apache Solr',
      'Git',
      'Linux',
      'Jira',
      'Webentwicklung',
      'Go',
    ],
  },
  {
    title: 'AI-gestützte Entwicklung',
    skills: [
      'Codex',
      'Claude',
      'Prompting',
      'AI Code Reviews',
      'AI Debugging',
      'Testgenerierung',
      'Refactoring mit AI',
      'Dokumentation mit AI',
      'Workflow-Automatisierung',
    ],
  },
];

function formatDurationFrom(start) {
  const now = new Date();
  const monthDiff = (now.getFullYear() - start.year) * 12 + now.getMonth() - start.month + 1;
  const years = Math.floor(monthDiff / 12);
  const months = monthDiff % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'Jahr' : 'Jahre'}`);
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'Monat' : 'Monate'}`);
  }

  return parts.join(' und ');
}

function useCurrentDuration(start, fallback) {
  const [duration, setDuration] = useState(fallback);

  useEffect(() => {
    if (start) {
      setDuration(formatDurationFrom(start));
    }
  }, [start]);

  return duration;
}

function CompanyMark({name, mark}) {
  return (
    <div className={styles.companyMark} aria-label={`${name} Kürzel`}>
      <span>{mark}</span>
    </div>
  );
}

function JobItem({job}) {
  const duration = useCurrentDuration(job.dynamicStart, job.duration);

  return (
    <article className={clsx(styles.job, job.status && styles.currentJob)}>
      <CompanyMark name={job.company} mark={job.mark} />
      <div className={styles.jobContent}>
        <div className={styles.jobMeta}>
          {job.status && <span className={styles.status}>{job.status}</span>}
          <span>{duration}</span>
          <span>{job.period}</span>
        </div>
        <h2>{job.company}</h2>
        <p className={styles.role}>{job.role}</p>
        <p className={styles.type}>{job.type}</p>
        <details className={styles.more}>
          <summary>Weitere Details</summary>
          <p>
            {job.details ||
              `${job.role} bei ${job.company}. Zeitraum: ${job.period}. Beschäftigungsart: ${job.type}.`}
          </p>
        </details>
      </div>
    </article>
  );
}

function ContactBox() {
  return (
    <section className={styles.contactBox}>
      <div>
        <span>Kontakt</span>
        <h2>Fragen?</h2>
        <p>
         Schreibt mir eine Email!
        </p>
        <strong>kontakt [at] da-zi [dot] de</strong>
      </div>
      <SafeMailLink className={styles.contactButton}>
        Mail schreiben
      </SafeMailLink>
    </section>
  );
}

function About() {
  const profileImage = useBaseUrl('img/aboutme-picture.jpg');
  const currentDuration = useCurrentDuration(jobs[0].dynamicStart, jobs[0].duration);

  return (
    <Layout
      title="About me"
      description="Webentwickler Profil mit Erfahrung in E-Commerce, OXID und Shopware">
      <main className={styles.page}>
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.introGrid}>
              <div className={styles.introCopy}>
                <p className={styles.kicker}>About me</p>
                <p className={styles.name}>Danny Zimmer</p>
                <h1>Webentwickler für E-Commerce-Projekte</h1>
                <p className={styles.lead}>
                  Technische Realisierung, Shopentwicklung, Modulentwicklung und Templating
                  für OXID, Shopware und individuelle Webprojekte.
                </p>
                <div className={styles.heroLinks}>
                  <a href="https://github.com/maexware-danny/" rel="noopener noreferrer" target="_blank">
                    GitHub
                  </a>
                  <span>Erstellt mit Docusaurus</span>
                </div>
              </div>
              <div className={styles.profileBox}>
                <img src={profileImage} alt="Danny Zimmer" className={styles.profileImage} />
                <span>Profil</span>
                <strong>Danny Zimmer</strong>
                <small>Webentwickler für E-Commerce, OXID, Shopware und O3</small>
                <hr className={styles.profileDivider} />
                <span>Aktuell</span>
                <strong>maexware solutions GmbH</strong>
                <small>Webentwickler, seit März 2019</small>
                <small>{currentDuration}</small>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map(([label, value]) => (
                <div className={styles.stat} key={label}>
                  <span>{label}</span>
                  {label === 'GitHub' ? (
                    <strong>
                      <a href="https://github.com/maexware-danny/" rel="noopener noreferrer" target="_blank">
                        {value}
                      </a>
                    </strong>
                  ) : (
                    <strong>{value}</strong>
                  )}
                </div>
              ))}
            </div>

            <ContactBox />

            <div className={styles.sectionHeader}>
              <h2>Kenntnisse</h2>
            </div>

            <div className={styles.skillsGrid}>
              {skillGroups.map((group) => (
                <section className={styles.skillGroup} key={group.title}>
                  <h3>{group.title}</h3>
                  <div className={styles.skillList}>
                    {group.skills.map((skill) => (
                      <span className={styles.skill} key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className={styles.sectionHeader}>
              <h2>Berufserfahrung</h2>
              <span>{jobs.length} Stationen</span>
            </div>

            <div className={styles.timeline}>
              {jobs.map((job) => (
                <JobItem job={job} key={`${job.company}-${job.period}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
