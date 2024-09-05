
export type SessionsData = {
    day: string;
    sessionLength: number;
    formattedSessionLength: string;
};

export type UserAverageSession = {
    userId: number;
    sessions: SessionsData[];
};