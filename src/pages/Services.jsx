import React from 'react';
import { FaChurch, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPlayCircle, FaDownload } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { BiChurch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  // Service times data
  const serviceTimes = [
    {
      day: 'Sunday',
      services: [
        { name: 'Early Morning Service', time: '7:00 AM - 8:30 AM' },
        { name: 'Main Service', time: '9:00 AM - 11:30 AM' },
        { name: 'Evening Service', time: '4:00 PM - 6:00 PM' }
      ]
    },
    {
      day: 'Wednesday',
      services: [
        { name: 'Bible Study', time: '5:30 PM - 7:00 PM' },
        { name: 'Prayer Meeting', time: '7:00 PM - 8:00 PM' }
      ]
    },
    {
      day: 'Friday',
      services: [
        { name: 'Youth Service', time: '5:00 PM - 7:00 PM' },
        { name: 'Overnight Prayer', time: '10:00 PM - 6:00 AM', note: 'First Friday of the month' }
      ]
    },
    {
      day: 'Saturday',
      services: [
        { name: 'Choir Practice', time: '10:00 AM - 12:00 PM' },
        { name: 'Men\'s Fellowship', time: '8:00 AM - 10:00 AM', note: '1st Saturday' },
        { name: 'Women\'s Fellowship', time: '9:00 AM - 11:00 AM', note: '2nd Saturday' }
      ]
    }
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Baptism Sunday',
      date: 'June 15, 2023',
      time: '9:00 AM',
      location: 'Main Sanctuary',
      description: 'Join us as we celebrate new believers being baptized.'
    },
    {
      id: 2,
      title: 'Church Picnic',
      date: 'June 20, 2023',
      time: '11:00 AM',
      location: 'City Park',
      description: 'A fun day of food, games, and fellowship for the whole family.'
    },
    {
      id: 3,
      title: 'Bible Study Series: The Book of Romans',
      date: 'June 10, 2023',
      time: '5:30 PM',
      location: 'Fellowship Hall',
      description: 'An in-depth study of Paul\'s letter to the Romans.'
    }
  ];

  // Recent sermons data
  const recentSermons = [
    {
      id: 1,
      title: 'Walking in Faith',
      preacher: 'Rev. John Mwangi',
      date: 'June 5, 2023',
      reference: 'Hebrews 11:1-6',
      image: '/images/sermons/sermon1.jpg',
      audio: '/audio/sermon1.mp3',
      video: 'https://www.youtube.com/embed/example1'
    },
    {
      id: 2,
      title: 'The Power of Prayer',
      preacher: 'Pastor Sarah Wanjiku',
      date: 'May 29, 2023',
      reference: 'James 5:13-18',
      image: '/images/sermons/sermon2.jpg',
      audio: '/audio/sermon2.mp3',
      video: 'https://www.youtube.com/embed/example2'
    },
    {
      id: 3,
      title: 'Living by Grace',
      preacher: 'Rev. Peter Kamau',
      date: 'May 22, 2023',
      reference: 'Ephesians 2:8-10',
      image: '/images/sermons/sermon3.jpg',
      audio: '/audio/sermon3.mp3',
      video: 'https://www.youtube.com/embed/example3'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero" style={{ backgroundImage: 'url("/images/services-banner.jpg")' }}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Join us for worship, fellowship, and the Word of God</p>
        </div>
        <div className="overlay"></div>
      </section>

      {/* Service Times Section */}
      <section className="service-times section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">When We Meet</span>
            <h2 className="section-title">Service Times</h2>
            <div className="divider"></div>
            <p className="section-description">
              We welcome you to join us for any of our weekly services and activities.
            </p>
          </div>
          
          <div className="service-times-grid">
            {serviceTimes.map((day, index) => (
              <div key={index} className="service-day">
                <div className="day-header">
                  <FaCalendarAlt className="day-icon" />
                  <h3>{day.day}</h3>
                </div>
                <ul className="service-list">
                  {day.services.map((service, i) => (
                    <li key={i} className="service-item">
                      <div className="service-name">
                        <BiChurch className="service-icon" />
                        <span>{service.name}</span>
                      </div>
                      <div className="service-time">
                        <FaClock className="time-icon" />
                        <span>{service.time}</span>
                      </div>
                      {service.note && <div className="service-note">{service.note}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="service-cta">
            <div className="cta-content">
              <div className="cta-icon">
                <FaChurch />
              </div>
              <div className="cta-text">
                <h3>Plan Your Visit</h3>
                <p>We'd love to welcome you to one of our services. Here's what you can expect.</p>
              </div>
              <Link to="/visit" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">What's Happening</span>
            <h2 className="section-title">Upcoming Events</h2>
            <div className="divider"></div>
            <p className="section-description">
              Join us for these special services and events at ACK St. Faith.
            </p>
          </div>
          
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="day">{new Date(event.date).getDate()}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span><FaClock className="meta-icon" /> {event.time}</span>
                    <span><FaMapMarkerAlt className="meta-icon" /> {event.location}</span>
                  </div>
                  <p>{event.description}</p>
                  <Link to={`/events/${event.id}`} className="event-link">
                    More Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-events">
            <Link to="/events" className="btn btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="sermons-section section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Spiritual Nourishment</span>
            <h2 className="section-title">Recent Sermons</h2>
            <div className="divider"></div>
            <p className="section-description">
              Listen to or watch our latest messages and be encouraged in your faith journey.
            </p>
          </div>
          
          <div className="sermons-grid">
            {recentSermons.map(sermon => (
              <div key={sermon.id} className="sermon-card">
                <div className="sermon-image" style={{ backgroundImage: `url(${sermon.image})` }}>
                  <div className="play-button">
                    <FaPlayCircle />
                  </div>
                </div>
                <div className="sermon-content">
                  <h3>{sermon.title}</h3>
                  <div className="sermon-meta">
                    <span><FaUser className="meta-icon" /> {sermon.preacher}</span>
                    <span><FaCalendarAlt className="meta-icon" /> {sermon.date}</span>
                    <span><FaBook className="meta-icon" /> {sermon.reference}</span>
                  </div>
                  <div className="sermon-actions">
                    <a href={sermon.audio} className="btn-audio" download>
                      <FaDownload /> Download Audio
                    </a>
                    <a href={sermon.video} className="btn-video" target="_blank" rel="noopener noreferrer">
                      <FaPlayCircle /> Watch Video
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-sermons">
            <Link to="/sermons" className="btn btn-outline">
              View All Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* Live Stream Section */}
      <section className="live-stream-section section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Join Us Online</span>
            <h2 className="section-title">Live Stream</h2>
            <div className="divider"></div>
            <p className="section-description">
              Can't make it in person? Join our live stream every Sunday at 9:00 AM.
            </p>
          </div>
          
          <div className="live-stream-container">
            <div className="stream-video">
              <div className="stream-placeholder">
                <div className="stream-offline">
                  <FaPlayCircle className="offline-icon" />
                  <h3>Live Stream Offline</h3>
                  <p>Our next live stream will begin Sunday at 9:00 AM</p>
                  <div className="countdown">
                    <div className="countdown-item">
                      <span className="countdown-number">2</span>
                      <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-item">
                      <span className="countdown-number">14</span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-item">
                      <span className="countdown-number">36</span>
                      <span className="countdown-label">Minutes</span>
                    </div>
                  </div>
                  <button className="btn-notify">Notify Me When Live</button>
                </div>
              </div>
            </div>
            <div className="stream-chat">
              <div className="chat-header">
                <h4>Live Chat</h4>
                <span className="viewers">
                  <i className="fas fa-user-friends"></i> 124 watching
                </span>
              </div>
              <div className="chat-messages">
                <div className="chat-message">
                  <div className="message-avatar">J</div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-sender">John D.</span>
                      <span className="message-time">2 min ago</span>
                    </div>
                    <p>Praise God! Great to be worshipping with everyone today.</p>
                  </div>
                </div>
                <div className="chat-message">
                  <div className="message-avatar">S</div>
                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-sender">Sarah M.</span>
                      <span className="message-time">5 min ago</span>
                    </div>
                    <p>Praying for everyone watching. God bless you all!</p>
                  </div>
                </div>
              </div>
              <div className="chat-input">
                <input type="text" placeholder="Send a message..." />
                <button className="btn-send">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="stream-schedule">
            <h3>Weekly Live Stream Schedule</h3>
            <ul className="schedule-list">
              <li>
                <span className="schedule-day">Sunday</span>
                <span className="schedule-time">9:00 AM - 11:30 AM</span>
                <span className="schedule-service">Sunday Morning Service</span>
              </li>
              <li>
                <span className="schedule-day">Wednesday</span>
                <span className="schedule-time">5:30 PM - 7:00 PM</span>
                <span className="schedule-service">Bible Study</span>
              </li>
              <li>
                <span className="schedule-day">Friday</span>
                <span className="schedule-time">7:00 PM - 8:30 PM</span>
                <span className="schedule-service">Prayer Meeting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Get In Touch</span>
            <h2 className="section-title">Contact Us</h2>
            <div className="divider"></div>
            <p className="section-description">
              Have questions about our services? We'd love to hear from you!
            </p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Our Location</h4>
                  <p>123 Church Street, Mombasa, Kenya</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhone className="info-icon" />
                <div>
                  <h4>Phone Number</h4>
                  <p>+254 712 345 678</p>
                </div>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email Address</h4>
                  <p>info@ackstfaith.org</p>
                </div>
              </div>
              <div className="info-item">
                <BsClockHistory className="info-icon" />
                <div>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
