import React from 'react';

const BoookRating = ({rating}) => {


const Stars = new Array(rating).fill(undefined);


    return (

        <div className="ratting">
            {
                Stars.map((_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                ))
            }
        </div>

    );
};

export default BoookRating;