import NavBar from '../components/NavBar';
import styles from './landing.module.css';
import image from '../assets/bear.png';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Landing: React.FC = ({}) => {
  return (
    <section>
      <div className={styles.container}>
        <NavBar />
        <div className={styles.content}>
          <h2>Glassmorphism UI</h2>
          <p>
            Et enim anim culpa quis commodo excepteur ipsum elit et do ea
            aliquip duis ea. Sit veniam anim ipsum officia do cillum esse veniam
            pariatur nostrud laboris culpa pariatur consectetur. Tempor nostrud
            veniam ad est anim exercitation irure esse ullamco proident aliqua
            enim aliquip. Sint tempor veniam laboris aliqua irure et sint ea
            veniam. Laborum nulla incididunt magna cillum irure magna culpa do
            voluptate Lorem. Id excepteur eu veniam do reprehenderit magna
            ullamco.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className={styles.imgBx}>
          <img src={image} />
        </div>
        <ul className={styles.socials}>
          <li style={{ '--i': 1 } as React.CSSProperties}>
            <a href="#">
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </li>
          <li style={{ '--i': 2 } as React.CSSProperties}>
            <a href="#">
              <FaTwitter aria-hidden="true" />
            </a>
          </li>
          <li style={{ '--i': 3 } as React.CSSProperties}>
            <a href="#">
              <FaInstagram aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Landing;
