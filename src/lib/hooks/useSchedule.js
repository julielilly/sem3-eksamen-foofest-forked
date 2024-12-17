import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/lib/schedule";

export function useSchedule() {
  return useQuery({
    queryFn: async () => await getSchedule(),
    queryKey: ["schedule"], // unique key for caching data
    staleTime: 5 * 60 * 1000, // cache data for 5 minutes
  });
}
