import { userLoader } from '../../infra/loader/user-loader';
import { UserPerformance } from '../models/type/user-performance';

// Usecase: point d'entrée quand il y a une interaction utilisateur (récupération de donnée, création de quelque chose)
export const getUserPerformance = async ({ userId }: { userId: number }): Promise<UserPerformance> => {
  const userPerformance = await userLoader().getUserPerformance({ userId });

  return userPerformance;
};