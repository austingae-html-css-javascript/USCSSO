import React from 'react'

//CSS
import styles from '../styles/events.module.css'

//EventTemplate Component
import PastEventTemplate from '../components/events/past_event_template'

import UpcomingEventTemplate from '../components/events/upcoming_event_template'


import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Events = ({pastEvents, upcomingEvents}) => {
  return (
    <main>
      <h2 className={styles.events__title}>Upcoming Events</h2>
      {upcomingEvents.map((upcomingEvent) => {
        console.log(upcomingEvent.data.signUpLink);

        return (
          <UpcomingEventTemplate 
            title={upcomingEvent.data.title} 
            dateAndLocation={upcomingEvent.data.dateAndLocation} 
            description={upcomingEvent.data.description} 
            image={upcomingEvent.data.image}
            rsvp_form_link={upcomingEvent.data.signUpLink}
        />
        );
      })}
      <h2 className={styles.events__title}>Past Events</h2>
      {pastEvents.map((pastEvent) => {
        return (
          <PastEventTemplate 
            title={pastEvent.data.title} 
            dateAndLocation={pastEvent.data.dateAndLocation} 
            description={pastEvent.data.description} 
            image={pastEvent.data.image}
            />
        );
      })}
    </main>
  )
    }

export default Events

export async function getStaticProps() {
  //Past Events
  const pastEventFilesList = fs.readdirSync(path.join('events','past-events'));

  const pastEvents = [];
  pastEventFilesList.forEach((pastEvent) => {
    const rawPastEvent = fs.readFileSync(path.join('events', 'past-events', pastEvent), 'utf-8');
    const pastEventObject = matter(rawPastEvent);
    pastEvents.push(pastEventObject);
  })

  //Upcoming Events
  const upcomingEventFilesList = fs.readdirSync(path.join('events', 'upcoming-events'));

  const upcomingEvents = [];
  upcomingEventFilesList.forEach((upcomingEvent) => {
    const rawUpcomingEvent = fs.readFileSync(path.join('events', 'upcoming-events', upcomingEvent), 'utf-8');
    const upcomingEventObject = matter(rawUpcomingEvent);
    upcomingEvents.push(upcomingEventObject);
  });

  return {
    props: {
      pastEvents: JSON.parse(JSON.stringify(pastEvents)),
      upcomingEvents: JSON.parse(JSON.stringify(upcomingEvents))
    }
  }
}
