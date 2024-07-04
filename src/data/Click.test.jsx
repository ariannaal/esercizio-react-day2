import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../src/components/SingleBook'; 
import booksData from '../src/data/romance.json'; 
import BookList from '../components/BookList';

describe("BookList component", () => {
  it("changes border color when a book is clicked", async () => {
      render(<BookList books={booksData} />);

       const booksEl = await screen.findAllByTestId("card-book");

      fireEvent.click(booksEl[0]);
      expect(booksEl[0]).not.toHaveStyle('border: 1px solid red'); 
  });
});