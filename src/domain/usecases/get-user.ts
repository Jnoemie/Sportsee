import { userLoader } from '../../infra/loader/user-loader';
import { User } from '../models/type/user';

// usecase c'est le point d'entré quand il y a une interaction utilisateur (récupération de donnée, création de quelque chose)
export const getUser = async ({
    userId
}): Promise<User> => {
    const user = userLoader().getUser({userId});

    return user
}
