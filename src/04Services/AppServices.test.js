import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppServices from './AppServices';

describe('<AppServices />', () => {
  test('it should mount', () => {
    render(<AppServices />);
    
    const appServices = screen.getByTestId('AppServices');

    expect(appServices).toBeInTheDocument();
  });
});