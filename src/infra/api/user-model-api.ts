import { KeyData, UserInfos, UserInfosApi } from "../api/type /user-api";

export class UserModel {
    id: number;
    userInfos: UserInfos;
    todayScore: number;
    todayScorePercentage: number;
    keyData: KeyData;

    /**
     * Crée un modèle de données utilisateur.
     * @param {UserInfosApi} data - Les données provenant de l'API
     */
    constructor(data: UserInfosApi) {
        this.id = data.id;
        this.userInfos = data.userInfos;
        this.todayScore = this.normalizeScore(data);
        this.todayScorePercentage = this.calculateScorePercentage(this.todayScore);
        this.keyData = data.keyData;
    }

    /**
     * Normalise le score à partir des données de l'API.
     * @param {UserInfosApi} data - Les données provenant de l'API
     * @return {number} Le score normalisé
     */
    private normalizeScore(data: UserInfosApi): number {
        return data.todayScore !== undefined ? data.todayScore : data.score !== undefined ? data.score : 0;
    }

    /**
     * Calcule le pourcentage du score.
     * @param {number} score - Le score de l'utilisateur
     * @return {number} Le pourcentage du score
     */
    private calculateScorePercentage(score: number): number {
        return score * 100;
    }
}