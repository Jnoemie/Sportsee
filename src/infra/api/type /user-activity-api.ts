export type SessionsApiActivity = {
    day: string;
    kilogram: number;
    calories: number;
};

export type UserActivityApi = {
    userId: number;
    sessions: SessionsApiActivity[];
};
export type SessionsActivity = {
    day: string;
    kilogram: number;
    calories: number;
};
