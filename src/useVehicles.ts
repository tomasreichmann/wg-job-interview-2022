import useSWR from "swr";

const fetcher: typeof fetch = (input, init) =>
  fetch(input, init).then((res) => res.json());

const useVehicles = () => {
  return useSWR("/api/vehicles", fetcher);
};

export default useVehicles;
