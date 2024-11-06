import React, { useState } from 'react';

interface StarRatingProps {
    ratingValue: number;  // Current rating value (e.g., 3.5 for half-stars)
    onRatingChange: (newRating: number) => void;  // Function to handle rating changes
}

const StarRating: React.FC<StarRatingProps> = ({ ratingValue, onRatingChange }) => {
    const [hoverValue, setHoverValue] = useState(0); // State to track hover effect

    const handleMouseEnter = (value: number) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(0);
    };

    const renderStar = (value: number) => {
        const displayValue = hoverValue || ratingValue;
        const isFullStar = displayValue >= value;
        const isHalfStar = !isFullStar && displayValue >= value - 0.5;

        return (
            <span
                key={value}
                onClick={() => onRatingChange(value)} // Set rating on click
                onMouseEnter={() => handleMouseEnter(value)} // Highlight stars on hover
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: 'pointer',
                    fontSize: '24px',
                    position: 'relative',
                    display: 'inline-block',
                    width: '24px', // Fixed width to align stars
                }}
            >
                {/* Background for empty star */}
                <span
                    style={{
                        top:'-20px',
                        color: '#ccc',
                        position: 'absolute',
                        width: '100%',
                        overflow: 'hidden',
                    }}
                >
                    ★
                </span>
                {/* Foreground for filled/half star */}
                <span
                    style={{
                        top:'-20px',
                        color: '#FFD700',
                        position: 'absolute',
                        width: isHalfStar ? '50%' : isFullStar ? '100%' : '0%',
                        overflow: 'hidden',
                    }}
                >
                    ★
                </span>
            </span>
        );
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((value) => renderStar(value))}
        </div>
    );
};

export default StarRating;
