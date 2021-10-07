import styles from './LoginForm.module.css';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <div className={styles['form-container']}>
      <form className={styles.form}>
        <h2>Login Form</h2>
        <div className={styles.fieldBox}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={styles.fieldBox}>
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.fieldBox}>
          <input type="submit" value="Login" />
        </div>
        <p className={styles['forget-password']}>
          Forget Password?<a href="#">Click Here</a>
        </p>
        <p className={styles['forget-password']}>
          Don't have an account?<a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
