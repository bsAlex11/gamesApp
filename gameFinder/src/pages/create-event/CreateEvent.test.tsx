import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CreateEvent from './CreateEvent';
import  wrapper  from '../../config/react-query-test';

// const useGetGames = jest.fn();

describe('Game selection card', () => {
  it('should display the card title and description', () => {
    render(<CreateEvent />, { wrapper });

    expect(screen.getByText('Select a game')).toBeInTheDocument();
    expect(screen.getByText('Here you can choose a game to play')).toBeInTheDocument();
  });

  it('should change the input value correctly', () => {
    render(<CreateEvent />, { wrapper });
    const gameInput = screen.getByPlaceholderText('Search for a game..') as HTMLInputElement;

    userEvent.type(gameInput, 'new game');
    expect(gameInput.value).toBe('new game');
  });

  it('should fetch and display the game name', async () => {
    render(<CreateEvent />, { wrapper });
    const gameInput = screen.getByPlaceholderText('Search for a game..') as HTMLInputElement;
    // useGetGames.mockImplementation(() => Promise.resolve({
    //   json: Promise.resolve({ name: 'root' })
    // }))
    const useGetGames = jest.fn().mockResolvedValue({ name: 'root' });
    userEvent.type(gameInput, 'root');

    // await jest.fn(() =>
    //   Promise.resolve({
    //     json: Promise.resolve({ name: 'root' })
    //   })
    // );
console.log(useGetGames);

    await useGetGames();
    expect(screen.getByText('root')).toBeInTheDocument();
  });
});
