import React from 'react'
import Link from 'next/link'

import styles from '../../styles/event_template.module.css'

import { useState } from 'react';

const UpcomingEventTemplate = (props) => {
  const [isLearnMoreButtonClicked, setIsLearnMoreButtonClicked] = useState(false);
  return (
    <div className={styles.event}>
      <div className={styles.event__imageContainer}>
        <img className={styles.event__image} src={props.image} />
      </div>
      <div className={styles.event__descriptionContainer}>
        <p className={styles.event__date}>{props.dateAndLocation}</p>
        <h4 className={styles.event__title}>{props.title}</h4>
        <button 
          className={`${styles.event__button} ${styles['event__button--margin-right']}`}
          onClick={() => {
            if (isLearnMoreButtonClicked == false) {
              setIsLearnMoreButtonClicked(true);
            }
            else if (isLearnMoreButtonClicked == true) {
              setIsLearnMoreButtonClicked(false);
            }
          }}>
          Learn More
        </button>

        <button 
          className={`${styles.event__button} ${styles['event__button--padding']}`}
          onClick={() => {
            document.location.href=props.rsvp_form_link
          }}>
            RSVP
        </button>



        {isLearnMoreButtonClicked && <p className={styles.event__description}>{props.description}</p>}
      </div>
    </div>
  )
}

export default UpcomingEventTemplate