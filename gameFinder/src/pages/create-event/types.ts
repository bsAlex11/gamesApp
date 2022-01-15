export type TEventFormValues = {
  dateTime: Date;
  location: string;
  numberOfPlayers: number;
  eventDetails: string;
  privateEvent: string;
  showLocation: string;
};

type TGamePayload = {
  game: {
    name?: string;
    description?: string;
  };
};

export type TEventFormPayload = TEventFormValues & TGamePayload;
