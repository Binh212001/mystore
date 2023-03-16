const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');

function PrivateRouteAuth({ children }) {
  const { isLogin } = useSelector((state) => state.user);
  return isLogin ? <>{children}</> : <Navigate to='/' />;
}

export default PrivateRouteAuth;
