import React from 'react';
import Layout from '@theme/Layout';
import SafeMailLink from '../components/SafeMailLink';
import styles from './impressum.module.css';

function Impressum() {
  return (
    <Layout title="Impressum" description="Impressum von Danny Zimmer">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.kicker}>Rechtliches</p>
            <h1>Impressum</h1>
          </div>
        </section>

        <section className={styles.content}>
          <div className="container">
            <div className={styles.panel}>
              <h2>Angaben gemäß § 5 DDG</h2>
              <address>
                Danny Zimmer
                <br />
                Rosenstauden 40
                <br />
                79114 Freiburg
                <br />
                Deutschland
              </address>

              <h2>Kontakt</h2>
              <p>
                E-Mail:{' '}
                <SafeMailLink className={styles.mailButton}>
                  kontakt [at] da-zi [dot] de
                </SafeMailLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Impressum;
