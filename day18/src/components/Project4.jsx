import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Project4 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   axios.get('https://api.unsplash.com/photos/?client_id=REPLACE_WITH_YOUR_KEY')

      .then(res => {
        setImages(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch images');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map(img => (
          <img key={img.id} src={img.urls.thumb} alt={img.alt_description} width="150" height="150" />
        ))}
      </div>
    </div>
  );
};

export default Project4;
