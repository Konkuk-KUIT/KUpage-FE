import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/Global/ErrorPage';
import Layout from './pages/Global/Layout';
import Home from './pages/Home/Home';
import DiscordCallback from './pages/Login/DiscoreCallback';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const Router = () => {
  const routes_children_auth = [
    { path: '/login', element: <Login />, hasHeader: true, hasFooter: true },
    { path: '/signup', element: <Signup />, hasHeader: true, hasFooter: true },
    { path: '/discordcallback', element: <DiscordCallback />, hasHeader: false, hasFooter: false },
  ];

  const routes_children = [
    { path: '/', element: <Home />, hasHeader: true, hasFooter: true },
    ...routes_children_auth,
    { path: '/*', element: <ErrorPage /> },
  ];

  const routes = [
    {
      element: <Layout routes_children={routes_children} />,
      errorElement: <ErrorPage />,
      children: routes_children,

      loader: async () => {
        console.log('Loading data...');
        return null;
      },
    },
  ];

  const router = createBrowserRouter(routes, { basename: '/KUpage-FE/' });
  return <RouterProvider router={router} />;
};

export default Router;
