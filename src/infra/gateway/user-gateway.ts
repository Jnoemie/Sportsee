import { User } from "../../domain/models/type/user";
import { UserActivity } from "../../domain/models/type/user-activity";
import { UserPerformance } from '../../domain/models/type/user-performance';
import { UserAverageSession } from "../../domain/models/type/user-average-session";

export interface UserGateway {
    
    getUserActivity({ userId }: { userId: number }): Promise<UserActivity>;
    getUser({ userId}: {userId: number}): Promise<User>;
    getUserPerformance({userId}: {userId: number}): Promise<UserPerformance>;
    getUserAverageSession({userId}: {userId: number}): Promise<UserAverageSession>;
}