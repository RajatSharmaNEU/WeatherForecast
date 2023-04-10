import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import Home from "./Home";
import WeatherDay from "./WeatherDay";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route path="/:city/:day" Component={WeatherDay}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
