import { useEffect, useState } from "react";
import { getUserPerformance} from "../../domain/usecases/get-user-performance";
import {UserPerformance} from "../../domain/models/type/user-performance";
  

export const useFetchPerformance =(userId: number) =>{
    const [performanceData, setPerformanceData] = useState<UserPerformance| null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null);
            try {
                const userPerformance = await getUserPerformance({ userId });
                setPerformanceData(userPerformance);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return {performanceData, isLoading, error}
}