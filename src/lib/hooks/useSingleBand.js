import { useQuery } from "@tanstack/react-query";
import { getSingleBand } from "@/lib/api";

export function useSingleBand(slug) {
  return useQuery({
    queryFn: async () => await getSingleBand(slug),
    queryKey: ["singlebands", slug],
  });
}
