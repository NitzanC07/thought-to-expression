'use client'
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import menuIcon from '@/images/icons/menu-icon.svg';
import closeIcon from '@/images/icons/close-icon.svg';
import Image from 'next/image';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function Header() {

  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const date = new Date();
  const today = `${date.getDate()}.${date.getMonth() +1}.${date.getFullYear()}`;
  

  const toggleNavBar = () => {
    isNavBarOpen ? setIsNavBarOpen(false) : setIsNavBarOpen(true);
  }

  return (
    <header className={styles.container}>
      {
        isNavBarOpen && <NavigationBar toggleNavBar={toggleNavBar} />
      }
      <div className={styles.logoAndNav}>
        <button className={styles.navBtn} onClick={toggleNavBar}>
          <Image className={styles.menuIcon} src={isNavBarOpen ? closeIcon : menuIcon} alt='Menu' />
        </button>
        <div className={styles.logo}>
          <Link className={styles.titleLink} href='/'>
            <h1 className={styles.title}>ממחשבה להבעה</h1>
            <p className={styles.slogen}>מקליד את דעתי</p>
          </Link>
        </div>
      </div>
        <div className={styles.date}>{today}</div>
    </header>
  )
}
