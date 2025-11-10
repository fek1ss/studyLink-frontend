const API_URL = import.meta.env.VITE_API_URL;

export const getQuizzes = async quizz => {
  try {
    const res = await fetch(`${API_URL}/api/quizzes/generate/test`, {
      method: 'POST',
      body: quizz,
    });

    const data = await res.json();
    return data
  } catch (err) {
    console.log(err);
  }
};
