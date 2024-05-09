import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/navbar'
import ReviewLine from '../components/ReviewLine/ReviewLine'
import FeaturedReviewLine from '../components/FeaturedReviewLine/FeaturedReviewLine'
import axios from 'axios';

function Homepage() {
  const [featuredReviews, setFeaturedReviews] = useState([]);
  const [bottomReviews, setBottomReviews] = useState([])

  useEffect(() => {
    const getBottomReviews = async () => {
      const response = await axios.get("http://localhost:3000/api/review/recent", {
        params: {
          start: 3
        }
      });
      console.log(response);
      setBottomReviews(response.data);
    }
    const getFeaturedReviews = async () => {
      const response = await axios.get("http://localhost:3000/api/review/featured");
      console.log(response);
      setFeaturedReviews(response.data);
    }
    getBottomReviews();
    getFeaturedReviews();
  }, [])

  return (
    <>
      <div>
        <Navbar></Navbar>
        <a>Recent Reviews</a>
        <FeaturedReviewLine data={featuredReviews}></FeaturedReviewLine>
        <ReviewLine data={bottomReviews}></ReviewLine>
      </div>
    </>
  )
}

export default Homepage;
