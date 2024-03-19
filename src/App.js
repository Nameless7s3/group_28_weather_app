import { HashRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./Pages/weather_page";
import WeatherSetup from "./Pages/WeatherSetup";
import WeatherDays from "./Pages/DayButtons";
//
function App() {
  return (
    <HashRouter>
      <Routes>
        {/* This does the routing to all the different pages */}
        <Route path="/" element={<WeatherDays/>}/>
        <Route path="/weather_setup" element={<WeatherSetup/>}/>
        <Route path="/weather_page" element={<WeatherPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
