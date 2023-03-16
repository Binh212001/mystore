import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';
import routes from './routes';
import Layout from './components/layout/Layout';
import PrivateRoute from './routes/PrivateRoute';
import Manage from './pages/manage/Manage';
import User from './pages/user/User';
import PrivateRouteAuth from './routes/PrivateRouteAuth';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}

        <Route
          path='/user/:id'
          element={
            <Layout>
              <PrivateRouteAuth>
                <User />
              </PrivateRouteAuth>
            </Layout>
          }
        />

        <Route
          path='/manage'
          element={
            <Layout>
              <PrivateRoute>
                <Manage />
              </PrivateRoute>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
