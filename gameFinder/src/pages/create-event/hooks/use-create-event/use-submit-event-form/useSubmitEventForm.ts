import {AxiosError} from 'axios';
import {useMutation} from 'react-query';
import {TEventFormPayload} from '../../../types';
import {CREATE_EVENT_FORM} from '../../react-query-iteration/api/queries';
import {submitCreateEventForm} from '../../react-query-iteration/api/requests';

const useSubmitEventForm = () => {
  const {data, isError, isSuccess, isLoading, mutate} = useMutation<
    any,
    AxiosError,
    TEventFormPayload
  >((values) => submitCreateEventForm(values), {
    mutationKey: CREATE_EVENT_FORM
  });

  return [
    {
      data,
      isError,
      isSuccess,
      isLoading
    },
    {
      mutate
    }
  ] as const;
};

export default useSubmitEventForm;
