import Link from 'next/link';
import styles from '../assets/styles/navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/products'>Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
