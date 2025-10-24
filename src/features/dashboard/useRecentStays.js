import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = Number(searchParams.get("last")) || 7;
  const queryData = subDays(new Date(), numDays).toISOString();
  const {
    isLoading,
    data: recentStays,
    error,
  } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryData),
  });
  const confirmedStays = recentStays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { isLoading, confirmedStays, numDays, error };
}
