//Importations nécessaires
import { BASE_URL } from "../constants/const";
import { UserActivity} from "../../domain/models/type/user-activity";
import { UserActivityApi} from '../api/type /user-activity-api'
import { UserAverageSession } from "../../domain/models/type/user-average-session";
import {UserAverageSessionApi} from "../api/type /user-average-session-api"
import { User} from "../../domain/models/type/user";
import {UserInfosApi} from "../api/type /user-api"
import { UserGateway } from "./user-gateway";
import { UserPerformance } from "../../domain/models/type/user-performance";
import {UserPerformanceApi} from "../api/type /user-performance-api"
import { UserActivityModel } from "../../infra/api/user-activity-model-api";
import { UserModel } from "../../infra/api/user-model-api";
import { UserSessionsModel } from "../../infra/api/user-average-session-model-api";
import { UserPerformanceModel } from "../../infra/api/user-performance-model-api";

// Classe ApiUser implémentant UserGateway
export class ApiUser implements UserGateway {
    async getUser({ userId }: { userId: number }): Promise<User> {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserInfosApi } = await response.json();

        const userModel = new UserModel(data);
        return {
            id: userModel.id,
            userInfos: userModel.userInfos,
            todayScore: userModel.todayScore,
            todayScorePercentage: userModel.todayScorePercentage,
            keyData: userModel.keyData,
        };
    }

    async getUserActivity({ userId }: { userId: number }): Promise<UserActivity> {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserActivityApi } = await response.json();

        return new UserActivityModel(data);
    }

    async getUserPerformance({ userId }: { userId: number }): Promise<UserPerformance> {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserPerformanceApi } = await response.json();

        return new UserPerformanceModel(data);
    }

    async getUserAverageSession({ userId }: { userId: number }): Promise<UserAverageSession> {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserAverageSessionApi } = await response.json();

        return new UserSessionsModel(data);
    }
}

