import styles from './styles.module.css';
import CardReason from './../CardReason/CardReason';
import { motion } from 'framer-motion';

const Reasons = () => {
  return (
    <div className={styles.reasons}>
      <motion.div
        className={styles.reasons__card}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CardReason
          type="rowCard"
          text={'📚Prepare for exams faster with AI'}
        />
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CardReason
          type="rowCard"
          text={'🎯 Test your knowledge effortlessly'}
        />
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CardReason
          type="rowCard"
          text={'🤝 Learn from other students'}
        />
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CardReason
          type="rowCard"
          text={'🧠 Develop memory and confidence'}
        />
      </motion.div>

      <button className={styles.reasons__btn}>
        Get Start
      </button>
    </div>
  );
};

export default Reasons;
