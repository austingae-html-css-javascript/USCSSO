import React from 'react'

import styles from '../../styles/event_template.module.css'

import { useState } from 'react'

const EventTemplate = (props) => {
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
        className={styles.event__button}
        onClick={() => {
          if (isLearnMoreButtonClicked == false) {
            setIsLearnMoreButtonClicked(true);
          }
          else if (isLearnMoreButtonClicked == true) {
            setIsLearnMoreButtonClicked(false);
          }
        }}
        >Learn More</button>
        {isLearnMoreButtonClicked && <p className={styles.event__description}>{props.description}</p>}
      </div>
    </div>
  )
}

export default EventTemplate

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements - Yes. 
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript - Yes.
  */