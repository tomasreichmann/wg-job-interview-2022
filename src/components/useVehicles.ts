// import vehicles from "../vehicles.json";

/*
import useSWR, { Fetcher } from "swr";

type VehicleType = {
  nation: string;
  type: string;
  tier: number;
  isPremium: boolean;
  shapeUri: string;
  name: string;
};

const fetcher: Fetcher<VehicleType, string> = (...args) =>
  fetch(...args).then((res) => res.json());

const useVehicles = () => {
  return useSWR("/api/vehicles", fetcher);
};
*/
/*
import { useEffect, useState } from "react";

const range = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const useVehicles = (filter?: string) => {
  const [state, setState] = useState<{
    data?: typeof vehicles;
    isPending: boolean;
    error?: Error;
  }>({ data: undefined, isPending: true, error: undefined });

  return state;
};
*/



export default useVehicles;
