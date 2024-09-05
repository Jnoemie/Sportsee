export type PerformanceData = {
    kind: string;
    value: number;
};

export type UserPerformance = {
    userId: number;
    performanceData: PerformanceData[];
};

