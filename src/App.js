import logo from './logo.svg';
import './App.css';
import WeatherHome from './components/WeatherHome';
import WeatherExtra from './components/WeatherExtra';
import LocationSelect from './components/LocationSelect';
import {WeatherContext, WeatherProvider} from './contexts/weatherContext'

function App() {
  return (
    <div className="weather-container">
      <WeatherProvider>
        <WeatherHome/>
        <WeatherExtra/>
      </WeatherProvider>
    </div>
  );
}

export default App;
