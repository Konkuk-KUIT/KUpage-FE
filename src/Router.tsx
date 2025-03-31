import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Layout } from 'lucide-react';

import ErrorPage from './pages/Global/ErrorPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const Router = () => {
  const routes_children_auth = [
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
  ];

  const routes_children = [
    { path: '/', element: <Home /> },
    ...routes_children_auth,
    { path: '/*', element: <ErrorPage /> },
  ];

  const routes = [
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes_children,

      loader: async () => {
        console.log('Loading data...');
        return null;
      },
    },
  ];

  const router = createBrowserRouter(routes, { basename: '/app' });
  return <RouterProvider router={router} />;
};

export default Router;
