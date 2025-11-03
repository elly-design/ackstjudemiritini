import React from 'react';
import { FaImages, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  // Sample gallery data
  const photoAlbums = [
    {
      id: 1,
      title: 'Sunday Services',
      coverImage: '/images/gallery/sunday-service-1.jpg',
      date: '2023-10-15',
      count: 24
    },
    {
      id: 2,
      title: 'Baptism Sunday',
      coverImage: '/images/gallery/baptism.jpg',
      date: '2023-09-30',
      count: 18
    },
    {
      id: 3,
      title: 'Church Picnic',
      coverImage: '/images/gallery/picnic.jpg',
      date: '2023-08-15',
      count: 32
    },
    {
      id: 4,
      title: 'Christmas Service',
      coverImage: '/images/gallery/christmas.jpg',
      date: '2022-12-24',
      count: 28
    },
    {
      id: 5,
      title: 'Easter Celebration',
      coverImage: '/images/gallery/easter.jpg',
      date: '2023-04-09',
      count: 21
    },
    {
      id: 6,
      title: 'Youth Camp',
      coverImage: '/images/gallery/youth-camp.jpg',
      date: '2023-07-22',
      count: 45
    }
  ];

  const videoSermons = [
    {
      id: 1,
      title: 'The Power of Faith',
      thumbnail: '/images/sermons/faith.jpg',
      date: '2023-10-22',
      duration: '45:22',
      preacher: 'Rev. John Mwangi'
    },
    {
      id: 2,
      title: 'Walking in Love',
      thumbnail: '/images/sermons/love.jpg',
      date: '2023-10-15',
      duration: '38:15',
      preacher: 'Elder Grace Wanjiku'
    },
    {
      id: 3,
      title: 'Finding Peace in Christ',
      thumbnail: '/images/sermons/peace.jpg',
      date: '2023-10-08',
      duration: '42:30',
      preacher: 'Rev. John Mwangi'
    }
  ];

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Capturing moments of faith, fellowship, and community</p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <FaImages className="section-icon" />
              <h2>Photo Gallery</h2>
            </div>
            <p>Browse through our collection of photos from various church events and services</p>
          </div>

          <div className="albums-grid">
            {photoAlbums.map(album => (
              <div key={album.id} className="album-card">
                <div className="album-cover">
                  <img src={album.coverImage} alt={album.title} />
                  <div className="album-overlay">
                    <span className="photo-count">{album.count} photos</span>
                  </div>
                </div>
                <div className="album-info">
                  <h3>{album.title}</h3>
                  <div className="album-meta">
                    <span><FaCalendarAlt /> {formatDate(album.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="video-gallery">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <FaVideo className="section-icon" />
              <h2>Sermon Videos</h2>
            </div>
            <p>Watch and be inspired by our collection of sermon recordings</p>
          </div>

          <div className="videos-grid">
            {videoSermons.map(video => (
              <div key={video.id} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">▶</div>
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <div className="video-meta">
                    <span className="preacher">{video.preacher}</span>
                    <span className="date">{formatDate(video.date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Stay Connected With Us</h2>
            <p>Subscribe to our YouTube channel to never miss a sermon or event</p>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
