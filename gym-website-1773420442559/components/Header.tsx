import Link from 'next/link';
import styles from './Header.module.css';

function Header() {
  return (
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
  );
}

export default Header;