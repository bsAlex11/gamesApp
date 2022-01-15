import {renderHook} from '@testing-library/react-hooks';
import axios from 'axios';
import createMock from 'axios-mock-adapter';
import useGetGames from './useGetGames';
import {createWrapper} from '../../../../../config/react-query-test';
import {act} from '@testing-library/react';

const mockAdapter = new createMock(axios);

const mockedGames = [
  {
    name: 'Root',
    id: 1,
    description: 'A game about'
  }
];
const defaultErrorResponse = {
  success: false,
  error: {
    code: 500,
    message: 'something went wrong',
    key: 'error-key'
  }
};

describe('useGetGames', () => {
  afterEach(() => {
    mockAdapter.reset();
  });

  it('should fetch the games', async () => {
    mockAdapter.onGet(/search/).reply(200, mockedGames);

    const {result, waitFor} = renderHook(
      () => useGetGames('root', {shouldFetch: true}),
      {wrapper: createWrapper()}
    );
    await waitFor(() => result.current.isLoading === false);

    expect(result.current.data[0].name).toBe('Root');
  });

  it('should return an error', async () => {
    mockAdapter.onGet(/search/).reply(500, defaultErrorResponse);

    const {result, waitForNextUpdate} = renderHook(
      () => useGetGames('root', {shouldFetch: true}),
      {wrapper: createWrapper()}
    );
    await act(async () => {
      await waitForNextUpdate();

      expect(result.current.data.response.data.error.message).toBe(
        defaultErrorResponse.error.message
      );
    });
  });
});
