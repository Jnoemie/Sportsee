import { UserActivityApi, SessionsActivity } from "../api/type /user-activity-api"

export class UserActivityModel {
    userId: number;
    sessions: SessionsActivity[];

    constructor(data: UserActivityApi) {
        this.userId = data.userId;
        this.sessions = data.sessions;
    }
}