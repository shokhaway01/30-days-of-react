import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
  return (
      <footer className={s.footer}>
          <ul className={s.container}>
              <li>Company</li>
              <li>Telephone</li>
              <li>Resourses</li>
          </ul>
      </footer>
  )
}

export default Footer