import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import CreateEvent from './CreateEvent';
import  wrapper  from '../../config/react-query-test';
import nock from 'nock';
import { renderHook } from '@testing-library/react-hooks';
import useGetGames from './hooks/use-get-games/useGetGames';
import { act } from 'react-test-renderer';
import FakeTimers from '@sinonjs/fake-timers'


const axiosMock = jest.fn().mockResolvedValue({ games: [{ name: 'root' }] });

// let clock: any;
// beforeEach(() => {
//   clock = FakeTimers.install()
// })
// afterEach(() => {
//   clock.uninstall()
// })

describe('Game selection card', () => {
  it('should display the card title and description', () => {
    render(<CreateEvent />, { wrapper });

    expect(screen.getByText('Select a game')).toBeInTheDocument();
    expect(screen.getByText('Here you can choose a game to play')).toBeInTheDocument();
  });

  it('should change the input value correctly', () => {
    render(<CreateEvent />, { wrapper });
    const gameInput = screen.getByPlaceholderText('Search for a game..') as HTMLInputElement;

    act(() => {
      userEvent.type(gameInput, 'new game');
    });
    expect(gameInput.value).toBe('new game');
  });

  it('should fetch and display the game name', async () => {
    render(<CreateEvent />, { wrapper });
    const clock = FakeTimers.install();
    const gameInput = screen.getByPlaceholderText('Search for a game..') as HTMLInputElement;
    userEvent.type(gameInput, 'root');

    nock('games')
    .get('/api/search')
    .reply(200, { games: [{ name: 'root' }] });
 
    clock.tick(500);
    const { result, waitFor } = renderHook(() => useGetGames('root'), { wrapper });
    
    await waitFor(() => {
      console.log(result.current[0].data);
      
      return result.current[0].data;
    });
    
    expect(result.current).toEqual({answer: 42});

 });



  // it('should fetch and display the game name', async () => {
  //   const clock = FakeTimers.install();

  //   render(<CreateEvent />);
  //   const gameInput = screen.getByPlaceholderText('Search for a game..') as HTMLInputElement;
  //   userEvent.type(gameInput, 'root');

  //   clock.tick(500);
  //   axiosMock();

  //   const element = await screen.findByText('Root: The Riverfolk Expansion');

  //   expect(element).toBeInTheDocument();
  //   expect(axiosMock).toHaveBeenCalledTimes(1);
  // });
});
