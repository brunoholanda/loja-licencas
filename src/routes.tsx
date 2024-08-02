import { useEffect, lazy, Suspense, useState } from 'react';
import { Route, Routes, useLocation, HashRouter, Navigate } from 'react-router-dom';
import Loading from './Components/Loading';
import ProductDetail from './Pages/ProductPage';

const Home = lazy(() => import('./Pages/Home'));
const NotFound = lazy(() => import('./Pages/404'));
const PageBody = lazy(() => import('./Components/PageBody'));
const Authentication = lazy(() => import('./Pages/Auth'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<div className='loading-global'><Loading /></div>}>
        <Routes>
          <Route path="/" element={<PageBody />}>
            <Route index element={<Home />} />
            <Route path='/windows-11-pro-details' element={<ProductDetail />} />

            <Route
              path="/operador"
              element={
                isAuthenticated ? (
                  <Home />
                ) : (
                  <Navigate to="/login" replace state={{ from: '/operador' }} />
                )
              }
            />
            <Route
              path="/login"
              element={<Authentication setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/edit/:postId"
              element={
                isAuthenticated ? (
                  <Home />
                ) : (
                  <Navigate to="/login" replace state={{ from: '/edit' }} />
                )
              }
            />
            <Route
              path="/post/:postId"
              element={<Home />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default AppRoutes;
