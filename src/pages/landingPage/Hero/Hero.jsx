import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router";

const Hero = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <motion.div
          initial={{ y: 200, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
        <div className="wrapper">
          <div className={styles.hero__inner}>
            <p className={styles.hero__text}>
              Welcome to Study Link! Learn, share your knowledge, and
              complete quizzes created by other users. This is where
              learning becomes communication — create your profile,
              post posts, and test your knowledge with others.
            </p>
            <button className={styles.hero__btn} onClick={()=> navigate('/generate')}>try now</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
