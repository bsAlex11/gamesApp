import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import CreateEvent from './CreateEvent';
import { act } from 'react-test-renderer';
import FakeTimers from '@sinonjs/fake-timers';
import axios from 'axios';
// import mockAxios from 'axios';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;
// const mockAxiosGet = jest.spyOn(axios, 'get');

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

  // it('should fetch games and return the correct data', async () => {
  //   const {result, waitForNextUpdate} = renderHook(() => useCreateEvent());

  //   result.current[1].fetchGamesApiCall('Root');
  //   await waitForNextUpdate();

  //   expect(result.current[0].fetchedGames?.games[0].name).toBe('Root');
  // });

  it('should fetch and display the game in a list', async () => {

  });





  it('should render the game description and buttons after selecting a game', async () => {
    const clock = FakeTimers.install();

    render(<CreateEvent />);
    // const gameInput = screen.getByPlaceholderText(
    //   'Search for a game..'
    // ) as HTMLInputElement;

    // act(() => {
    //   userEvent.type(gameInput, 'Root');
    // });

    // clock.tick(500);

    mockAxios.get.mockResolvedValueOnce({
      data:
      {
        games:
          [
            { name: 'Root: The Riverfolk Expansion', description: 'a game about...' },
          ]
      }
    })
    expect(mockAxios.get).toHaveBeenCalled();
    // const element = await screen.findByText('Root: The Riverfolk Expansion');

    // act(() => {
    //   userEvent.click(element);
    // });

    // expect(await screen.findByText('is a game about..')).toBeInTheDocument();
  });
});
