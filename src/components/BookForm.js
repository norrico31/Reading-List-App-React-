import React, { useContext, useState } from 'react';

import { BookContext } from '../contexts/BookContext';

const BookForm = () => {

    const { dispatch } = useContext(BookContext);

    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        dispatch({ type: 'ADD_BOOK', book: { title: title, author: author }});
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder="book title" required value={ title } onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="book author" required value={ author } onChange={(e) => setAuthor(e.target.value)} />
            <button type="submit">Add book</button>
        </form>
    );
}



export default BookForm;