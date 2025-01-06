import React, { useState, useEffect } from "react";
import "./Home.css";

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
          <div className="solutionTitle">
            <h1 className="bold">
              We’re your comprehensive energy solutions provider.
            </h1>
            <p className="bold">
              And since we do it all, our customers enjoy that simplicity every
              step of the way. Our team can handle your entire project – from
              strategy and design to approvals and installation. We take pride
              in guiding businesses on their energy journeys, helping them
              benefit from cost savings, and become champions of sustainability.
            </p>
            <p className="bold text-muted">
              One team. One goal. Great impacts. There’s nothing complicated
              about it.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/d837b0c8-a58d-4b3c-84a4-316d4d061d2e/AdobeStock_552022601.jpg"
            alt="Energy solutions team working"
            className="img-fluid solutionImg"
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        <div className="slider">
          <div key={slides[currentIndex].id} className="slide">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="nav-button-prev" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="nav-button-next" onClick={handleNext}>
          &#8594;
        </button>
      </div>

      {/* Video Section */}
      <div className="container videoSection">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="video-wrapper">
              <video
                width="100%"
                height="auto"
                controls
                poster="https://video.squarespace-cdn.com/content/v1/6266f396b9ef2f2b43ba9fe5/9b6aeea9-802c-4132-a74f-1a96397ee304/thumbnail"
                src="https://energysource.com/621d7d57-bf5b-44f1-a9e3-a4268c55ca7b"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="col-md-5 videoTitle">
            <h2 className="bold">
              Charge into an electric future with our EV charging solutions.
            </h2>
            <p className="mt-4" style={{ fontWeight: "400" }}>
              Embrace the shift to a cleaner, electric-powered journey with our
              advanced EV charging stations. Our reliable and conveniently
              designed charging stations are a testament to forward-thinking
              innovation, making green travel accessible for all. Explore a
              range of solutions tailored to support your electric mobility
              needs and join us in this revolutionary step towards reducing
              carbon emissions.
            </p>
            <button className="btn btn-outline-secondary mt-4">LEARN MORE</button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section statsSection">
        <div className="text-center my-5">
          <h1 className="bold" style={{ fontSize: "45px" }}>
            Simplifying the clean energy transition.
          </h1>
          <p className="text-muted">
            We have the people, passion and scale to lead the way to a greener
            future.
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-item text-center">
            <img
              src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/5d197ea5-de40-44bf-b8b9-7029a72838b3/icons-02.png"
              alt="Icon"
            />
            <h3 className="stat-number">8,975+</h3>
            <p className="stat-text">energy projects managed</p>
          </div>

          <div className="stat-item text-center">
            <img
              src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/ec02f906-fb75-40ef-9178-3e9e9dcecc9e/icons-03.png"
              alt="Icon"
            />
            <h3 className="stat-number">3,321</h3>
            <p className="stat-text">
              clients across New England and North America
            </p>
          </div>

          <div className="stat-item text-center">
            <img
              src="https://files.elfsightcdn.com/eafe4a4d-3436-495d-b748-5bdce62d911d/a408bb14-9c0a-49cf-94b5-8c413c166f42/icons-04.png"
              alt="Icon"
            />
            <h3 className="stat-number">240,626</h3>
            <p className="stat-text">metric tons of CO₂ avoided</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
