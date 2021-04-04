import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

import useGetGames from '../../hooks/use-get-games/useGetGames';
import AsyncInputField from '../../../../components/form-fields/async-input-field/AsyncInputField';
import SelectedGameDetails from '../../components/selected-game-details/SelectedGameDetails';
import { transforminitialItemsToGamesList } from '../../helpers/helpers';

import styles from './styles.scss';

const GameSelection: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
console.log(selectedGame, 'selectedGame');

  const [
    { data: gamesData, error: gameDataError, isLoading, },
    { refetch: fetchGames }
  ] = useGetGames(inputValue);

  useEffect(() => {
    if (inputValue.length < 3) {
      return;
    }

    if (shouldFetch) {
      fetchGames();
    }
  }, [inputValue, fetchGames, shouldFetch]);

  useEffect(() => {
    setFilteredGames(transforminitialItemsToGamesList(gamesData));
  }, [gamesData])

  useEffect(() => {
    console.log(inputValue, 'inputValue');
    

    if (!shouldFetch) {
      const game =  filteredGames?.find((game) =>{    
        return game.name === inputValue});
     
      setSelectedGame(game);
      
    }
  }, [shouldFetch, inputValue, filteredGames])

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
        isLoading={isLoading}
        value={inputValue}
        displayData={() => (
          filteredGames?.map(option => (
            <li 
              key={option.name}
              className={styles.item}
              onClick={() => { 
                setInputValue(option.name);
                setShouldFetch(false);
              }}
            >
              {option.name}
            </li>
          ))
        )}
      />
      {
        !shouldFetch && selectedGame && (
        <SelectedGameDetails
          name={selectedGame?.name}
          description={selectedGame?.description}
        />
      )}
    </>
  );
}

export default GameSelection;
