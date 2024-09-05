export type PerformanceApiData = {
    value: number;
    kind: number;
};

export type UserPerformanceApi = {
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: PerformanceApiData[];
};
