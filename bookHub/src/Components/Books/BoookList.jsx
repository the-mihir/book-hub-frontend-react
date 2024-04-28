import React, {useEffect, useState} from 'react';
import BookCard from "./BookCard.jsx";

const BoookList = () => {

    const [Book, setBook] = useState(  [] );


    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setBook(data));

    }, []);



    return (
        <div className="movie-list">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    Book.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                }

            </div>
        </div>
    );
};

export default BoookList;