import { useEffect, useState } from 'react';
import { getUser } from '../domain/usecases/get-user';
import { User } from '../domain/models/type/user';

interface UserDataProviderProps {
  userId: number;
  onUserFetched: (user: User | null) => void;
}

export const UserDataProvider = ({ userId, onUserFetched }: UserDataProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const user = await getUser({ userId });
        onUserFetched(user);
      } catch (error: any) {
        setError(error);
        onUserFetched(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId, onUserFetched]);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return null; // Pas besoin d'afficher quoi que ce soit, on gère juste les données
};