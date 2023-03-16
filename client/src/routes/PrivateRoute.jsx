const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');

function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  return user.isAdmin ? <>{children}</> : <Navigate to='/' />;
}

export default PrivateRoute;
