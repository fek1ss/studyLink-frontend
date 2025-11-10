import { useState } from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';


const CardQuizz = ({ questionText, options, correctAnswer, onAnswer }) => {
  const [selected, setSelected] = useState(null); 

  function handleSelect(option) {
    setSelected(option);

    const isCorrect = option === correctAnswer;
    onAnswer(isCorrect);
  }

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <article className={styles.cardQuizz}>
        <header className={styles.cardQuizz__header}>
          <div className={styles.cardQuizz__actions}>
            <button
              className={styles.cardQuizz__btnEdit}
              type="button"
            >
              Edit
            </button>
            <button
              className={styles.cardQuizz__btnDelete}
              type="button"
            >
              Delete
            </button>
          </div>
          <h3 className={styles.cardQuizz__title}>{questionText}</h3>
        </header>

        <section className={styles.cardQuizz__options}>
          <ul>
            {options.map((option, index) => {
              const isCorrect =
                selected === option && option === correctAnswer;
              const isWrong =
                selected === option && option !== correctAnswer;

              return (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`${styles.optionItem}
                  ${isCorrect ? styles.correct : ''}
                  ${isWrong ? styles.wrong : ''}
                `}
                >
                  <span>{option}</span>

                  {/* Иконка результата */}
                  {isCorrect && (
                    <span className={styles.iconCorrect}>✔</span>
                  )}
                  {isWrong && (
                    <span className={styles.iconWrong}>✘</span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </motion.div>
  );
};

export default CardQuizz;
