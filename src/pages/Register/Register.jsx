import styles from './styles.module.css';
import Header from './../../components/Header/Header';
import Input from './../../components/Input/Input';
import { useState } from 'react';
import { useMessage } from '../../hooks/useMessage';
import { register } from './../../api/user';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    course: '',
    gpa: '',
    major: '',
    university: '',
  });

  const { message, showMessage } = useMessage();

  const handleRegister = async e => {
    e.preventDefault();
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.course ||
      !userData.gpa ||
      !userData.major ||
      !userData.university
    ) {
      showMessage('fill in all the fields', true);
      return;
    }
    try {
      const data = await register(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.password,
        userData.course,
        userData.gpa,
        userData.major,
        userData.university,
      );
      if (data.user) {
        navigate('/generate');
        showMessage('Registred successfull!', false);
        setUserData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          course: '',
          gpa: '',
          major: '',
          university: '',
        });
      }
    } catch (err) {
      showMessage(`${err}`, true);
    }
  };

  return (
    <div className={styles.auth}>
      <Header opacity={1} />
      <div className={styles.auth__wrapper}>
        <h1 className={styles.auth__title}>Sign Up</h1>

        <form
          className={styles.auth__form}
          onSubmit={handleRegister}
        >
          <div className={styles.register__doubleInp}>
            <Input
              name="firsName"
              value={userData.firstName}
              label="first name"
              type="text"
              onChange={val =>
                setUserData(prev => ({ ...prev, firstName: val }))
              }
            />
            <Input
              name="lastName"
              value={userData.lastName}
              label="last name"
              type="text"
              onChange={val =>
                setUserData(prev => ({ ...prev, lastName: val }))
              }
            />
          </div>
          <div className={styles.register__doubleInp}>
            <Input
              name="gpa"
              value={userData.gpa}
              label="gpa"
              type="number"
              onChange={val =>
                setUserData(prev => ({ ...prev, gpa: val }))
              }
            />
            <div className={styles.register__courseLabel}>
              <select
                className={styles.register__course}
                value={userData.course}
                name="course"
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    course: e.target.value,
                  }))
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <label>Course</label>
            </div>
          </div>
          <div className={styles.register__doubleInp}>
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
          </div>

          <div className={styles.register__doubleInp}>
            <Input
              name="major"
              value={userData.major}
              label="major"
              type="text"
              onChange={val =>
                setUserData(prev => ({ ...prev, major: val }))
              }
            />
            <Input
              name="university"
              value={userData.university}
              label="university"
              type="text"
              onChange={val =>
                setUserData(prev => ({ ...prev, university: val }))
              }
            />
          </div>
          <button className={styles.auth__btn} type="submit">
            Create account
          </button>
          {message && (
            <p className={message.error ? 'error' : 'success'}>
              {message?.text}
            </p>
          )}  
          <div className={styles.auth__line}></div>
          <p className={styles.auth__loginHead}>
            Already have an account?
          </p>
          <button
            className={styles.auth__authBtn}
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
