import { render, screen } from '@testing-library/react';
import Welcome from '../src/components/Welcome'; 

test('renders Welcome component correctly', () => {
    render(<Welcome />);
    
    const h2 = screen.getByText(/Where stories illuminate the night/i);
    expect(h2).toBeInTheDocument();
});