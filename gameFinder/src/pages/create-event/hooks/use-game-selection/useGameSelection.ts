import { useEffect, useState } from "react";
import { transforminitialItemsToGamesList } from "../../helpers/helpers";
import useGetGames from "../use-get-games/useGetGames";

const useGameSelection = (gameName: string) => {
  const [
    {
      data,
      error,
      isLoading,
    },
    {
      refetch
    }
  ] = useGetGames(gameName);

  const [fetchedGames, setFetchedGames] = useState(data);

  useEffect(() => {
    setFetchedGames(data);
  }, [data, isLoading])
  

  return [
    {
      fetchedGames: transforminitialItemsToGamesList(fetchedGames),
      isFetchLoading: isLoading
    },
    {
      fetchGames: refetch
    }
  ] as const;
};

export default useGameSelection;
