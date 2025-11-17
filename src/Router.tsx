import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/Global/ErrorPage';
import Layout from './pages/Global/Layout';
import Home from './pages/Home/Home';
import DiscordCallback from './pages/Login/DiscoreCallback';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Projects from './pages/Project/Projects';
import Recruit from './pages/Recruit/Recruit';
import Creators from './pages/Creators/Creators';
import Articles from './pages/Article/Articles';
import TeamMatching from './pages/TeamMatching/TeamMatching';
import IdeaRegister from './pages/TeamMatching/IdeaRegister/IdeaRegister';
import ProjectForm from './pages/Project/ProjectForm';
import UploadPortfolio from './pages/Portfolio/UploadPortfolio';
import PortfolioList from './pages/Portfolio/PortfolioList';

const Router = () => {
  const routes_children_auth = [
    { path: '/login', element: <Login />, hasHeader: true, hasFooter: true },
    { path: '/signup', element: <Signup />, hasHeader: true, hasFooter: true },
    { path: '/discordcallback', element: <DiscordCallback />, hasHeader: false, hasFooter: false },
  ];

  const routes_children = [
    { path: '/', element: <Home />, hasHeader: true, hasFooter: true },
    { path: '/recruit', element: <Recruit />, hasHeader: true, hasFooter: true },
    { path: '/creators', element: <Creators />, hasHeader: true, hasFooter: true },
    { path: '/team-matching', element: <TeamMatching />, hasHeader: true },
    { path: '/team-matching/register', element: <IdeaRegister />, hasHeader: true },
    { path: '/projects', element: <Projects />, hasHeader: true },
    { path: '/projects/form', element: <ProjectForm /> },
    { path: '/articles', element: <Articles />, hasHeader: true },
    { path: '/portfolio/upload', element: <UploadPortfolio />, hasHeader: true },
    { path: '/portfolio/list', element: <PortfolioList />, hasHeader: true },
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
