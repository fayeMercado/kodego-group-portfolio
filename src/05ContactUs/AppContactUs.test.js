import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppContactUs from './AppContactUs';

describe('<AppContactUs />', () => {
  test('it should mount', () => {
    render(<AppContactUs />);
    
    const appContactUs = screen.getByTestId('AppContactUs');

    expect(appContactUs).toBeInTheDocument();
  });
});