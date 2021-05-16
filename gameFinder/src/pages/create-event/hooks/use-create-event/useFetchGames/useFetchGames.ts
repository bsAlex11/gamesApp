import { useCallback } from "react";
import useRequest from "../../../../../common/hooks/useRequest/useRequest";

const useFetchGames = () => {
  const [
    {
      data,
      isLoading,
      error,
    },
    {
      apiFetch
    }
  ] = useRequest();

  const fetchGamesApiCall = useCallback((url) => {
    apiFetch({
      method: 'GET',
      url
    });
  }, [apiFetch]);

  return [
    {
      data,
      isLoading,
      error,
    },
    {
      fetchGamesApiCall
    }
  ]
};

export default useFetchGames;
