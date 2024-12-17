import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/lib/schedule";

export function useSchedule(selectedDay) {
  return useQuery({
    queryFn: async () => await getSchedule(selectedDay),
    queryKey: ["schedule", selectedDay], // unique key for caching data
    staleTime: 5 * 60 * 1000, // cache data for 5 minutes
  });
}
