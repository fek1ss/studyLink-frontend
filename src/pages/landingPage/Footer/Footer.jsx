import styles from './styles.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.footer__inner}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.footer__logo}>
          <h3>StudyLink</h3>
        </div>

        <div className={styles.footer__socials}>
          <a href="">Frequently asked questions</a>
          <a href="">About project</a>
          <a href="https://www.instagram.com/studylink.kz">
            https://www.instagram.com/studylink.kz
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
