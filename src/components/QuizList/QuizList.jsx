import CardQuizz from "../CardQuizz/CardQuizz";
import styles from './styles.module.css';

const QuizList = ({ quizzes, onAnswer }) => {
  return (
    <div className={styles.quizList}>
      {quizzes.map((quizz, index) => ( 
        <CardQuizz
          key={index}
          questionText={quizz.questionText}
          options={quizz.options}
          correctAnswer={quizz.correctAnswer}
          onAnswer={isCorrect => onAnswer(index, isCorrect)}
        />
      ))}
    </div>
  );
};

export default QuizList;
