import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/simple-slider.css';

// Direct paths to images in public directory
const slides = [
  {
    id: 1,
    preTitle: 'Welcome to',
    title: "St. Jude's Anglican Church",
    description: 'Growing in Faith, Serving with Love, Building Community',
    image: 'images/church.jpg',
    buttons: [
      { text: 'Our Story', to: '/about', variant: 'primary' },
      { text: 'Our Beliefs', to: '/what-we-believe', variant: 'outline' }
    ]
  },
  {
    id: 2,
    preTitle: 'Transforming Lives',
    title: 'Strengthening Families and Empowering Faith Communities',
    description: 'Join us in our mission to transform lives through faith',
    image: 'images/bible-scripture.jpg',
    buttons: [
      { text: 'Explore Our Ministries', to: '/ministries', variant: 'primary' },
      { text: 'Connect With Us', to: '/contact', variant: 'outline' }
    ]
  },
  {
    id: 3,
    preTitle: 'Guided by the Holy Spirit',
    title: 'Empowered to Radiate Christ\'s Light to the World',
    description: 'Experience the power of faith in our community',
    image: 'images/richard.jpg',
    buttons: [
      { text: "I'm New Here", to: '/new-here', variant: 'primary' },
      { text: 'Discover Baptism', to: '/baptism', variant: 'outline' }
    ]
  }
];

// Custom arrow components
const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <button
      type="button"
      className={`${className} custom-arrow`}
      style={{ 
        ...style, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        zIndex: 10,
        right: '20px',
        transition: 'all 0.3s ease',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
      aria-label="Next slide"
    >
      <span style={{ color: 'white', fontSize: '24px' }}>→</span>
    </button>
  );
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <button
      type="button"
      className={`${className} custom-arrow`}
      style={{ 
        ...style, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        zIndex: 10,
        left: '20px',
        transition: 'all 0.3s ease',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
      }}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <span style={{ color: 'white', fontSize: '24px' }}>←</span>
    </button>
  );
};

const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure the component is fully mounted
    const timer = setTimeout(() => {
      setIsMounted(true);
      // Force reflow to ensure proper rendering
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    fade: true,
    arrows: true,
    accessibility: true,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    edgeFriction: 0.3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          arrows: false,
          speed: 600
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          speed: 500,
          touchThreshold: 15
        }
      }
    ]
  };




  // Add screen reader only class for accessibility
  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  };

  if (!isMounted) {
    return <div style={{ height: '100vh', minHeight: '600px' }} />;
  }

  return (
    <div className="simple-slider" style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px' }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div 
              className="slide-bg"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(/${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                height: '100%',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
              }}
            >
              <div className="slide-content">
                <span className="slide-pre-title">{slide.preTitle}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <div className="slide-buttons">
                  {slide.buttons.map((button, btnIndex) => (
                    <Link 
                      key={btnIndex}
                      to={button.to}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        ...(button.variant === 'primary' ? {
                          backgroundColor: '#4a6cf7',
                          color: 'white',
                          border: '2px solid #4a6cf7'
                        } : {
                          backgroundColor: 'transparent',
                          color: 'white',
                          border: '2px solid white'
                        })
                      }}
                    >
                      {button.text} {button.variant === 'primary' && (
                        <FaArrowRight style={{ marginLeft: '8px' }} />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
