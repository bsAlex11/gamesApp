import { useQuery } from "react-query";
import { GET_GAMES_BY_NAME } from './../../api/queries';
import { getGamesByName } from '../../api/requests';

const useGetGames = (gameName: string) => {
  const { data, isLoading, error, refetch } = useQuery<any, Error>([GET_GAMES_BY_NAME, gameName], () => getGamesByName(gameName), {
    enabled: false
  });

  return [
    {
      data,
      error,
      isLoading,
    },
    {
      refetch
    }
  ] as const;
};

export default useGetGames;
