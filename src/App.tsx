import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import Root from './routes';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                {Root.map((rule, i) => (
                    <Route
                        key={i}
                        path={rule.path}
                        element={<rule.element />}>
                    </Route>
                ))}
            </Routes>
        </Router>
    );
};

export default App;