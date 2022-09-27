import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';
import axios from 'axios';

jest.mock('axios');

beforeEach(() => {
    render(<App />);
})

describe('Home UI elements', () => {
    test('should render the title', () => {
        let title = screen.getByText(/women in computer science/i);
        expect(title).toBeInTheDocument();
    });
    test('should render the button', () => {
        let buttonEl = screen.getByRole('button', { name: /show/i });
        expect(buttonEl).toBeInTheDocument();
    })
});

describe('Card element', () => {
    test('should render Ada Lovelace', async () => {
        const programmer = {
            data: {
                programmers: 
                [{
                    name: "Ada Lovelace",
                    image_name: "ada-lovelace.jpg",
                    description: "Ada Lovelace was a Victorian-era mathematician widely considered to be the first computer programmer. Lovelace’s impact on the world of technology lives on and is observed on the second Tuesday in October with Ada Lovelace Day, on which individuals and organizations alike celebrate the achievements of women in STEM.",
                    id: 1
                }],
            } 
        };
        axios.get.mockReturnValueOnce(programmer);

        let buttonEl = screen.getByRole('button', { name: /show/i });
        fireEvent.click(buttonEl);
        const adaLovelace = await screen.findByText('Ada Lovelace');
        expect(adaLovelace).toBeInTheDocument();
    });
});
