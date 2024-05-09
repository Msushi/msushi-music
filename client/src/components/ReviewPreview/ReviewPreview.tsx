import React, { useEffect, useState } from 'react'
import { ReviewPreviewInfo } from '../../types/types';
import "./ReviewPreview.css"

interface ReviewReviewProps {
    reviewData: ReviewPreviewInfo;
}

function reviewPreview({ reviewData }: ReviewReviewProps ) {

    console.log(reviewData)

    const [name, setName] = useState(reviewData.name);
    const [artist, setArtist] = useState(reviewData.artist);
    const [image, setImage] = useState(reviewData.image);
    const [id, setID] = useState(reviewData._id);

    console.log(name)


    return(
        <div className="review-container">
            <a href={`/review/${id}`}><img src={image} alt="placeholder"/></a>
            <a href={`/review/${id}`}>{name}</a>
            <a href={`/review/${id}`}>{artist}</a>
        </div>
    )

}

export default reviewPreview;