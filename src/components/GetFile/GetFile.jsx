import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const GetFile = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [switchBtn, setSwitchBtn] = useState('');
  const [fileName, setFileName] = useState('');
  const [numQuestions, setNumQuestions] = useState(5);
  const [quizType, setQuizType] = useState('multiple-choice');

  useEffect(() => {
    if (!file) {
      setAlertMessage('');
      return;
    }

    if (
      file.size > 10 * 1024 * 1024 ||
      file.type !== 'application/pdf'
    ) {
      setAlertMessage('File must be a PDF and less than 10MB');
    } else {
      setAlertMessage('');
    }
  }, [file]);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!file) {
      setAlertMessage('Please upload a PDF file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('numQuestions', numQuestions);
    formData.append('type', quizType);

    setLoading(true);
    try {
      const response = await fetch(
        'http://localhost:5000/api/quizzes/generate/test',
        {
          method: 'POST',
          body: formData,
        },
      );

      const data = await response.json();
      console.log('AI quiz: ', data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
        <p className={styles.getFile__fileName}>{fileName}</p>

        <div className={styles.getFile__actions}>
          {file !== null && switchBtn !== 'yourself' ? (
            <div className={styles.getFile__actionsGenerate}>
              <button
                className={`${styles.getFile__btn} ${styles.getFile__btnAi}`}
                type="submit"
                disabled={loading || Boolean(alertMessage)}
              >
                {loading ? 'Generating...' : 'Generate!'}
              </button>
              <div className={styles.getFile__quizzOptions}>
                {/* <div className={styles.getFile__input_container}>
                  <input
                    type="number"
                    max={10}
                    name="name"
                    placeholder=" "
                  />
                  <label htmlFor="name">number of quizzes</label>
                </div> */}

                <select
                  className={styles.getFile__numberQuiz}
                  name="select number"
                  onChange={e => setNumQuestions(e.target.value)}
                  value={numQuestions}
                >
                  <option>number of quizzes</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                </select>

                <select
                  className={styles.getFile__typeQuiz}
                  onChange={e => setQuizType(e.target.value)}
                  value={quizType}
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
      </form>
    </div>
  );
};

export default GetFile;
