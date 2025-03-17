import React, { useState } from 'react';
import styles from './navbar.module.css';
import { getImageUrl } from '../../utils';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: 'About', value: 'about' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='/'>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt='menu-button'
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          {navLinks.map((link) => (
            <li
              key={link.value}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <a href={`#${link.value}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
