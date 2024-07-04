import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CommentArea from '../src/components/CommentArea'; 

describe("CommentArea component", () => {
    it("renders correctly with comments", () => {
        render(<CommentArea />);
        const noReviewsMessage = screen.getByText(/no reviews/i);
    expect(noReviewsMessage).toBeInTheDocument();
    })
})