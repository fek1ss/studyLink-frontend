import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import styles from './styles.module.css';
import logo from '/images/LOGO.png';

const Header = ({ opacity }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={`${opacity === 1 ? styles.header1 : styles.header}`}>
      {opacity === 1 ? (
        <div className="wrapper">
          <div className={styles.header__inner}>
            <img
              className={styles.header__logo}
              src={logo}
              alt="logo"
            />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#fff"
            />
          </div>
        </div>
      ) : (
        <div className="wrapper">
          <div className={styles.header__inner}>
            <img
              className={styles.header__logo}
              src={logo}
              alt="logo"
            />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#fff"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
