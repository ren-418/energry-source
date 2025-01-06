import React, { useState, useEffect } from "react";
import "./Home.css";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const slides = [
    {
      id: 1,
      image: "https://images.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/189c8fde-ed9a-466c-995d-ba905809b5d4/Artboard+2.png", // Replace with your first image URL
      title: "Efficiency Solutions",
    },
    {
      id: 2,
      image: "https://images.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/adce536b-b070-4dc1-abc2-b187fdc3a3a3/Artboard+2+copy+2.png", // Replace with your second image URL
      title: "EV Charging Solutions",
    },
    {
      id: 3,
      image: "https://images.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/dc980928-df36-454f-8b23-6c465d715e62/Artboard+2+copy.png", // Replace with your third image URL
      title: "Heat Pump Technology",
    },
  ];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        handleNext();
    }, 5000);

    return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-md-6">
          <h1 className="fw-bold">
            We’re your comprehensive energy solutions provider.
          </h1>
          <p className="mt-4">
            And since we do it all, our customers enjoy that simplicity every
            step of the way. Our team can handle your entire project – from
            strategy and design to approvals and installation. We take pride in
            guiding businesses on their energy journeys, helping them benefit
            from cost savings, and become champions of sustainability.
          </p>
          <p className="mt-4 text-muted">
            One team. One goal. Great impacts. There’s nothing complicated about
            it.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/d837b0c8-a58d-4b3c-84a4-316d4d061d2e/AdobeStock_552022601.jpg"
            alt="Energy solutions team working"
            className="img-fluid rounded"
          />
        </div>
      </div>
      
        <div className="slider-container" style={styles.sliderContainer}>
            <div className="slider" style={styles.slider}>
                {/* Current Slide */}
                <div
                key={slides[currentIndex].id}
                className="slide"
                style={styles.slide}
                >
                <img
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].title}
                    style={styles.image}
                />
                {/* <div className="slide-content" style={styles.slideContent}>
                    <h3>{slides[currentIndex].title}</h3>
                    <p>{slides[currentIndex].description}</p>
                    <button style={styles.button}>Explore the Benefits</button>
                </div> */}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button style={styles.navButtonPrev} onClick={handlePrev}>
                &#8592;
            </button>
            <button style={styles.navButtonNext} onClick={handleNext}>
                &#8594;
            </button>
        </div>

        <div className="container my-5">
            <div className="row align-items-center">
                {/* Video Section */}
                <div className="col-md-6">
                <div className="video-wrapper">
                    <video
                    width="100%"
                    height="auto"
                    controls
                    poster="https://video.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/9b6aeea9-802c-4132-a74f-1a96397ee304/thumbnail" // Replace with a poster image URL if needed
                    src="https://energysource.com/621d7d57-bf5b-44f1-a9e3-a4268c55ca7b"
                    >
                    {/* <source
                         // Replace with your video URL
                        type="video/mp4"
                    /> */}
                    Your browser does not support the video tag.
                    </video>
                </div>
                </div>

                {/* Text Section */}
                <div className="col-md-6">
                <h2 className="fw-bold">
                    Charge into an electric future with our EV charging solutions.
                </h2>
                <p className="mt-4">
                    Embrace the shift to a cleaner, electric-powered journey with our
                    advanced EV charging stations. Our reliable and conveniently
                    designed charging stations are a testament to forward-thinking
                    innovation, making green travel accessible for all. Explore a range
                    of solutions tailored to support your electric mobility needs and
                    join us in this revolutionary step towards reducing carbon
                    emissions.
                </p>
                <button className="btn btn-outline-secondary mt-4">Learn More</button>
                </div>
            </div>
        </div>

        <div className="stats-section">
            {/* Title Section */}
            <div className="text-center my-5">
                <h2 className="fw-bold">Simplifying the clean energy transition.</h2>
                <p className="text-muted">
                We have the people, passion and scale to lead the way to a greener
                future.
                </p>
            </div>

            {/* Statistics Section */}
            <div className="stats-container" style={styles.statsContainer}>
                {/* Stat 1 */}
                <div className="stat-item text-center" style={styles.statItem}>
                <i
                    className="bi bi-clipboard-check"
                    style={{ fontSize: "3rem", color: "white" }}
                ></i>
                <h3 style={styles.statNumber}>8,975+</h3>
                <p style={styles.statText}>energy projects managed</p>
                </div>

                {/* Stat 2 */}
                <div className="stat-item text-center" style={styles.statItem}>
                <i
                    className="bi bi-people-fill"
                    style={{ fontSize: "3rem", color: "white" }}
                ></i>
                <h3 style={styles.statNumber}>3,321</h3>
                <p style={styles.statText}>
                    clients across New England and North America
                </p>
                </div>

                {/* Stat 3 */}
                <div className="stat-item text-center" style={styles.statItem}>
                <i
                    className="bi bi-cloud-fill"
                    style={{ fontSize: "3rem", color: "white" }}
                ></i>
                <h3 style={styles.statNumber}>240,626</h3>
                <p style={styles.statText}>metric tons of CO₂ avoided</p>
                </div>
            </div>
        </div>
    </div>
  );
};

const styles = {
    sliderContainer: {
      position: "relative",
      width: "100%",
    //   maxWidth: "1200px",
      marginTop: "100px",
      overflow: "hidden",
    },
    slider: {
      display: "flex",
      transition: "transform 0.5s ease-in-out",
    },
    slide: {
      position: "relative",
      flexShrink: 0,
      width: "100%",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "auto",
    },
    slideContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      background: "rgba(0, 0, 0, 0.5)",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "600px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    navButtonPrev: {
        position: "absolute",
        top: "50%",
        left: "10px", // Position it near the left edge
        transform: "translateY(-50%)",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: 10,
        marginLeft: "20px", // Add a margin-left specifically for the previous button
    },
    navButtonNext: {
        position: "absolute",
        top: "50%",
        right: "20px", // Position it near the right edge
        transform: "translateY(-50%)",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: 10,
    },
    statsContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#009fe3", // Blue background
        padding: "20px 0",
        color: "white",
      },
      statItem: {
        width: "30%",
      },
      statNumber: {
        fontSize: "2.5rem",
        margin: "10px 0",
        fontWeight: "bold",
      },
      statText: {
        fontSize: "1rem",
        margin: "0",
      },
  };

export default Home;
