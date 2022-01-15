/* eslint-disable @typescript-eslint/no-empty-function */
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {act} from '@testing-library/react';
import GameSelection from './GameSelection';
import {createWrapper} from '../../../../config/react-query-test';

const props = {
  setSelectedGame: () => {},
  selectedGame: {
    name: 'Root',
    description: 'a game about..'
  },
  isEventCreated: false
};

describe('<GameSelection/>', () => {
  it('should display the card title and description', () => {
    render(<GameSelection {...props} />, {
      wrapper: createWrapper()
    });

    expect(
      screen.getByPlaceholderText('Search for a game..')
    ).toBeInTheDocument();
  });

  // it('should change the input value correctly', () => {
  //   render(<GameSelection {...props} />, {
  //     wrapper: createWrapper()
  //   });
  //   const gameInput = screen.getByPlaceholderText(
  //     'Search for a game..'
  //   ) as HTMLInputElement;

  //   act(() => {
  //     userEvent.type(gameInput, 'new game');
  //   });
  //   expect(gameInput.value).toBe('new game');
  // });

  it('should display the selected game', () => {
    render(<GameSelection {...props} />, {
      wrapper: createWrapper()
    });
    const gameInput = screen.getByPlaceholderText(
      'Search for a game..'
    ) as HTMLInputElement;

    act(() => {
      userEvent.type(gameInput, 'Root');
    });
    expect(screen.getByText('Root')).toBeInTheDocument();
  });
});
