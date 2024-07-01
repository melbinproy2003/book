import React, { useEffect, useState } from 'react';

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchBooks() {
            const response = await fetch('http://localhost:8000/books/', {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setBooks(data);
        }
        fetchBooks();
    }, []);

    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1 style={styles.title}>Book Hub</h1>
                <nav style={styles.navbar}>
                    <a href="#" style={styles.navlink}>HOME</a>
                    <a href="#" style={styles.navlink}>LOGOUT</a>
                </nav>
            </header>
            <div style={styles.searchContainer}>
                <div style={styles.searchBox}>
                    <input type="text" placeholder="Search..." style={styles.searchInput} />
                    <button style={styles.searchButton}>Go</button>
                </div>
            </div>
            <div style={styles.cardContainer}>
                {books.map(book => (
                    <div key={book.id} style={styles.card}>
                        <img src={book.image || 'https://placehold.co/200x300'} alt={book.title} style={styles.cardImage} />
                        <div style={styles.cardBody}>
                            <h5 style={styles.cardTitle}>{book.title}</h5>
                            <p style={styles.cardText}>Author: <span style={styles.cardTextBold}>{book.author}</span></p>
                            <p style={styles.cardText}>ISBN: <span style={styles.cardTextBold}>{book.isbn}</span></p>
                            <p style={styles.cardText}>Published: <span style={styles.cardTextBold}>{book.publish_date}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        fontFamily: 'Arial, sans-serif',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
        fontFamily: 'Georgia, serif',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: 0,
    },
    navbar: {
        display: 'flex',
        gap: '20px',
    },
    navlink: {
        color: '#007bff',
        textDecoration: 'none',
        fontSize: '18px',
    },
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
    },
    searchBox: {
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
    },
    searchInput: {
        width: '100%',
        padding: '10px 20px',
        borderRadius: '50px',
        border: '1px solid #ced4da',
        paddingRight: '60px',
        fontSize: '16px',
        fontFamily: 'Courier New, monospace',
    },
    searchButton: {
        position: 'absolute',
        right: '.5px',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
    },
    card: {
        width: '300px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 'auto',
    },
    cardBody: {
        padding: '20px',
    },
    cardTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        fontFamily: 'Verdana, sans-serif',
    },
    cardText: {
        fontSize: '16px',
        marginBottom: '5px',
    },
    cardTextBold: {
        fontWeight: 'bold',
    },
};

export default Home;
