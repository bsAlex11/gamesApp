export type IGameData = {
  userRating?: number | null;
  description: string;
  shortDescription?: string;
  designers?: string[];
  images?: IGameImages;
  id?: string;
  maxPlayers?: number | null;
  minPlayers?: number | null;
  age?: number | null;
  name: string;
  minPlaytime?: number | null;
  maxPlaytime?: number | null;
  publisher?: string;
  year?: number | null;
  url?: string;
  learningComplexity?: number;
};

type IGameImages = {
  small: string;
  original: string;
};

export const transforminitialItemsToGamesList = (
  initialItems: any = []
): IGameData[] =>
  initialItems
    ?.filter((item: any) => item.type === 'game' || item.type === 'expansion')
    .map((game: any) => ({
      userRating: game.average_user_rating,
      description: game.description || '',
      shortDescription: game.description_preview || '',
      designers: game.designers,
      images: {
        small: game.images.small || '',
        original: game.images.original || ''
      },
      id: game.id || '',
      maxPlayers: game.max_players,
      minPlayers: game.min_players,
      age: game.min_age,
      name: game.name || '',
      minPlaytime: game.min_playtime,
      maxPlaytime: game.max_playtime,
      publisher: game.primary_publisher || '',
      year: game.year_published,
      url: game.url || '',
      learningComplexity: game.average_learning_complexity
    }));
