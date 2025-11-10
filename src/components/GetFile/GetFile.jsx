import { useState } from 'react';
import styles from './styles.module.css';
import { getQuizzes } from '../../api/quiz';
import CardQuizz from '../CardQuizz/CardQuizz';
import Loading from '../Loading/Loading';

const GetFile = () => {
  const [switchBtn, setSwitchBtn] = useState('');
  const [quizState, setQuizState] = useState({
    quizzes: [],
    results: {},
    message: '',
    loading: false,
    switchBtn: '',
  });

  const [quizOptions, setQuizOptions] = useState({
    numQuestions: 5,
    quizType: 'multiple-choice',
  });

  const [fileData, setFileData] = useState({
    file: null,
    fileName: '',
    alertMessage: '',
  });

  const handleFileChange = e => {
    const file = e.target.files[0];
    let alertMessage = '';

    if (!file) return;

    if (
      file.size > 10 * 1024 * 1024 ||
      file.type !== 'application/pdf'
    ) {
      alertMessage = 'File must be a PDF and less than 10MB';
    }

    setFileData({ file, fileName: file.name, alertMessage });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!fileData.file) {
      setFileData(prev => ({
        ...prev,
        alertMessage: 'Please upload a PDF file',
      }));
      return;
    }

    const formData = new FormData();
    formData.append('file', fileData.file);
    formData.append('numQuestions', quizOptions.numQuestions);
    formData.append('type', quizOptions.quizType);

    setQuizState(prev => ({ ...prev, loading: true }));
    try {
      const quizzes = await getQuizzes(formData);

      setQuizState(prev => ({
        ...prev,
        quizzes: quizzes.questions,
      }));
      console.log(quizzes);
    } catch (err) {
      console.error('Error generating quiz:', err);
    } finally {
      setQuizState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className={styles.getFile}>
      <div className={styles.getFile__headline}>
        <h1 className={styles.getFile__welcomeTitle}>
          Welcome to Study Link! <br />
          Learn, share your knowledge, and complete quizzes created by
          other users.
        </h1>
        <p>
          Here you can create quizzes for yourself and other students.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.getFile__form}>
        <p className={styles.getFile__fileName}>
          {fileData.fileName}
        </p>

        <div className={styles.getFile__actions}>
          {fileData.file !== null && switchBtn !== 'yourself' ? (
            <div className={styles.getFile__actionsGenerate}>
              <button
                className={`${styles.getFile__btn} ${styles.getFile__btnAi}`}
                type="submit"
                disabled={
                  quizState.loading ||
                  Boolean(fileData.alertMessage)
                }
              >
                {quizOptions.loading ? 'Generating...' : 'Generate!'}
              </button>
              <div className={styles.getFile__quizzOptions}>
                <select
                  className={styles.getFile__numberQuiz}
                  name="select number"
                  onChange={e =>
                    setQuizOptions(prev => ({
                      ...prev,
                      numQuestions: e.target.value,
                    }))
                  }
                  value={quizOptions.numQuestions}
                >
                  <option>number of quizzes</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>

                <select
                  className={styles.getFile__typeQuiz}
                  onChange={e =>
                    setQuizOptions(prev => ({
                      ...prev,
                      quizType: e.target.value,
                    }))
                  }
                  value={quizOptions.quizType}
                >
                  <option>type of quiz</option>
                  <option value="multiple-choose">
                    multiple choose
                  </option>
                  <option value="text">text</option>
                </select>
              </div>
            </div>
          ) : (
            <button
              className={`${styles.getFile__btn} ${styles.getFile__btnAi}`}
            >
              <div className={styles.getFile__uploadFile}>
                Generate quizz with AI
              </div>
              <input
                className={styles.getFile__inp}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                onClick={() => setSwitchBtn('ai')}
              />
            </button>
          )}

          {switchBtn !== 'ai' && (
            <button
              className={`${styles.getFile__btn} ${styles.getFile__btnYourself}`}
              onClick={() => setSwitchBtn('yourself')}
            >
              Create quiz by yourself
            </button>
          )}
        </div>

        <p style={{ color: 'orange' }}>{fileData.alertMessage}</p>
      </form>

      <div className={styles.quizzes}>
        {quizState.loading && <Loading />}
        {quizState.quizzes.map((quizz, index) => (
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

        {quizState.quizzes.length > 0 && (
          <button
            className={styles.getFile__resultsBtn}
            onClick={() => {
              const totalCorrect = Object.values(
                quizState.results,
              ).filter(Boolean).length;
              setQuizState(prev => ({
                ...prev, message:`Test results: ${totalCorrect}/${quizState.quizzes.length}`,
              }));
            }}
          >
            Show results
          </button>
        )}
      </div>
      {quizState.message && (
        <div className={styles.getFile__containerResults}>
          <p className={styles.getFile__results}>
            {quizState.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default GetFile;
