import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = Number(searchParams.get("last")) || 7;
  const queryData = subDays(new Date(), numDays).toISOString();
  const {
    isLoading,
    data: recentBookings,
    error,
  } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryData),
  });
  return { isLoading, recentBookings, error };
}
