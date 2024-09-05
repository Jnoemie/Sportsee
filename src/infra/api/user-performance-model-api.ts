import { UserPerformanceApi, PerformanceApiData } from "../api/type /user-performance-api";
import { PerformanceData } from "../../domain/models/type/user-performance";

export class UserPerformanceModel {
    userId: number;
    performanceData: PerformanceData[];

    /**
     * Crée un modèle de données de performance utilisateur.
     * @param {UserPerformanceApi} data - Les données provenant de l'API
     */
    constructor(data: UserPerformanceApi) {
        this.userId = data.userId;
        this.performanceData = this.transformPerformanceData(data);
    }

    /**
     * Transforme les données de performance de l'API.
     * @param {UserPerformanceApi} data - Les données provenant de l'API
     * @return {PerformanceData[]} Les données de performance transformées
     */
    private transformPerformanceData(data: UserPerformanceApi): PerformanceData[] {
        const translateKind = {
            1: 'Cardio',
            2: 'Énergie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité',
        };

        const orderedKeys = ['Cardio', 'Énergie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];

        const transformedData = data.data.map((item: PerformanceApiData) => {
            const kindString = translateKind[item.kind];
            return {
                value: item.value,
                kind: kindString,
            };
        });

        return transformedData.sort((a, b) => {
            return orderedKeys.indexOf(a.kind) - orderedKeys.indexOf(b.kind);
        });
    }
}