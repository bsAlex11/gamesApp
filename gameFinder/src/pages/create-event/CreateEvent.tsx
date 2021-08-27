import React, {FunctionComponent, useState} from 'react';
import {useForm} from 'react-hook-form';
import Card from '../../components/card/Card';
import useCreateEvent from './hooks/use-create-event/useCreateEvent';
import EventDetailsForm from './sections/event-details-form/EventDetailsForm';
import GameSelection from './sections/game-selection/GameSelection';

const CreateEvent: FunctionComponent = () => {
  const [formState, setFormState] = useState({
    gameName: 'root',
    eventName: 'aiaiiiiai'
  });

  const [
    {fetchedGames, isLoadingGames, selectedGame, errorFetchedGames},
    {setSelectedGame, fetchGamesApiCall}
  ] = useCreateEvent();
  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      location: ''
    }
  });

  const sections = [
    {
      title: 'Select a game',
      subtitle: 'Here you can choose a game to play',
      renderContent: () => (
        <GameSelection
          fetchedGames={fetchedGames}
          fetchGamesApiCall={fetchGamesApiCall}
          isLoadingGames={isLoadingGames}
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      )
    },
    {
      title: 'Event details',
      subtitle: 'Here you setup the event',
      renderContent: () => <EventDetailsForm control={control} />
    }
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {sections.map((section) => (
          <Card
            key={section.title}
            title={section.title}
            subtitle={section.subtitle}
            renderContent={section.renderContent}
          />
        ))}
        <button type='submit'>send</button>
      </form>
    </>
  );
};

export default CreateEvent;
