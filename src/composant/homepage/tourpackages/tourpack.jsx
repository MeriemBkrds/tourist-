import "./tourpack.css";
import { useState } from "react";

import bike from "../../../assets/bikes.png";
import wine from "../../../assets/home.jpg";
import cinque from "../../../assets/greenland.png";
import siena from "../../../assets/main.jpg";

function PopularDestinations() {
  const tours = [
    {
      id: 1,
      title: "Lucca Bike Tour",
      price: 34,
      image: bike,
      people: "3-10 PP",
      day: "EVERY DAY",
      description: "A tour of the city and its surroundings.",
    },
    {
      id: 2,
      title: "Wine Tasting In Tuscany",
      price: 34,
      image: wine,
      people: "10-30 PP",
      day: "MONDAY",
      description: "Enjoy the best Tuscan wine and food.",
    },
    {
      id: 3,
      title: "Cinque Terre Tour",
      price: 34,
      image: cinque,
      people: "10-50 PP",
      day: "TO BE DECIDED",
      description: "Visit the beautiful Cinque Terre.",
    },
    {
      id: 4,
      title: "Siena and Surroundings",
      price: 34,
      image: siena,
      people: "5-10 PP",
      day: "TO BE DECIDED",
      description: "Visit Siena and nearby villages.",
    },
    {
      id: 5,
      title: "Lucca Bike Tour",
      price: 34,
      image: bike,
      people: "3-10 PP",
      day: "EVERY DAY",
      description: "A tour of the city and its surroundings.",
    },
    {
      id: 6,
      title: "Wine Tasting In Tuscany",
      price: 34,
      image: wine,
      people: "10-30 PP",
      day: "MONDAY",
      description: "Enjoy the best Tuscan wine and food.",
    },
  ];

  const [start, setStart] = useState(0);

  const visibleTours = tours.slice(start, start + 4);

  const nextSlide = () => {
    if (start < tours.length - 4) {
      setStart(start + 1);
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <section className="popular">

      <div className="top">
        <h2>Explore Our Popular Destinations</h2>

        <div className="buttons">
          <button onClick={prevSlide}>&lt;</button>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </div>

      <div className="tour-card-grid">
        <div className="tour-cards">

          {visibleTours.map((tour) => (
            <div className="tour-card" key={tour.id}>

              <img
                className="tour-image"
                src={tour.image}
                alt={tour.title}
              />

              <div className="tour-content">
                <h3>{tour.title}</h3>

                <h4>
                  From <span>{tour.price} €</span>
                </h4>

                <div className="tour-info">
                  <p>{tour.day}</p>
                  <p>{tour.people}</p>
                </div>

                <p>{tour.description}</p>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
}

export default PopularDestinations;