/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useState } from 'react';

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<AxiosError>();

  const apiFetch = async (payload: any) => {
    setIsLoading(true);

    try {
      // const response = await axios({
      //   ...payload
      // });
      const response = await axios.get(
        payload
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return [
    {
      data,
      isLoading,
      error
    },
    {
      apiFetch
    }
  ] as const;
};

export default useRequest;
