
import '../styles/UserKeyData.css';

interface KeyDataProps {
  keyData: {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  };
}

const UserKeyData = ({ keyData }: KeyDataProps) => {
  return (
    <div className="key-data">
      <div className="key-data-item">
        <img src="./calories.svg" alt="calorieIcon" className="keyDataIcon" />
        <div className="key-data-content">
          <p className="key-data-value">{keyData.calorieCount}kCal</p>
          <p className="key-data-type">Calories</p>
        </div>
      </div>
      <div className="key-data-item">
        <img src="./proteines.svg" alt="proteinIcon" className="keyDataIcon" />
        <div className="key-data-content">
          <p className="key-data-value">{keyData.proteinCount}g</p>
          <p className="key-data-type">Proteines</p>
        </div>
      </div>
      <div className="key-data-item">
        <img src="./glucides.svg" alt="carbohydratesIcon" className="keyDataIcon" />
        <div className="key-data-content">
          <p className="key-data-value">{keyData.carbohydrateCount}g</p>
          <p className="key-data-type">Glucides</p>
        </div>
      </div>
      <div className="key-data-item">
        <img src="./lipides.svg" alt="lipidsIcon" className="keyDataIcon" />
        <div className="key-data-content">
          <p className="key-data-value">{keyData.lipidCount}g</p>
          <p className="key-data-type">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default UserKeyData;