import React from 'react'

//CSS
import styles from '../styles/events.module.css'

//EventTemplate Component
import EventTemplate from '../components/events/event_template'

const Events = ({events}) => {
  return (
    <main>
      <h2 className={styles.events__title}>Upcoming Events</h2>
      {events.map((event) => {
        return (
          <EventTemplate 
            title={event.title} 
            dateAndLocation={event.dateAndLocation} 
            description={event.description} 
            image={event.image}

            key={event.title}
            />
        );
      })}
    </main>
  )
  
}

export default Events

export async function getStaticProps() {
  const events = [
    {
      title: "Rising Tide Simulation",
      dateAndLocation: "April 09, 11:00 AM - 5:00 PM | Funger Hall ",
      description: "Join us for our GWU's Strategic Crisis Simulation's annual United States vs. China simulation with a green team twist! This year's Rising Tides will focus on the South China Sea and the implications of contested oil rights between China and the Philippines. When a Philippine National Oil Company ship is seized by what appears to be Chinese fishermen, tensions run high in the region with potentially disastrous consequences.",
      image: "/images/events/rising-tides-simulation.webp"
    },
    {
      title: "Southeast Asia: Roundtable #3",
      dateAndLocation: "Mar 31, 7:00 PM – 8:00 PM | ",
      description: "",
      image: "/images/events/southeast-asia.webp"
    },
    {
      title: "USCSSO SPRING CONFERENCE",
      dateAndLocation: "Wed, March 2  |  ESIA City View Room",
      description: "During a virtual meeting last November, President Xi Jinping and President Joe Biden reaffirmed their commitment to maintaining healthy competition, discussing potential areas of cooperation but failing to come to a consensus on key areas of disagreement. What areas hold the best prospects for cooperation and what will be the most salient challenges between the two countries? Join the US-China Strategic Studies Organization for this timely event as our guest speakers Professors David Shambaugh and Robert Sutter discuss the outlook of US-China relations.",
      image: "/images/events/uscsso-spring-conference.webp"
    },
    {
      title: "US-China Competition and Cooperation in Africa: US-China Youth Expo #1",
      dateAndLocation: "Wed, Feb 23  |  ESIA Linder Commons, 602",
      description: "In this event, we will speak with former Ambassador and Elliott School professor, David Shinn, about his experience with American and Chinese policy in the region and recent developments in US-China relations in Africa. After Dr. Shinn shares his experiences and insights, we will have a moderated Q&A session before opening the floor to audience questions. This a public event and may be attended virtually or in-person",
      image: "/images/events/us-china-comp-coop-africa.webp"
    }

  ]
  return {
    props: {
      events: events
    }, 
  }
}