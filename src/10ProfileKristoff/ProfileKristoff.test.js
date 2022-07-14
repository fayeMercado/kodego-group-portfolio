import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfileFaye from './ProfileFaye';

describe('<ProfileFaye />', () => {
  test('it should mount', () => {
    render(<ProfileFaye />);
    
    const profileFaye = screen.getByTestId('ProfileFaye');

    expect(profileFaye).toBeInTheDocument();
  });
});