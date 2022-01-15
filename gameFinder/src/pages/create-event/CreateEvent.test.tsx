import {act} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import axios from 'axios';
import createMock from 'axios-mock-adapter';
import {createWrapper} from '../../config/react-query-test';
import useSubmitEventForm from './hooks/use-create-event/use-submit-event-form/useSubmitEventForm';

const mockAdapter = new createMock(axios);

const mockFormValues = {
  dateTime: ('11-11-2021' as unknown) as Date,
  location: 'adasd',
  numberOfPlayers: 3,
  eventDetails: 'fsdfs',
  privateEvent: 'yes',
  showLocation: 'yes',
  game: {
    name: 'Catan Card Game',
    description:
      'Cunning and a dash of luck decides who will be the undisputed master of Catan!'
  }
};
const defaultErrorResponse = {
  success: false,
  error: {
    code: '',
    message: 'technical message',
    key: 'error-key'
  }
};

describe('Event create and update', () => {
  afterEach(() => {
    mockAdapter.reset();
  });

  it('should submit the form', async () => {
    mockAdapter.onPost(/events/).reply(200, mockFormValues);

    const {result, waitFor} = renderHook(() => useSubmitEventForm(), {
      wrapper: createWrapper()
    });
    const [, {mutate}] = result.current;

    await act(async () => {
      await mutate(mockFormValues);
      expect(result.current[0].isLoading).toEqual(true);
    });

    await waitFor(() => result.current[0].isLoading === false);

    expect(result.current[0].data).toEqual(mockFormValues);
  });

  it('should return an error when submit fails', async () => {
    mockAdapter.onPost(/events/).reply(500, defaultErrorResponse);

    const {result, waitFor} = renderHook(() => useSubmitEventForm(), {
      wrapper: createWrapper()
    });
    const [, {mutate}] = result.current;

    await mutate(mockFormValues);
    await waitFor(() => result.current[0].isLoading === false);

    expect(result.current[0].data?.response.data.error.message).toBe(
      defaultErrorResponse.error.message
    );
  });
});
