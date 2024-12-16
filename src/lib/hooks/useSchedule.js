import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/lib/schedule";

export function useSchedule() {
  return useQuery({
    queryFn: async () => await getSchedule(),
    queryKey: ["schedule"], // unique key for caching data
  });
}
