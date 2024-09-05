export type KeyData = {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
};

export type UserInfos = {
    firstName: string;
    lastName: string;
    age: number;
};
export type UserInfosApi = {
    id: number;
    userInfos: UserInfos;
    todayScore?: number;
    score?: number;
    keyData: KeyData;
};