

export type SessionsActivity = {
    day: string;
    kilogram: number;
    calories: number;
};

export type UserActivity = {
    userId: number;
    sessions: SessionsActivity[];
};