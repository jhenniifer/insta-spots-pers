import { useState, useEffect } from "react";
import { cardDetails } from "./data";

function Cards() {
  const [cards, setCards] = useState(() => {
    const stored = localStorage.getItem("cardDetails");
    return stored ? JSON.parse(stored) : cardDetails;
  });
  useEffect(() => {
    localStorage.setItem("cardDetails", JSON.stringify(cards));
  }, [cards]);

  const handleLike = (name) => {
    setCards((prev) =>
      prev.map((card) =>
        card.name === name ? { ...card, liked: !card.liked } : card
      )
    );
  };

  return (
    <section className="cards" aria-label="Cards Section">
      {cards.map((card) => (
        <div className="card" key={card.name}>
          <img src={card.imgSrc} alt={card.name} />
          <div className="card__content">
            <h4>{card.name}</h4>
            <img
              className="like-icon"
              src={`/assets/${card.liked ? "PhHeartFill" : "PhHeartLight"}.svg`}
              alt="like-icon"
              onClick={() => handleLike(card.name)}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;
