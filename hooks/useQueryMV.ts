import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export const getMV = async () => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
  return data
}

export const useQueryMV = () => {
  return useQuery({
    queryKey:"movie",
    queryFn:getMV,
    cacheTime: 1000,
    staleTime:0,
  })
};
