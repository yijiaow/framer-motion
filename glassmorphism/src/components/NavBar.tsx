import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <nav>
      <a href="#" className={styles.logo}>
        Logo
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Personnel</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
