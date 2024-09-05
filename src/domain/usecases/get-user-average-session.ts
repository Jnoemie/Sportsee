
import { UserAverageSession } from '../models/type/user-average-session';
import { userLoader } from '../../infra/loader/user-loader';

// Usecase: point d'entrée quand il y a une interaction utilisateur (récupération de donnée, création de quelque chose)
export const getUserAverageSession = async ({userId,}: {userId: number;}): Promise<UserAverageSession> => {
  const userAverageSession = await userLoader().getUserAverageSession({ userId });

  return userAverageSession;
};