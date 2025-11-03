import styles from './styles.module.css';
import CardReason from '../CardReason/CardReason';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <div className={styles.features}>
      <div className="wrapper">
        <h1 className={styles.features__title}>
          What will you be able to do?
        </h1>

        <div className={styles.features__reasons}>
          <div className={styles.row_left}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardReason
                type="card"
                text={
                  'Create posts — share your thoughts, materials, and ideas with other students.'
                }
                img={'/images/NewWebpage.png'}
              />
            </motion.div>
          </div>
          <div className={styles.row_right}>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardReason
                type="card"
                text={
                  'Generate quizzes using AI — upload a lecture text or enter a topic, and artificial intelligence will create a test in seconds.'
                }
                img={'/images/Ai.png'}
              />
            </motion.div>
          </div>
          <div className={styles.row_left}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardReason
                type="card"
                text={
                  'Post your quizzes on your profile — collect a collection of your quizzes and share them.'
                }
                img={'/images/Task.png'}
              />
            </motion.div>
          </div>
          <div className={styles.row_right}>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CardReason
                type="card"
                text={
                  'Track statistics — keep track of your progress and activity in your profile.'
                }
                img={'/images/Statistic.png'}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
