import {useState} from 'react';
import {IGameData} from '../../helpers/helpers';
import useSubmitEventForm from './use-submit-event-form/useSubmitEventForm';
import cuid from 'cuid';
import {TEventFormValues} from '../../types';

const useCreateEvent = () => {
  const [
    {isLoading: isFormSubmitLoading, isSuccess: isEventCreated},
    {mutate: submitEventForm}
  ] = useSubmitEventForm();

  const [selectedGame, setSelectedGame] = useState<IGameData | null>();
  const onSubmitHandler = (values: TEventFormValues) => {
    const formValues = {
      ...values,
      game: {
        name: selectedGame?.name,
        description: selectedGame?.description
      },
      id: cuid()
    };

    submitEventForm(formValues);
  };

  return [
    {
      selectedGame,
      isFormSubmitLoading,
      isEventCreated
    },
    {
      setSelectedGame,
      onSubmitHandler
    }
  ] as const;
};

export default useCreateEvent;
