import React from 'react'
import Image from 'next/image'

import styles from '../styles/about.module.css'

const About = ({teamMemberList}) => {
  return (
    <main>
      <section className={`${styles['our-story']} ${styles.section}`}>
        <h1 className={styles.title}>Our Story</h1>
        <hr className={`${styles['line']} ${styles['line--short-size']} ${styles['line--red-color']}`}></hr>
        <p 
        className={`${styles['our-story__description']} 
                    ${styles['rounded-corners-version-1']} 
                    ${styles['our-story__description-1--margin-left-auto']}
                    ${styles['our-story__description-1--margin-bottom']}`}>Founded in February 2020 at the George Washington University, the US-China Strategic Studies Organization was built to address the lack of holistic and unbiased study of Sino-American relations.</p>
        <div className={styles['ourStoryBottomContainer']}>
          <p className={`${styles['our-story__description']} ${styles['rounded-corners-version-2']}`}>Since its founding, the USCSSO has grown into a community of forward-thinking students analyzing, discussing, and building an understanding of US-China relations. Through weekly newsletters, events and community engagement, high-level research in various mediums, and a firm willingness to objectively analyze complex issues, USCSSO uplifts hardworking students and educates a wide audience on Sino-American relations.</p>
          <div className={styles['our-story__logo-container']}>
            <img 
            className={`${styles['our-story__logo']} ${styles['our-story__logo--animation']}`}
            src="/images/uscsso-logo.png"
            />
          </div>

        </div>

      </section>

      <section className={`${styles.ourValues} ${styles.section}`}>
        <h1 className={styles.title}>Our Values</h1>
        <hr className={`${styles['line']} ${styles['line--short-size']} ${styles['line--blue-color']}`}></hr>
        <div className={styles['ourValues--flexbox']}>
          <div className={styles.ourValues__blueContainers}>
            <div className={`${styles['ourValues__container']} ${styles['rounded-corners-version-1']} ${styles['ourValues__container--margin-left-auto']}`}>
              <p className={styles.ourValues__paragraph}>We were founded with a guiding principle that discourse in international affairs and US-China relations particularly, could be elevated with more platforms for unbiased exchange. On college campuses and in cities such as Washington DC, it is difficult to find places that bring together people with multipartisan viewpoints to study partisan issues. So, even though USCSSO contributors and members come from all across political, cultural, and social spectrums, we are all dedicated to upholding nonpartisan and collaborative environments.</p>
            </div>
            <div className={`${styles['ourValues__container']} ${styles['rounded-corners-version-2']}`}>
              <p className={styles.ourValues__paragraph}>To remain nonpartisan in analysis, discussion, and research, the USCSSO is committed to not being a policy-recommending institution, refraining from subjectivity and opinion, and always operating with honesty.</p>
              <ul className={styles.ourValues__list}>
                <li>By not recommending policy, we remove the potential for an influx of bias.</li>
                <li>By refraining from subjectivity and opinion, we ensure contributors&apos; valid political leanings do not influence USCSSO content.</li>
                <li>By operating with honesty, and maintaining a mindset of improvement and revision, we can fix mistakes and take lessons from the community. </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['meet-our-team']} ${styles.section}`}>
        <h1 className={`${styles.title} ${styles['meet-our-team__title--large-size']}`}>Meet Our Team</h1>
        <hr className={`${styles['line']} ${styles['line--long-size']}`} />

        <div className={styles['meet-our-team--grid']}>
        {teamMemberList.map((teamMember) => {
          return (
            <div className={styles['team-member']} key={teamMember.name}>
              <div className={styles['team-member__image-container']}>
                <img 
                  className={styles['team-member__image']}
                  src={teamMember.image}
                />
              </div>
              <div className={styles['team-member__description-container']}>
                <h4 className={`${styles['team-member__name']} ${styles['team-member--font-size-large']}`}>{teamMember.name}</h4>
                <p className={`${styles['team-member__year']} ${styles['team-member--font-size-small']}`}>Year: {teamMember.year}</p>
                <p className={`${styles['team-member__major']} ${styles['team-member--font-size-small']}`}>Major: {teamMember.major}</p>
                <p className={`${styles['team-member__role']} ${styles['team-member--font-size-small']}`}>Role: {teamMember.role}</p>
              </div>
            </div>
          );
        })}
        </div>

      </section>
    </main>
  )
}

export default About

//Before the website page loads, getStaticProps runs!
export async function getStaticProps() {
  console.log("website loading");
  const teamMemberList =[
    {
      image: "/images/contributors/tappy-lung.webp",
      name:"Tappy Lung",
      year:"2024",
      major:"International Affairs and Political Communications",
      role:"President"
    },
    {
      image: "/images/contributors/zack-rosenfeld.webp",
      name: "Zack Rosenfeld",
      year: "2023",
      major: "International Affairs and Economics",
      role: "Co-Founder"
    },
    {
      image: "/images/contributors/chloe-chu.webp",
      name: "Chloe Chu",
      year: "2023",
      major: "International Business & Finance",
      role: "Academic Contributor"
    },
    {
      image: "/images/contributors/megan-shen.webp",
      name: "Megan Shen",
      year: "2024",
      major: "International Affairs",
      role: "Director of Operations"
    },
    {
      image: "/images/contributors/xianran-zang.webp",
      name: "Xianran Zang",
      year: "2024",
      major: "International Affairs",
      role: "Operations and Outreach Contributor"
    },
    {
      image: "/images/contributors/nicole-wei.webp",
      name: "Nichole Wei",
      year: "2025",
      major: "International Affairs",
      role: "Social Media Director"
    },
    {
      image: "/images/contributors/zoella-haren.webp",
      name: "Zoella O Haren",
      year: "2024",
      major: "International Affairs",
      role: "Website Developer"
    },
    {
      image: "/images/contributors/ishani-chettri.webp",
      name: "Ishani Chettri",
      year: "2024",
      major: "Journalism & International Affairs",
      role: "Director of Research"
    },
    {
      image: "/images/contributors/kaitlyn-yuan.webp",
      name: "Kaitlyn Yuan",
      year: "2023",
      major: "International Affairs with Conflict Resolution & Asia Concentration",
      role: "Director of Academic Engagement"
    },
    {
      image: "/images/contributors/aedan-yohannan.webp",
      name: "Aedan Yohannan",
      year: "2024",
      major: "International Affairs & Chinese",
      role: "Director of Newsletter"
    },
    {
      image: "/images/contributors/schuyler-van-tassel.webp",
      name: "Schuyler Van Tassel",
      year: "2024",
      major: "International Affairs & Chinese",
      role: "Newsletter Director"
    },
    {
      image: "/images/contributors/emily-zimmerman.webp",
      name: "Emily Zimmerman",
      year: "2023",
      major: "International Affairs ",
      role: "Director of Discussion"
    },
    {
      image: "/images/contributors/dominic-nozzarella.webp",
      name: "Dominic Nozzarella",
      year: "2023",
      major: "International Affairs ",
      role: "Academic Engagement"
    },
    {
      image: "/images/contributors/emily-scott.webp",
      name: "Emily Scott",
      year: "",
      major: "",
      role: ""
    },
    {
      image: "/images/contributors/henry-tsai.webp",
      name: "Henry Tsai",
      year: "2024",
      major: "International Affairs ",
      role: "Newsletter Contributor"
    },
    {
      image: "/images/contributors/dylan-shepherd.webp",
      name: "Dylan Shepherd",
      year: "2025",
      major: "International Affairs and Economics",
      role: "Academic Engagement"
    },
    {
      image: "/images/contributors/julian-anderson.webp",
      name: "Julian Anderson",
      year: "2023",
      major: "International Affairs and Economics",
      role: "Newsletter Contributor"
    },
    {
      image: "/images/contributors/sam-horner.webp",
      name: "Sam Horner",
      year: "2024",
      major: "Chinese Language & Literature, International Affairs",
      role: "Contributor"
    },
    {
      image: "/images/contributors/viktor-olah.webp",
      name: "Viktor Olah",
      year: "2025",
      major: "International Affairs ",
      role: "Newsletter Contributor"
    },
    {
      image: "/images/contributors/daniel-choi.webp",
      name: "Daniel Choi",
      year: "2025",
      major: "International Affairs",
      role: "Academic Engagement"
    },
    {
      image: "/images/contributors/anne-lee.webp",
      name: "Anne Lee",
      year: "2024",
      major: "Political Science, International Affairs, and Economics ",
      role: "Academic Engagement"
    },
    {
      image: "/images/contributors/andrew-j-harding.webp",
      name: "Andrew J Harding",
      year: "2022",
      major: "International Affairs, Asian Studies, Political Science ",
      role: "Academic Engagement"
    },
    {
      image: "/images/contributors/nick-camargo.webp",
      name: "Nick Camargo",
      year: "2024",
      major: "International Affairs",
      role: "Academic Engagement"
    },
  ];

  return {
    props: {
      teamMemberList: teamMemberList,
    },
  }
}