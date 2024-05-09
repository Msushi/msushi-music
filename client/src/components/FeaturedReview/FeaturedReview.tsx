import React, { useEffect, useState } from 'react'
import { FeaturedReviewInfo } from '../../types/types';
import "./FeaturedReview.css"

interface ReviewReviewProps {
    reviewData: FeaturedReviewInfo;
}

function featuredReview({ reviewData }: ReviewReviewProps ) {

    console.log(reviewData)

    const [name, setName] = useState(reviewData.name);
    const [artist, setArtist] = useState(reviewData.artist);
    const [image, setImage] = useState(reviewData.image);
    const [id, setID] = useState(reviewData._id);
    const [header, setHeader] = useState(reviewData.reviewHeader);

    console.log(name)


    return(
        <div className="featured-review-container">
            <a href={`/review/${id}`}><img src={image} alt="placeholder"/></a>
            <a href={`/review/${id}`}>{name}</a>
            <a href={`/review/${id}`}>{artist}</a>
            <a className="preview-text">{header}</a>
        </div>
    )

}

export default featuredReview;