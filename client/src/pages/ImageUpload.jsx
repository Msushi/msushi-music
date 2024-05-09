import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState();
  const [artist, setArtist] = useState();
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState()
  const [year, setYear] = useState();
  const [reviewer, setReviewer] = useState();
  const [header, setHeader] = useState();
  const [content, setContent] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const imageFormData = new FormData();
    imageFormData.append('image', selectedFile);

    let url;
    try {
      const response = await axios.post('http://localhost:3000/api/image/upload', imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully:', response.data.imageUrl);
      url = response.data.imageUrl;
      // Handle displaying the image on the frontend if needed
    } catch (error) {
      console.error('Error uploading image:', error);
    }


    const formData = new FormData();
    formData.append('image', url);
    formData.append('name', name);
    formData.append('artist', artist);
    formData.append('genre', genre);
    formData.append('rating', rating);
    formData.append('releaseYear', year); // Assuming the backend expects 'releaseYear' instead of 'year'
    formData.append('reviewer', reviewer);
    formData.append('reviewHeader', header);
    formData.append('reviewContent', content);

    try {
      const reviewResponse = await axios.post('http://localhost:3000/api/review', formData, {
        headers: {
          'authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1zdXNoaSIsInVzZXJJZCI6IjY2Mzg1MmVjZDhlMjM2MDAzOTZjYjgwYyIsImlhdCI6MTcxNTIxNjkxNCwiZXhwIjoxNzE1MjIwNTE0fQ.fb1VVNQC4lAmhMHE8mNlWJCZCku0ZnsmHRKgvBui_-c",
          'Content-Type': 'application/json'
        }
      });
      console.log('Review saved successfully:', reviewResponse.data);

      // Handle any further actions after successfully saving the review, if needed
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
      <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Reviewer" value={reviewer} onChange={(e) => setReviewer(e.target.value)} />
      <input type="text" placeholder="Header" value={header} onChange={(e) => setHeader(e.target.value)} />
      <input type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUpload;