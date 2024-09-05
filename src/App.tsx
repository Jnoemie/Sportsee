import  { useEffect, useState } from "react";

import UserKeyData from "./components/UserKeyData";
import UserActivityChart from "./components/chart/UserActivityChart";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import AverageSessionsChart from "./components/chart/AverageSessionsChart";
import PerformanceChart from "./components/chart/PerformanceChart";
import TodayScoreChart from "./components/chart/TodayScoreChart";
import "./styles/App.css";

import { getUser } from "./domain/usecases/get-user";
import { User } from "./domain/models/type/user";

function App() {
  const [userId, setUserId] = useState<number>(12); // L'utilisateur par défaut est 12
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async (id: number) => {
    const user = await getUser({ userId: id });
    setUser(user);
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId]); // Recharger les données à chaque changement de userId

  if (!user) return <div>Chargement...</div>;

  const handleChangeUser = () => {
    setUserId((prevUserId) => (prevUserId === 12 ? 18 : 12)); // Basculer entre 12 et 18
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <div className='content_welcome'>
            <div className='content_welcome_row'>
              <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>

            </div>
            <p className="encouragement">Félicitations! Vous avez explosé vos objectifs hier 👏</p>
            <button onClick={handleChangeUser}>Changer d'utilisateur</button>
          </div>

          <div className="chartPosition">
            <div className="charts">
              <UserActivityChart userId={userId} />
              <div className="charts-row">
                <AverageSessionsChart userId={userId} />
                <PerformanceChart userId={userId} />
                <TodayScoreChart score={user.todayScore} />
              </div>
            </div>

            <div>
              <UserKeyData keyData={user.keyData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;