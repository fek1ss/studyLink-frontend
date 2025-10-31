import { Sling as Hamburger } from 'hamburger-react';
// import { useState } from 'react';
import styles from './styles.module.css';

const Header = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="wrapper">
        <div className={styles.header__inner}>
          <h3 className={styles.header__logo}>Study Link</h3>
          <div className={styles.hamburgerWrapper}>
            {/* <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
