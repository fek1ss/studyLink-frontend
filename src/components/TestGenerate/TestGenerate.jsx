import { useEffect } from 'react';
import { useState } from 'react';

const TestGenerate = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(()=> {
    if (!file) {
      setAlertMessage('');
      return;
    }

    if (file.size > 10 * 1024 * 1024 || file.type !== 'application/pdf') {
      setAlertMessage('File must be a PDF and less than 10MB');
    } else {
      setAlertMessage('');
    }
  },[file])

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!file) {
      setAlertMessage('Please upload a PDF file');
      return;
    }


    const formData = new FormData();
    formData.append('file', file);
    formData.append('numQuestions', 5);
    formData.append('type', 'multiple-choice');

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
    <>
      <div style={{ padding: 20 }}>
        <h2>Generate Quiz from PDF</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          /> 
          <button type="submit" disabled={loading || Boolean(alertMessage)}>
            {loading ? 'Generating...' : 'Generate Quiz'}
          </button>
        </form>
        {alertMessage ? (
          <p style={{ color: 'red', marginTop: 8 }}>{alertMessage}</p>
        ) : null}
      </div>
    </>
  );
};

export default TestGenerate;
