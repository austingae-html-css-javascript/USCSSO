import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import matter from 'gray-matter'
//import fs from 'fs'
//import path from 'path'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSchool } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faTwitter, } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>USCSSO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <div className={styles.org}>
            <h1 className={styles.org__name}>US-CHINA STRATEGIC STUDIES ORGANIZATION</h1>
            <h4 className={styles["org__short-description"]}>A platform for nonpartisan, objective, and student-centered research, analysis, and discussion of Sino-American competition.</h4>
            <div className={styles["org__video-container"]}>
     
            </div>
            <h2 className={styles["org__about-us-title"]}>About Us</h2>
            <p className={styles["org__long-description"]}>The USCSSO is an organization driven by George Washington University students, dedicated to studying US-China strategic competition from an objective and nonpartisan perspective. By establishing intellectual forums to discuss, analyze, learn about, and report on the strategic developments driving Sino-American relations, the crucial geopolitical relationship can be conceptualized to a younger audience. Follow and join us to become part of our movement to bring a fresh perspective to US-China relations, while uplifting student voices and providing a platform to build valuable professional skills.</p>
          </div>
        </header>

        <section>
          <div className={styles["our-values"]}>
            <h2 className={styles["our-values__title"]}>Our Values</h2>
            <div className={styles["our-values__container"]}>
              <div className={`${styles["our-values__value-container"]} ${styles["our-values__value-container--blue-color"]}`}>
                <h3 className={`${styles["our-values__value-title"]} ${styles["our-values--white-color"]}`}>Nonpartisanship</h3>
                <p className={`${styles["our-values__value-description"]} ${styles["our-values--white-color"]}`}>USCSSO is a nonpartisan organization in a highly partisan environment focused on delivering unbiased analysis of complex issues in US-China relations.</p>
              </div>
              <div className={`${styles["our-values__value-container"]} ${styles["our-values__value-container--red-color"]}`}>
                <h3 className={`${styles["our-values__value-title"]} ${styles["our-values--white-color"]}`}>Objectivity</h3>
                <p className={`${styles["our-values__value-description"]} ${styles["our-values--white-color"]}`}>USCSSO aims to retain consistent objectivity by sourcing research from a wide variety of reputable locations, and refraining from the use of bias in analysis</p>
              </div>
              <div className={`${styles["our-values__value-container"]} ${styles["our-values__value-container--blue-color"]}`}>
                <h3 className={`${styles["our-values__value-title"]} ${styles["our-values--white-color"]}`}>Student-led</h3>
                <p className={`${styles["our-values__value-description"]} ${styles["our-values--white-color"]}`}>USCSSO offers a platform for students to educate and become educated on the US-China relationship, while tailoring content to young professionals.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles["our-upcoming-event"]}>
            <h2 className={styles["our-upcoming-event__title"]}>Our Upcoming Event!</h2>
          </div>
        </section>

        <section>
          <div className={styles["articles-projects"]}>
            <h2 className={styles["articles-projects__title"]}>Check Out Our Articles And Projects!</h2>
            <div className={styles["articles-projects__button-container"]}>
              <button className={`${styles["articles-projects__button"]} ${styles["articles-projects__button--margin-right"]} ${styles["articles-projects__button--red-color"]}`}>Articles</button>
              <button className={`${styles["articles-projects__button"]}  ${styles["articles-projects__button--blue-color"]}`}>Projects</button>
            </div>
          </div>
        </section>

        <section>
          <div className={styles["contact-us"]}>
            <h2 className={styles["contact-us__title"]}>Contact Us!</h2>
            <a className={styles["contact-us__email-icon"]} href="mailto:someone@yoursite.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <p className={styles["contact-us__email-sentence"]}>Email Us!</p>

            <a className={styles["contact-us__gw-engage-icon"]} href="https://gwu.campuslabs.com/engage/"><FontAwesomeIcon icon={faSchool} size="2x" /></a>
            <p className={styles["contact-us__gw-engage-sentence"]}>Join Us on GW Engage!</p>

            <div className={styles["contact-us__social-media"]}>
              <p className={styles["contact-us__social-media-title"]}>Follow Us on Social Media!</p>
              <a className={`${styles["contact-us__social-media-facebook-icon"]} ${styles["contact-us__social-media-icon-margin-right"]}`} href="https://www.facebook.com/USCSSO"><FontAwesomeIcon icon={ faFacebook } size="2x" /></a>
              <a className={`${styles["contact-us__social-media-linkedin-icon"]} ${styles["contact-us__social-media-icon-margin-right"]}`} href="https://www.linkedin.com/company/uscssogwu/"><FontAwesomeIcon icon={ faLinkedin } size="2x" /></a>
              <a className={`${styles["contact-us__social-media-instagram-icon"]} ${styles["contact-us__social-media-icon-margin-right"]}`} href="https://www.instagram.com/uschinasso/"><FontAwesomeIcon icon={ faInstagram } size="2x" /></a>
              <a className={styles["contact-us__social-media-twitter-icon"]} href ="https://twitter.com/uscsso"><FontAwesomeIcon icon={ faTwitter } size="2x" /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
