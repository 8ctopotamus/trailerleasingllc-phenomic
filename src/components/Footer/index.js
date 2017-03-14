import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href="https://icshelpsyou.com"
        target="_blank"
        className={ styles.phenomicReference }
      >
        { "Site created and maintained by " }
        <span className={ styles.phenomicReferenceName }>
          {"< In-house Computer Services />"}
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
