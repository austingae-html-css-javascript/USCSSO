import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLink } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import logo from '../public/images/uscsso-logo.png'

function HideMenu() {
  document.querySelector('.menu').style.cssText = 'left: -100%; transition-property: left; transition-duration: 1s;';
}
function MyApp({ Component, pageProps }) {

  return (
    <>
      {/* Navigation Bar*/}
      <nav className='nav-bar'>
        <div className='nav-bar__left-container'>
          <h1 className="nav-bar__org-name">USCSS</h1>
          <Image 
          className='nav-bar__logo'
          src={logo}
          width={'40px'}
          height={'40px'}
          />
        </div>

        <div className='nav-bar__right-container'>
          <button 
            className='nav-bar__hamburger-menu-button'
            onClick={() => {
              document.querySelector('.menu').style.cssText = 'left: 0%; transition-property: left; transition-duration: 1s;';
            }}>
            <FontAwesomeIcon className='nav-bar__hamburger-menu-icon' icon={ faBars } size="2x" />
          </button>
          <Link href='/'>
            <a className='nav-bar__link nav-bar__link--margin-right'>Home</a>
          </Link>
          <Link href='/events'>
            <a className='nav-bar__link nav-bar__link--margin-right'>Events</a>
          </Link>
          <Link href='/articles'>
            <a className='nav-bar__link nav-bar__link--margin-right'>Articles</a>
          </Link>
          <Link href='/projects'>
            <a className='nav-bar__link nav-bar__link--margin-right'>Projects</a>
            </Link>
          <Link href='/about'>
            <a className='nav-bar__link'>About</a>
          </Link>
        </div>
      </nav>

      <menu className='menu'>
        <button 
          className='menu__x-button'
          onClick={() => {
            HideMenu();
          }}
          >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className='menu__links-social-media-container'>
          <div className='menu__links-container'>
            <Link href='/'>
              <a className='menu__links menu__links--margin-bottom' onClick={() => {HideMenu();}}>Home</a>
            </Link>
            <Link href='/events'>
              <a className='menu__links menu__links--margin-bottom' onClick={() => {HideMenu();}}>Events</a>
            </Link>
            <Link href='/articles'>
              <a className='menu__links menu__links--margin-bottom' onClick={() => {HideMenu();}}>Articles</a>
            </Link>
            <Link href='/projects'>
              <a className='menu__links menu__links--margin-bottom' onClick={() => {HideMenu();}}>Projects</a>
            </Link>
            <Link href='/about'>
              <a className='menu__links' onClick={() => {HideMenu();}}>About</a>
            </Link>
          </div>
          
          <div className='menu__social-media-container'>
            <a href='https://www.facebook.com/USCSSO' target='_blank'>
              <FontAwesomeIcon className='menu__social-media-icon menu__facebook-icon' icon={faFacebook} size="2x"/>
            </a>
            <a href='https://www.linkedin.com/company/uscssogwu/' target='_blank'>
              <FontAwesomeIcon className='menu__social-media-icon menu__linkedin-icon' icon={faLinkedin} size="2x"/>
            </a>
            <a href='https://www.instagram.com/uschinasso/' target='_blank'>
              <FontAwesomeIcon className='menu__social-media-icon menu__instagram-icon' icon={faInstagram} size="2x"/>
            </a>
            <a href='https://twitter.com/uscsso' target='_blank'>
              <FontAwesomeIcon className='menu__social-media-icon menu__twitter-icon' icon={faTwitter} size="2x"/>
            </a>
          </div>
        </div>
      </menu>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

/*
HTML & CSS & Javascript Approach: 
  1) Mobile First Approach - Yes. 
  2) Create the HTML layout - Yes. 
  3) Create the HTML elements - Yes. 
  4) Decorate the HTML elements
  If * {box-sizing: content-box}
  - Parent Div's Width = Child Div's Width+Padding+Border+Margin
  - Parent Div's Width = Block Element's Width+Padding+Border+Margin
  - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
  5) Javascript 
  */
