import React, { JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Creators from './pages/Creators/Creators';
import ErrorPage from './pages/Global/ErrorPage';
import Layout from './pages/Global/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Projects from './pages/Project/Projects';
import Recruit from './pages/Recruit/Recruit';
import Signup from './pages/Signup/Signup';

type RouteChild = {
  path: string;
  element: JSX.Element;
  hasHeader?: boolean;
  hasFooter?: boolean;
};

const Router = () => {
  const routes_children_auth: RouteChild[] = [
    { path: '/login', element: <Login />, hasHeader: true, hasFooter: true },
    { path: '/signup', element: <Signup />, hasHeader: true, hasFooter: true },
  ];

  const routes_children: RouteChild[] = [
    { path: '/', element: <Home />, hasHeader: true, hasFooter: true },
    { path: '/recruit', element: <Recruit />, hasHeader: true, hasFooter: true },
    { path: '/creators', element: <Creators />, hasHeader: true, hasFooter: true },
    { path: '/projects', element: <Projects />, hasHeader: true, hasFooter: true },
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
