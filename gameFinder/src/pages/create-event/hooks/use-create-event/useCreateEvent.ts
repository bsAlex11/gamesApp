import useFetchGames from "./useFetchGames/useFetchGames";

const useCreateEvent = () => {
  const [
    {
      data,
      isLoading,
      error,
    },
    {
      fetchGamesApiCall
    }
  ] = useFetchGames();

  return [
    {
      fetchedGamesData: data,
      isLoadingGames: isLoading,
      errorFetchedGames: error,
    },
    {
      fetchGamesApiCall
    }
  ] as const;
};

export default useCreateEvent;
