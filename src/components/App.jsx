import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route path="/:day" element={<div>Weather Day</div>}/>
                </Routes>
            </Router>
        );
    }
}

export default App;
