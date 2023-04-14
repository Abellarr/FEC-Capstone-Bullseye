import React, { useContext } from "react";
import ReviewContext from "../context/ReviewContext.js";
import './Reviews.css';
import ReviewCard from "./ReviewCard.jsx";

function ReviewContainer() {
    const { reviews } = useContext(ReviewContext);

    return (
      <div className="review-container">
        {reviews.map((review, index)=>(
            <ReviewCard rev={review} key={'review'+index} random={Math.floor((Math.random() * 19) + 1)}/>
        ))}
      </div>
    );
  }
  
  export default ReviewContainer;