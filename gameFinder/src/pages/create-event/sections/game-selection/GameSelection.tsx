import React, { FunctionComponent, useEffect, useState } from 'react';

import AsyncInputField from '../../../../components/form-fields/async-input-field/AsyncInputField';
import useGameSelection from '../../hooks/use-game-selection/useGameSelection';
import SelectedGameDetails from '../../components/selected-game-details/SelectedGameDetails';
import { IGameData } from '../../helpers/helpers';

import styles from './styles.scss';

const GameSelection: FunctionComponent = () => {

  const [inputValue, setInputValue] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const [selectedGame, setSelectedGame] = useState<IGameData | null>();

  const [
    { fetchedGames, isFetchLoading, },
    { fetchGames }
  ] = useGameSelection(inputValue);

  useEffect(() => {
    if (inputValue.length < 3) {
      return;
    }

    if (shouldFetch) {
      fetchGames();
    }
  }, [inputValue, fetchGames, shouldFetch]);

  useEffect(() => {
    if (!shouldFetch && inputValue) {
      setSelectedGame(() => fetchedGames?.find((game: IGameData) => game.name === inputValue));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, shouldFetch]);

  useEffect(() => {
    if (!selectedGame) {
      setShouldFetch(true);
      setInputValue('');
    }
  }, [selectedGame]);

  return (
    <>
      <AsyncInputField
        type="text"
        minLength={3}
        debounceTimeout={500}
        placeholder="Search for a game.."
        onChange={(e) => {
          setInputValue(e.target.value);
          setShouldFetch(true);
        }}
        name='select'
        isLoading={isFetchLoading}
        value={inputValue}
        displayData={() => (
          fetchedGames?.map((game: IGameData) => (
            <li 
              key={game.name}
              className={styles.item}
              onClick={() => {
                setInputValue(game.name);
                setShouldFetch(false);
              }}
            >
              {game.name}
            </li>
          ))
        )}
      />
      {
         selectedGame && (
          <SelectedGameDetails
            name={selectedGame?.name}
            description={selectedGame?.description}
            onCancel={() => {
              setSelectedGame(null);
            }}
          />
      )}
    </>
  );
}

export default GameSelection;
