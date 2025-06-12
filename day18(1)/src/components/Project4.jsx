import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Project4() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=12`
        );
        setImages(prevImages => [...prevImages, ...response.data]);
      } catch (err) {
        setError('Failed to fetch images. Please try again later.');
        console.error('Error fetching images:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Image Gallery</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {loading && images.length === 0 ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Loading images...</p>
        </div>
      ) : (
        <>
          <div className="row">
            {images.map((image, index) => (
              <div key={`${image.id}-${index}`} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100">
                  <img 
                    src={`https://picsum.photos/id/${image.id}/500/300`} 
                    className="card-img-top img-fluid" 
                    alt={image.author}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{image.author}</h5>
                    <p className="card-text">Width: {image.width}px, Height: {image.height}px</p>
                    <a 
                      href={image.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-outline-primary"
                    >
                      View Original
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center my-4">
            {loading ? (
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading more images...</span>
              </div>
            ) : (
              <button 
                onClick={loadMore} 
                className="btn btn-primary"
                disabled={loading}
              >
                Load More
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Project4;