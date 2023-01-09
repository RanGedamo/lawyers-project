import React from 'react'
import "../RateReview/RateReview.css"

function RateReview({setStars,start}) {
    window.addEventListener('load', () => {
        const stars = document.querySelectorAll('.star');
        
        stars.forEach(star => {
            star.addEventListener('mousemove', e => {
                const starIndex = Array.from(stars).indexOf(star);
            
                for (let i = 0; i <= starIndex; i++) {
                    Array.from(stars)[i].classList.add('marked');
                    
                    for (let i = Array.from(stars).length - 1; i > starIndex; i--) {
                        Array.from(stars)[i].classList.remove('marked');
                    }
                 }   
                
                 setStars(starIndex + 1);
            });
        });
    });
  return (
    <div class="rating-field">
    <div class="rate-stars">
        <div class="star fas fa-star"></div>
        <div class="star fas fa-star"></div>
        <div class="star fas fa-star"></div>
        <div class="star fas fa-star"></div>
        <div class="star fas fa-star"></div>
        <h2 class="rating-count">{start}</h2>
    </div>
</div>
  )
}

export default RateReview