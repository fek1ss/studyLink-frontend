import { useState } from 'react';
import styles from './styles.module.css';

const FileUploader = ({ onFileUpload, setMode }) => {
  const [alertMessage, setAlertMessage] = useState('');

  const handleFileChange = file => {
    if (!file) return;

    if (
      file.size > 10 * 1024 * 1024 ||
      file.type !== 'application/pdf'
    ) {
      setAlertMessage({
        text: 'File must be a PDF and less than 10MB',
        err: true,
      });
    } else {
      onFileUpload(file);
      setMode('ai');
    }
  };

  return (
    <div className={styles.files}>
      <button
        className={`${styles.file__btn} ${styles.file__btnAi}`}
      >
        <div className={styles.file__uploadFile}>
          Generate quizz with AI
        </div>
        <input
          className={styles.file__inp}
          type="file"
          accept=".pdf"
          onChange={e => handleFileChange(e.target.files[0])}
        />
      </button>
      <button
        className={`${styles.file__btn} ${styles.file__btnYourself}`}
        onClick={() => setMode('yourself')}
      >
        Create quiz manually
      </button>

      <p className="alert-message">
        {alertMessage} 
      </p>
    </div>
  );
};

export default FileUploader;
