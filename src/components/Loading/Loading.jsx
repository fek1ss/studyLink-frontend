import styles from './styles.module.css';

const Loading = () => {
  return (
    <article className={styles.cardSkeleton}>
        <h3 className={styles.cardSkeleton__title}></h3>

      <section className={styles.cardSkeleton__options}>
        <ul>
          <li>
            <label></label>
          </li>
          <li>
            <label></label>
          </li>
          <li>
            <label></label>
          </li>
          <li>
            <label></label>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Loading;
