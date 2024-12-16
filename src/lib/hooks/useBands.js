import { useQuery } from "@tanstack/react-query";
import { getBands } from "@/lib/api";

export function useBands() {
  return useQuery({
    queryFn: async () => await getBands(),
    queryKey: ["bands"], // unique key for caching data
  });
}
