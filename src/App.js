import { HashRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./Pages/weather_page";
import WeatherSetup from "./Pages/WeatherSetup";
//
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WeatherSetup/>}/>
        <Route path="/weather_page" element={<WeatherPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
