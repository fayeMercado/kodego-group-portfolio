import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileMarwin from './ProfileMarwin';

describe('<ProfileMarwin />', () => {
  test('it should mount', () => {
    render(<ProfileMarwin />);
    
    const profileMarwin = screen.getByTestId('ProfileMarwin');

    expect(profileMarwin).toBeInTheDocument();
  });
});