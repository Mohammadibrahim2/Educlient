
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <RouterProvider router={router}>
    <ToastContainer />
</RouterProvider>
   
    </>
  );
}

export default App;
