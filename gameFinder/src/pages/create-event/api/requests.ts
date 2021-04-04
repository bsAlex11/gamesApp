import axios from "axios";

const getGamesByName = async (name: string): Promise<void> => {
  try {
    const response = await axios.get(`https://api.boardgameatlas.com/api/search?name=${name}&client_id=EBYGaHxiJD`);
    return response.data.games;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  getGamesByName,
}
