import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import AddBookForm from './AddBookForm';
import LibrarianHome from './LibrarianHome';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} /> {/* Default route */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addBook" element={<AddBookForm />} />
                    <Route path="/librarian-home" element={<LibrarianHome />} />
                </Routes>
            </div>
        </Router>
    );
}
    
export default App;
