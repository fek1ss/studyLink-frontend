const API_URL = import.meta.env.VITE_API_URL;

export const getQuizzes = async ({ token, file, count, type }) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("count", Number(count));
    formData.append("type", type);

    const res = await fetch(`${API_URL}/api/quizzes/generate`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, 
      },
      body: formData
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to generate quiz");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

