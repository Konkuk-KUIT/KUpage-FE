import { JSX, Suspense } from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

interface RoutesChildren {
  routes_children: {
    path: string;
    element: JSX.Element;
    hasHeader?: boolean;
    hasFooter?: boolean;
  }[];
}

const Layout = ({ routes_children }: RoutesChildren) => {
  const { pathname } = useLocation();

  return (
    <div id="layout" className="h-full w-full">
      {routes_children.find((child) => matchPath(child.path, pathname))?.hasHeader && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {routes_children.find((child) => matchPath(child.path, pathname))?.hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
