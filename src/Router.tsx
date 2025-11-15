import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import ArticleEdit from './pages/Article/ArticleEdit';
import Articles from './pages/Article/Articles';
import Creators from './pages/Creators/Creators';
import ErrorPage from './pages/Global/ErrorPage';
import Layout from './pages/Global/Layout';
import Home from './pages/Home/Home';
import DiscordCallback from './pages/Login/DiscordCallback';
import Login from './pages/Login/Login';
import MyPage from './pages/MyPage/MyPage';
import MyPageEdit from './pages/MyPage/MyPageEdit';
import PortfolioList from './pages/Portfolio/PortfolioList';
import UploadPortfolio from './pages/Portfolio/UploadPortfolio';
import Projects from './pages/Project/Projects';
import Recruit from './pages/Recruit/Recruit';
import Signup from './pages/Signup/Signup';
import ApplyState from './pages/TeamMatching/ApplyState/ApplyState';
import IdeaRegister from './pages/TeamMatching/IdeaRegister/IdeaRegister';
import ProjectApply from './pages/TeamMatching/ProjectApply/ProjectApply';
import TeamMatching from './pages/TeamMatching/TeamMatching';
import Building from './pages/Building/Building';
import ProjectForm from './pages/Project/ProjectForm';
import MemberManagement from './pages/Admin/MemberManagement';

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
    // { path: '/projects', element: <Projects />, hasHeader: true },
    // { path: '/projects/form', element: <ProjectForm /> },
    { path: '/projects', element: <Navigate to="/building" replace />, hasHeader: true },
    { path: '/projects/form', element: <Navigate to="/building" replace />, hasHeader: true },
    // { path: '/articles', element: <Articles />, hasHeader: true }, // KUITLog화면
    { path: '/articles', element: <Navigate to="/building" replace />, hasHeader: true }, // KUITLog화면
    // { path: '/portfolio/upload', element: <UploadPortfolio />, hasHeader: true },
    // { path: '/portfolio/list', element: <PortfolioList />, hasHeader: true },
    { path: '/portfolio/upload', element: <Navigate to="/building" replace />, hasHeader: true },
    { path: '/portfolio/list', element: <Navigate to="/building" replace />, hasHeader: true },
    { path: '/team-matching', element: <TeamMatching />, hasHeader: true },
    { path: '/team-matching/register', element: <IdeaRegister />, hasHeader: true },
    { path: '/team-matching/apply', element: <ProjectApply />, hasHeader: true },
    { path: '/team-matching/apply-state', element: <ApplyState />, hasHeader: true },
    { path: '/mypage', element: <MyPage />, hasHeader: true, hasFooter: true },
    { path: '/mypage/edit', element: <MyPageEdit />, hasHeader: true },
    { path: '/building', element: <Building />, hasHeader: true },
    { path: '/keyword', element: <Navigate to="/building" replace />, hasHeader: true },
    ...routes_children_auth,
    { path: '/*', element: <ErrorPage /> },
    { path: '/projects', element: <Projects />, hasHeader: true },
    { path: '/projects/form', element: <ProjectForm /> },
    { path: '/articles', element: <Articles />, hasHeader: true },
    { path: '/admin/member', element: <MemberManagement />, hasHeader: true },
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
