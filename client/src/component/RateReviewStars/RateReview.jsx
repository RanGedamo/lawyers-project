import React from "react";
import "./RateReview.css";

function RateReview({ setStars, start }) {
  window.addEventListener("load", () => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
      star.addEventListener("mousemove", (e) => {
        const starIndex = Array.from(stars).indexOf(star);

        for (let i = 0; i <= starIndex; i++) {
          Array.from(stars)[i].classList.add("marked");

          for (let i = Array.from(stars).length - 1; i > starIndex; i--) {
            Array.from(stars)[i].classList.remove("marked");
          }
        }

        setStars(starIndex + 1);
      });
    });
  });
  return (
    <div className="rating-field my-2 ">
      <div className="rate-stars ">
        <div className="star fas fa-star"></div>
        <div className="star fas fa-star"></div>
        <div className="star fas fa-star"></div>
        <div className="star fas fa-star"></div>
        <div className="star fas fa-star"></div>
        <h2 className="rating-count">{start}</h2>
      </div>
    </div>
  );
}

export default RateReview;
