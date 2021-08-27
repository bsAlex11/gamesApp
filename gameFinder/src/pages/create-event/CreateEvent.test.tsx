import React from 'react';
import {render, screen} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import CreateEvent from './CreateEvent';
import {act} from 'react-test-renderer';
import FakeTimers from '@sinonjs/fake-timers';
import axios from 'axios';
import useFetchGames from './hooks/use-create-event/useFetchGames/useFetchGames';
import mockAdapter from 'axios-mock-adapter';

const gamesFetchAxiosInstance = axios.create({
  baseURL: 'https://api.boardgameatlas.com'
  //  method: 'GET'
});
const mockAxios = new mockAdapter(gamesFetchAxiosInstance);

// jest.mock('axios');
// const mockedAxios = mockAxios as jest.Mocked<typeof axios>;

describe('Game selection card', () => {
  afterEach(() => {
    // mockAxios.restore();
  });

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

  it('should fetch and display the game in a list', async () => {});

  it('should render the game description and buttons after selecting a game', async () => {
    const clock = FakeTimers.install();
    // render(<CreateEvent />);
    // mockAxios.mockResolvedValueOnce({
    //   data: {
    //     games: [
    //       {
    //         name: 'Roott',
    //         description: 'a game about...'
    //       }
    //     ]
    //   }
    // });
    // expect(mockAxios.get).toHaveBeenCalled();

    // const element = await screen.findByText('Roott');
    // expect(element).toBeInTheDocument();

    // act(() => {
    //   userEvent.click(element);
    // });

    // expect(await screen.findByText('is a game about..')).toBeInTheDocument();
  });

  it('should return the correct values', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useFetchGames());
    const mockedData = {
      data: {
        games: [
          {
            name: 'Root',
            description: 'a game about...'
          }
        ]
      }
    };
    mockAxios.onOptions().replyOnce(200, mockedData);

    act(() => {
      result.current[1].fetchGamesApiCall('Root');
    });
    await waitForNextUpdate();
    // console.log(result.current[0].data, 'daataaa');
    expect(jest.spyOn(mockAxios, 'onOptions')).toHaveBeenCalled();

    expect(result.current[0].data.games[0].name).toBe('Root');
    expect(result.current[0].data.games[0].description).toBe('a game about...');

    // const element = await screen.findByText('Roott');
    // expect(element).toBeInTheDocument();
  });
});
