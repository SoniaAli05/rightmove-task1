import React from 'react';
import {render, screen} from '@testing-library/react';
import PropertyListing from '../PropertyListing';
import '@testing-library/jest-dom';


describe('PropertyListing', () => {

    it('should render without crashing', () => {
        render(<PropertyListing />);
    });

    it('should render all property cards', () => {
        render(<PropertyListing />);
    });

    it('initial Loading', () => {
        render(<PropertyListing />);
        expect(screen.getByText(/Loading.../i)).toBeVisible();
      });
});
