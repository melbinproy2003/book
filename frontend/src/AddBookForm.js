import React, { useState, useEffect } from 'react';

const AddBookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [image, setImage] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('publish_date', publishDate);
        formData.append('image', image);

        const response = await fetch('http://localhost:8000/books/add/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: formData
        });

        if (response.ok) {
            setToastMessage('Book added successfully');
            setIsSuccess(true);
        } else {
            setToastMessage('Failed to add book');
            setIsSuccess(false);
        }
        setShowToast(true);
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
            return () => clearTimeout(timer); // Cleanup timeout on component unmount
        }
    }, [showToast]);

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Add Book</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>ISBN:</label>
                    <input
                        type="text"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Publish Date:</label>
                    <input
                        type="date"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.button}>Add Book</button>
            </form>

            {showToast && (
                <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1 }}>
                    <div id="liveToast" className={`toast show ${isSuccess ? '' : 'text-bg-danger'}`} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-body" style={isSuccess ? styles.toastBody : styles.toastBodyError}>
                            {toastMessage}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#f5f5f5',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
        fontSize: '24px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
        backgroundColor: '#fff',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007BFF',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        alignSelf: 'center',
        marginTop: '20px',
    },
    toastBody: {
        backgroundColor: '#d4edda',
        color: '#155724',
    },
    toastBodyError: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
    },
};

export default AddBookForm;
