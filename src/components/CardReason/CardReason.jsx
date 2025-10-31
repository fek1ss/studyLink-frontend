import styles from './styles.module.css';

const CardReason = ({ text, img }) => {
  return (
    <div className={styles.cardReason}>
      <p className={styles.cardReason__text}>{text}</p>
      <img className={styles.cardReason__img} src={img} alt="" />
    </div>
  );
};

export default CardReason;
