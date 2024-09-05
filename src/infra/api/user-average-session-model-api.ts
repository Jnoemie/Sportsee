import { UserAverageSessionApi, SessionsData } from "../api/type /user-average-session-api";

export class UserSessionsModel {
    userId: number;
    sessions: SessionsData[];

    constructor(data: UserAverageSessionApi) {
        this.userId = data.userId;
        this.sessions = this.transformSessionsData(data);
    }

    private transformSessionsData(data: UserAverageSessionApi): SessionsData[] {
        const daysMap: { [key: number]: string } = {
            1: 'L',
            2: 'M',
            3: 'M',
            4: 'J',
            5: 'V',
            6: 'S',
            7: 'D'
        };

        const sessionsTransformées = data.sessions.map(session => ({
            day: daysMap[session.day],
            sessionLength: session.sessionLength,
            formattedSessionLength: `${session.sessionLength} min`
        }));

        const sessionFacticeDébut: SessionsData = {
            day: '',
            sessionLength: 30,
            formattedSessionLength: '30 min'
        };

        const sessionFacticeFin: SessionsData = {
            day: '',
            sessionLength: 30,
            formattedSessionLength: '30 min'
        };

        // Ajouter des données fictives au début et à la fin
        sessionsTransformées.unshift(sessionFacticeDébut);
        sessionsTransformées.push(sessionFacticeFin);

        return sessionsTransformées;
    }
}