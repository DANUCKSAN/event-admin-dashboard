import React from "react";

const events = [
  {
    title: "Tech Conference 2024",
    date: "March 15, 2024",
    location: "San Francisco, CA",
    description:
      "Join us for a day of insightful talks and networking with industry leaders in technology.",
    imageUrl: "/event1.jpg",
  },
  {
    title: "Art & Design Expo",
    date: "April 10, 2024",
    location: "New York, NY",
    description:
      "Explore the latest trends in art and design with exhibitions from top artists around the world.",
    imageUrl: "/event2.jpg",
  },
  {
    title: "Health & Wellness Fair",
    date: "May 5, 2024",
    location: "Austin, TX",
    description:
      "Discover new health and wellness products, attend workshops, and meet experts in the field.",
    imageUrl: "/event3.avif",
  },
  {
    title: "Music Festival 2024",
    date: "June 20, 2024",
    location: "Los Angeles, CA",
    description:
      "Experience live performances from top artists across multiple genres in a vibrant festival setting.",
    imageUrl: "/event4.jpeg",
  },
];

const EventCard = () => {
  return (
    <div className="events-wrapper">
      <h3 className="events-title">Upcoming Events</h3>

      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="event-image"
            />
            <div className="event-info">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
