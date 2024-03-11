import { HashRouter, Routes, Route } from "react-router-dom";
import WeatherPage from "./Pages/weather_page";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WeatherPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
