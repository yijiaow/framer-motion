import LoginForm from '../components/LoginForm';
import styles from './login.module.css';
import image from '../assets/background-login.jpg';

const Login: React.FC = ({}) => {
  return (
    <section>
      <div className={styles.backdrop} />
      <div className={styles.box}>
        <div
          className={styles.square}
          style={{ '--i': 1 } as React.CSSProperties}
        />
        <div
          className={styles.square}
          style={{ '--i': 2 } as React.CSSProperties}
        />
        <div
          className={styles.square}
          style={{ '--i': 3 } as React.CSSProperties}
        />
        <div
          className={styles.square}
          style={{ '--i': 4 } as React.CSSProperties}
        />
        <div
          className={styles.square}
          style={{ '--i': 5 } as React.CSSProperties}
        />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
