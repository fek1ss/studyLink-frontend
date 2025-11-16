import { useState } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import auth from '../../pages/Register/styles.module.css';
import { useMessage } from '../../hooks/useMessage';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/user';

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const { message, showMessage } = useMessage();

  const handleLogin = async(e) => {
    e.preventDefault();
    
    if(!userData.email || !userData.password) {
      showMessage("fill in all the fields", true);
      return;
    }

    try {
      const data = await login(userData.email, userData.password);

      if(data.token) {
        navigate('/generate');
        setUserData({
          email: '',
          password: '',
        })
      }
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  return (
    <div className={auth.auth}>
      <Header opacity={1} />

      <div className={auth.auth__wrapper}>
        <h1 className={auth.auth__title}>Login</h1>

        <form className={auth.auth__form} onSubmit={handleLogin}>
          <Input
            name="email"
            value={userData.email}
            label="email"
            type="email"
            onChange={val =>
              setUserData(prev => ({ ...prev, email: val }))
            }
          />
          <Input
            name="password"
            value={userData.password}
            label="password"
            type="password"
            onChange={val =>
              setUserData(prev => ({ ...prev, password: val }))
            }
          />

          <button className={auth.auth__btn} type="submit">
            Login
          </button>
          {message && (
            <p className={message.error ? 'error' : 'success'}>
              {message?.text}
            </p>
          )}
          <div className={auth.auth__line}></div>
          <p className={auth.auth__loginHead}>
            Already have an account?
          </p>
          <button
            className={auth.auth__authBtn}
            onClick={() => navigate('/register')}
          >
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
