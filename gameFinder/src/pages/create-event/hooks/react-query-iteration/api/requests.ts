import axios from 'axios';
import {TEventFormPayload} from '../../../types';

const getGamesByName = async (name: string): Promise<any> => {
  try {
    const response = await axios.get(
      `https://api.boardgameatlas.com/api/search?name=${name}&client_id=EBYGaHxiJD`
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const submitCreateEventForm = async (data: TEventFormPayload) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/events',
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export {getGamesByName};
