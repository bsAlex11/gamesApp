import React, { FunctionComponent, useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import Test from '../../components/test';
import useCreateEvent from './hooks/use-create-event/useCreateEvent';
import GameSelection from './sections/game-selection/GameSelection';

const CreateEvent: FunctionComponent = () => {
  const [formState, setFormState] = useState({
    gameName: 'root',
    eventName: 'aiaiiiiai'
  });

  const [
    {
      fetchedGames,
      isLoadingGames,
      selectedGame,
      errorFetchedGames
    },
    {
      setSelectedGame,
      fetchGamesApiCall
    }
  ] = useCreateEvent();

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
    }
  ];

  return (
    // <Card
    //   title={'Select a game'}
    //   renderContent={() => <p></p>}
    // />
    <>
      {sections.map((section) => (
        <Card
          key={section.title}
          title={section.title}
          subtitle={section.subtitle}
          renderContent={section.renderContent}
        />
      ))}
    </>
  );
};

export default CreateEvent;
