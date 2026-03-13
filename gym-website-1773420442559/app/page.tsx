import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Head>
        <title>FitZone - Your Health and Fitness Partner</title>
      </Head>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/classes">
                <a>Classes</a>
              </Link>
            </li>
            <li>
              <Link href="/trainers">
                <a>Trainers</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Welcome to FitZone</h1>
        <p>
          Your health and fitness partner, providing top-notch classes and
          trainers to help you achieve your goals.
        </p>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for classes or trainers..."
        />
        <button>Search</button>
      </main>
    </>
  );
}

export default Home;