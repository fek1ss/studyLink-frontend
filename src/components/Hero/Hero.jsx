import styles from './styles.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="wrapper">
        <div className={styles.hero__inner}>
          <p className={styles.hero__text}>
            Welcome to Study Link! Learn, share your knowledge, and
            complete quizzes created by other users. This is where
            learning becomes communication — create your profile, post
            posts, and test your knowledge with others.
          </p>
          <button className={styles.hero__btn}>try now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
