import { useEffect, useState } from "react";
import { getUserActivity } from "../../domain/usecases/get-user-activity";
import { UserActivity } from "../../domain/models/type/user-activity";

export function useFetchActivity(userId: number) {
  const [activityData, setActivityData] = useState<UserActivity | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const userActivity = await getUserActivity({ userId });
        setActivityData(userActivity);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { activityData, isLoading, error };
}