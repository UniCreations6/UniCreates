import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className = '', onClick, containerClassName = '' }) => {
  const [error, setError] = useState(false);
  
  // Construct the full URL for images
  const imageUrl = src.startsWith('http') ? src : `${window.location.origin}${src}`;
  
  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 ${containerClassName}`}
        onClick={onClick}
      >
        <div className="text-center p-4">
          <span className="block text-2xl mb-2">📸</span>
          <span className="text-sm text-gray-600">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      onClick={onClick}
      onError={() => {
        console.error(`Failed to load image: ${src}`);
        setError(true);
      }}
      loading="lazy"
    />
  );
};

export default ImageWithFallback;