import React from 'react'
import Link from "gatsby-link";

import styles from "./navigation.module.css";

export default () => (
  <nav className={styles.header}>
    <ul>
      <li className={styles.home}>
        <Link to="/" className={styles.link}>FTF</Link>
      </li>
      <div className={styles.right}>
        {/* <li>
          <Link to="/sponsors" className={styles.link}>Sponsors</Link>
        </li> */}
        <li>
          <a href="https://twitter.com/ftfpod" className={styles.link}>About</a>
        </li>
        <li>
          <a href="https://itunes.apple.com/us/podcast/friends-talk-frontend/id1190447982" className={styles.link}>Subscribe</a>
        </li>
      </div>
    </ul>
  </nav>
)
