import * as React from 'react';
import { AxiosResponse } from 'axios';

const { useEffect, useState } = React;

type Props = Promise<AxiosResponse<any>>;

/**
 * 请求数据函数的封装
 * @param fetchFn 封装好的 axios 请求函数，看 src/api
 */
const UseFetchData = (fetchFn: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [resData, setResData] = useState<any>();

  useEffect(() => {
    let isDestroyed = false;

    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await fetchFn;
        if (!isDestroyed) {
          setResData(res);
          setIsLoading(false);
        }
      } catch (err) {
        setIsError(true);
      }
    };

    getData();

    return () => {
      isDestroyed = true;
    };
  }, []);

  return {
    isLoading,
    isError,
    resData
  };
};

export default UseFetchData;
