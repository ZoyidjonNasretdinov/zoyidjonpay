import Navbar from './components/navbar';
import Home from './components/home';
import { styles } from './util/style';
import Statistics from './components/statistics';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      
      {/* home section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/*  */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default App;
