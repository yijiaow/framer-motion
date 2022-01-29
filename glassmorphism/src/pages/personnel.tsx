import Card from '../components/Card';
import styles from './personnel.module.css';

const Personnel: React.FC = ({}) => {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};

export default Personnel;
