import React, {FunctionComponent, useEffect} from 'react';
import {useForm, useWatch} from 'react-hook-form';
import Card from '../../components/card/Card';
import useCreateEvent from './hooks/use-create-event/useCreateEvent';
import useDraft from './hooks/use-draft/useDraft';
import EventDetailsFormSection from './sections/event-details-form/EventDetailsFormSection';
import PrivacyFormSection from './sections/event-privacy-form/EventPrivacyForm';
import GameSelection from './sections/game-selection/GameSelection';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {TEventFormValues} from './types';
import {Button} from '@material-ui/core';
import styles from './CreateEvent.scss';

const CreateEvent: FunctionComponent = () => {
  const schema = Yup.object().shape({
    dateTime: Yup.date().required('Please add an event date'),
    location: Yup.string().required('Please add a location for the event'),
    privateEvent: Yup.string().required('This field is required'),
    showLocation: Yup.string().required('This field is required')
  });

  const [
    {selectedGame, isEventCreated},
    {setSelectedGame, onSubmitHandler}
  ] = useCreateEvent();
  const {setDraftValue, clearDraft, getStorageValue} = useDraft();

  const storageValues = getStorageValue();
  const {handleSubmit, reset, control} = useForm<TEventFormValues>({
    resolver: yupResolver(schema),
    defaultValues: storageValues ?? {}
  });
  const formValues = useWatch({
    control
  });

  useEffect(() => {
    if (Object.keys(formValues).length) {
      setDraftValue(formValues);
    }
  }, [formValues, setDraftValue]);

  useEffect(() => {
    if (isEventCreated) {
      clearDraft();
      reset({});
    }
  }, [isEventCreated, clearDraft, reset]);

  const sections = [
    {
      title: 'Select a game',
      subtitle: 'Here you can choose a game to play',
      renderContent: () => (
        <GameSelection
          selectedGame={selectedGame}
          isEventCreated={isEventCreated}
          setSelectedGame={setSelectedGame}
        />
      )
    },
    {
      title: 'Event details',
      subtitle: 'Here you setup the event',
      renderContent: () => <EventDetailsFormSection control={control} />
    },
    {
      title: 'Privacy',
      subtitle: 'Here you can add privacy options to your event',
      renderContent: () => <PrivacyFormSection control={control} />
    }
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {sections.map(({title, subtitle, renderContent}) => (
          <Card
            key={title}
            title={title}
            subtitle={subtitle}
            renderContent={renderContent}
          />
        ))}
        <div className={styles.submit}>
          <Button type='submit' variant='contained' color='primary'>
            Create event
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateEvent;
