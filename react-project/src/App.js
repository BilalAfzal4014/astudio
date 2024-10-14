import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, NavLink} from 'react-router-dom';
import {AppProvider} from './context/AppContext';
import Users from './pages/Users';
import Products from './pages/Products';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <nav>
                    <div className="nav-links">
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/products">Products</NavLink>
                    </div>
                </nav>
                <Routes>
                    <Route path="/users" element={<Users/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="*" element={(() => {
                        return (<Navigate to="/users" replace/>)
                    })()}/>
                </Routes>
            </Router>
        </AppProvider>
    );
};

export default App;
