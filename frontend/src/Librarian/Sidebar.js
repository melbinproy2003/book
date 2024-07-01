import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div style={styles.sidebar}>
            <h2 style={styles.title}>Book Hub</h2>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><Link to="/register" style={styles.navlink}>ADD USER</Link></li>
                    <li style={styles.navItem}><Link to="/addBook" style={styles.navlink}>ADD BOOK</Link></li>
                    <li style={styles.navItem}><a href="#" style={styles.navlink} onClick={handleLogout}>LOGOUT</a></li>
                </ul>
            </nav>
        </div>
    );
}

const styles = {
    sidebar: {
        width: '250px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #ddd',
        minHeight: '100vh',
    },
    title: {
        fontSize: '24px',
        color: '#007bff',
        marginBottom: '20px',
    },
    profileImg: {
        width: '60px',
        borderRadius: '50%',
        marginBottom: '10px',
    },
    username: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    role: {
        marginBottom: '20px',
    },
    navList: {
        listStyleType: 'none',
        padding: 0,
    },
    navItem: {
        marginBottom: '10px',
    },
    navLink: {
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Sidebar;
