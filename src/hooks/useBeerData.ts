import useSWR from "swr";
import { fetcher } from "../utils/fetchers";
import { BEER_API_ENDPOINT } from "../constants";

export const useBeerData = (path: string) => {
  return useSWR(`${BEER_API_ENDPOINT}${path}`, fetcher);
};
