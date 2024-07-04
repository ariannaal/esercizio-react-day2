import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from '../src/components/BookList'; 
import booksData from '../src/data/romance.json'; 

describe("BookList component", () => {
    it("filters books correctly based on search input", () => {
        render(<BookList books={booksData} />);
     
        const searchInput = screen.getByPlaceholderText(/cerca un libro/i);
        fireEvent.change(searchInput, { target: { value: '2' } });

    });
    })

    
    