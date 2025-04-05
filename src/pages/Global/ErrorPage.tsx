import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Something went wrong.</h1>
      <p style={styles.message}>
        The page you are looking for doesn't exist or an unexpected error has occurred.
      </p>
      <button style={styles.button} onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as const,
    backgroundColor: '#f8f9fa',
    color: '#343a40',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  },
};

export default ErrorPage;
