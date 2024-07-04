import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SingleBook from '../src/components/SingleBook'; 
import romance from '../src/data/romance.json'; 
import BookList from '../src/components/BookList';

describe("BookList component", () => {
  it("changes border color when a book is clicked", async () => {
      render(<BookList books={romance} />);

       const Allbooks = await screen.findAllByTestId("card-book");

      fireEvent.click(Allbooks[0]);
      expect(Allbooks[0]).not.toHaveStyle('border: 1px solid red'); 
  });
});