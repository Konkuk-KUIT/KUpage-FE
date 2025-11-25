import Router from './Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        hideProgressBar
        closeButton={false}
        icon={false}
        position="top-center"
        autoClose={3000}
      />
    </>
  );
}

export default App;
