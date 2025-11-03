import styles from './styles.module.css';

const CardReason = ({ text, img, type }) => {
  return (
    <>
      {type === 'card' ? (
        <div className={styles.cardReason}>
          <p className={styles.cardReason__text}>{text}</p>
          <img className={styles.cardReason__img} src={img} alt="icon" />
        </div>
      ) : (
        <div className={styles.rowCard}>
          {/* <img className={styles.rowCard__img} src={img} alt="icon" /> */}
          <p className={styles.rowCard__text}>{text}</p>
        </div>
      )}
    </>
  );
};

export default CardReason;
