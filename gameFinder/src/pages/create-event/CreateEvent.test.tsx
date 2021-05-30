import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateEvent from './CreateEvent';
import { act } from 'react-test-renderer';
import FakeTimers from '@sinonjs/fake-timers';

const axiosMock = jest.fn().mockResolvedValue({ games: [{ name: 'Root: The Riverfolk Expansion' }] });

let clock: any;
beforeEach(() => {
  clock = FakeTimers.install()
})
afterEach(() => {
  clock.uninstall()
})

describe('Game selection card', () => {
  it('should display the card title and description', () => {
    render(<CreateEvent />);

    expect(screen.getByText('Select a game')).toBeInTheDocument();
    expect(
      screen.getByText('Here you can choose a game to play')
    ).toBeInTheDocument();
  });

  it('should change the input value correctly', () => {
    render(<CreateEvent />);
    const gameInput = screen.getByPlaceholderText(
      'Search for a game..'
    ) as HTMLInputElement;

    act(() => {
      userEvent.type(gameInput, 'new game');
    });
    expect(gameInput.value).toBe('new game');
  });

  it('should fetch and display the game name', async () => {
    // const clock = FakeTimers.install();

    render(<CreateEvent />);
    const gameInput = screen.getByPlaceholderText(
      'Search for a game..'
    ) as HTMLInputElement;
    userEvent.type(gameInput, 'Root: The Riverfolk Expansion');

    clock.tick(500);
    axiosMock();

    const element = await screen.findByText('Root: The Riverfolk Expansion');

    expect(element).toBeInTheDocument();
    expect(axiosMock).toHaveBeenCalledTimes(1);
  });
});
