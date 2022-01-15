import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import AsyncInputField from '../../../../components/form-fields/async-input-field/AsyncInputField';
import SelectedGameDetails from '../../components/selected-game-details/SelectedGameDetails';
import useGetGames from '../../hooks/react-query-iteration/use-get-games/useGetGames';
import {
  IGameData,
  transforminitialItemsToGamesList
} from '../../helpers/helpers';
import styles from './styles.scss';

interface TProps {
  selectedGame: IGameData | undefined | null;
  isEventCreated: boolean;
  setSelectedGame: Dispatch<SetStateAction<IGameData | null | undefined>>;
}

const GameSelection: FunctionComponent<TProps> = ({
  selectedGame,
  isEventCreated,
  setSelectedGame
}: TProps) => {
  const [inputValue, setInputValue] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const [fetchedGames, setFetchedGames] = useState<IGameData[]>([]);

  const {data, isLoading: isLoadingGames} = useGetGames(inputValue, {
    shouldFetch
  });
  const {games} = data || {};

  useEffect(() => {
    setFetchedGames(transforminitialItemsToGamesList(games));
  }, [games]);

  useEffect(() => {
    if (!shouldFetch && inputValue) {
      setSelectedGame(() =>
        fetchedGames?.find((game: IGameData) => game.name === inputValue)
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, shouldFetch]);

  useEffect(() => {
    if (!selectedGame || isEventCreated) {
      setShouldFetch(true);
      setInputValue('');
      setSelectedGame(null);
    }
  }, [selectedGame, isEventCreated, setSelectedGame]);

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
