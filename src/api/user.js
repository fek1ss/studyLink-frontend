const API_URL = import.meta.env.VITE_API_URL;

export const register = async (firstName, lastName, email, password, course, gpa, major, university) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({firstName, lastName, email, password, course, gpa, major, university})
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.error);

  sessionStorage.setItem('token', data.token);
  return data;
}

export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({email, password})
  });

  const data = await res.json();

  if(!res.ok) throw new Error(data.error);

  sessionStorage.setItem('token', data.token);
  return data;
}