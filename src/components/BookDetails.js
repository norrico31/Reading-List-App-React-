import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

// book destructure is from BookList.js
const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext);

    return (
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
    );
}

export default BookDetails;