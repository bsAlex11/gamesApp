import { useState } from "react";
import { IGameData } from "../../helpers/helpers";
import useFetchGames from "./useFetchGames/useFetchGames";

const useCreateEvent = () => {
  const [
    {
      data: fetchedGames,
      isLoading,
      error,
    },
    {
      fetchGamesApiCall
    }
  ] = useFetchGames();

  const [selectedGame, setSelectedGame] = useState<IGameData | null>();

  return [
    {
      fetchedGames,
      isLoadingGames: isLoading,
      errorFetchedGames: error,
      selectedGame,
    },
    {
      setSelectedGame,
      fetchGamesApiCall,
    }
  ] as const;
};

export default useCreateEvent;
