import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState
} from 'react';

import AsyncInputField from '../../../../components/form-fields/async-input-field/AsyncInputField';
import SelectedGameDetails from '../../components/selected-game-details/SelectedGameDetails';
import {
  IGameData,
  transforminitialItemsToGamesList
} from '../../helpers/helpers';

import styles from './styles.scss';

interface TProps {
  fetchedGames: any;
  isLoadingGames: boolean | undefined;
  selectedGame: IGameData | undefined | null;
  fetchGamesApiCall: (value: string) => void;
  setSelectedGame: Dispatch<SetStateAction<IGameData | null | undefined>>;
}

const GameSelection: FunctionComponent<TProps> = ({
  fetchedGames: games,
  isLoadingGames,
  selectedGame,
  setSelectedGame,
  fetchGamesApiCall
}: TProps) => {
  const [inputValue, setInputValue] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const [fetchedGames, setFetchedGames] = useState<IGameData[]>([]);

  useEffect(() => {
    setFetchedGames(transforminitialItemsToGamesList(games?.games));
  }, [games]);

  useEffect(() => {
    if (inputValue.length < 3) {
      return;
    }

    if (shouldFetch) {
      fetchGamesApiCall(inputValue);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, shouldFetch]);

  useEffect(() => {
    if (!shouldFetch && inputValue) {
      setSelectedGame(() =>
        fetchedGames?.find((game: IGameData) => game.name === inputValue)
      );
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
        type='text'
        minLength={3}
        debounceTimeout={500}
        placeholder='Search for a game..'
        onChange={(e) => {
          setInputValue(e.target.value);
          setShouldFetch(true);
        }}
        name='select'
        isLoading={isLoadingGames}
        value={inputValue}
        displayData={() =>
          !selectedGame &&
          fetchedGames?.map((game: IGameData) => (
            <li
              key={game.name}
              className={styles.item}
              onClick={() => {
                setInputValue(game.name);
                setShouldFetch(false);
              }}>
              {game.name}
            </li>
          ))
        }
      />
      {selectedGame && (
        <SelectedGameDetails
          name={selectedGame?.name}
          description={selectedGame?.description}
          onCancel={() => {
            setSelectedGame(null);
            setFetchedGames([]);
          }}
        />
      )}
    </>
  );
};

export default GameSelection;
