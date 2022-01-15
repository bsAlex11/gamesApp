import {useQuery} from 'react-query';
import {GET_GAMES_BY_NAME} from '../api/queries';
import {getGamesByName} from '../api/requests';

type TConfig = {
  shouldFetch?: boolean;
};

const useGetGames = (gameName: string, {shouldFetch}: TConfig) => {
  const {data, isLoading, error} = useQuery<any, Error>(
    [GET_GAMES_BY_NAME, gameName],
    () => getGamesByName(gameName),
    {
      enabled: gameName.length >= 3 && shouldFetch
    }
  );

  return {
    data,
    error,
    isLoading
  };
};

export default useGetGames;
