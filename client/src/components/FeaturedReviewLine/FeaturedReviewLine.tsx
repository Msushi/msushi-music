import React, { useEffect, useState } from 'react'
import FeaturedReview from '../FeaturedReview/FeaturedReview'
import { FeaturedReviewInfo } from '../../types/types';
import "./FeaturedReviewLine.css"

interface FeaturedReviewInfoArray {
    data: FeaturedReviewInfo[];
}

function featuredReviewLine({data}: FeaturedReviewInfoArray) {

    if (data.length === 0) {
        return null;
    }
    const reviews = data.map((review: any) => <FeaturedReview reviewData={review}></FeaturedReview>)

    return(
        <div className="featuredReviewLine">
            {reviews}
        </div>
    )

}

export default featuredReviewLine;