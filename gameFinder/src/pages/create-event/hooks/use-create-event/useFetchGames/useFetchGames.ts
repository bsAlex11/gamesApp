/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {useCallback} from 'react';
import useRequest from '../../../../../common/hooks/useRequest/useRequest';

const useFetchGames = () => {
  const [{data, isLoading, error}, {apiFetch}] = useRequest();

  const fetchGamesApiCall = useCallback(
    (value: string) => {
      apiFetch({
        method: 'GET',
        url: `https://api.boardgameatlas.com/api/search?name=${value}&client_id=EBYGaHxiJD`
      });
    },
    [apiFetch]
  );

  return [
    {
      data,
      isLoading,
      error
    },
    {
      fetchGamesApiCall
    }
  ] as const;
};

export default useFetchGames;
