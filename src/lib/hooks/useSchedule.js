import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/lib/schedule";
import { FilterPerDay } from "@/stores/FilterPerDay";

export function useSchedule() {
  const { selectedDay } = FilterPerDay();
  return useQuery({
    queryFn: async () => await getSchedule(selectedDay),
    queryKey: ["schedule", selectedDay], // unique key for caching data
    staleTime: 5 * 60 * 1000, // cache data for 5 minutes
  });
}
