import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FullReviewInfo } from '../types/types';
import axios from 'axios';

function reviewPage() {

    const { id } = useParams();

    if (id == null) {
        console.log(null)
        return null;
    }

    const [reviewInfo, setReviewInfo] = React.useState()

    useEffect(() => {
        console.log(id);
        const getReviewData = async () => {
            const response = await axios.get(`http://localhost:3000/api/review/${id}`)
            setReviewInfo(response.data);
        }
        getReviewData()
        console.log(reviewInfo);
    }, [])

    return (
        <div>
            <a>{JSON.stringify(reviewInfo)}</a>
        </div>
    )
}

export default reviewPage