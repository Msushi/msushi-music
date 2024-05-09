import React, { useEffect, useState } from 'react'
import ReviewPreview from '../ReviewPreview/ReviewPreview'
import { ReviewPreviewInfo } from '../../types/types';
import "./ReviewLine.css"

interface ReviewPreviewInfoArray {
    data: ReviewPreviewInfo[];
}

function reviewLine({data}: ReviewPreviewInfoArray) {

    if (data.length === 0) {
        return null;
    }
    const reviews = data.map((review: any) => <ReviewPreview reviewData={review}></ReviewPreview>)

    return(
        <div className="reviewLine">
            {reviews}
        </div>
    )

}

export default reviewLine;