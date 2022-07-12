import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppTeamProfile from './AppTeamProfile';

describe('<AppTeamProfile />', () => {
  test('it should mount', () => {
    render(<AppTeamProfile />);
    
    const appTeamProfile = screen.getByTestId('AppTeamProfile');

    expect(appTeamProfile).toBeInTheDocument();
  });
});