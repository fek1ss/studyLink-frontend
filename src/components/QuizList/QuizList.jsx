import CardQuizz from "../CardQuizz/CardQuizz";

const QuizList = ({ quizzes }) => {
  return (
    <div>
      {quizzes.map((quizz, index) => ( 
        <CardQuizz
          key={index}
          questionText={quizz.questionText}
          options={quizz.options}
          correctAnswer={quizz.correctAnswer}
          onAnswer={isCorrect => {
            setQuizState(prev => ({
              ...prev,
              results: { ...prev.results, [index]: isCorrect },
            }));
          }}
        />
      ))}
    </div>
  );
};

export default QuizList;
