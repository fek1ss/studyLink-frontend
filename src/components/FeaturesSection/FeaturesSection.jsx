import styles from './styles.module.css';
import CardReason from './../CardReason/CardReason';

const FeaturesSection = () => {
  return (
    <div className={styles.FeaturesSection}>
      <h1>What will you do?</h1>
      <CardReason
        text={
          'Create posts — share your thoughts, materials, and ideas with other students.'
        }
        img={'/images/NewWebpage.png'}
      />
    </div>
  );
};

export default FeaturesSection;
