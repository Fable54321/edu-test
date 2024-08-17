import React from 'react'
import styles from './Mobile.module.css'
const Mobile = () => {
  return (
    <>
      <div className={styles["mobile-container"]}>
        <div className={styles.title}>
          <h1>Le trésor décomposé</h1>
        </div>
        <div className={styles.paragraph}>
          Tu as trouvé le trésor, malheureusement celui-ci nécéssite 5 clés pour
          être ouvert. Ces 5 clés ont été volées par des pirates barbares qui
          sont tout sauf bien intentionnés. Tu devras leur démontrer tes
          connaissances en décomposition des nombres pour éviter de perdre de
          l'énergie au combat. Sauras-tu relever ce défi ?
        </div>
        <div className={styles['mobile-start-button']}>
          <button>Commencer</button>
        </div>
      </div>
    </>
  );
};

export default Mobile
