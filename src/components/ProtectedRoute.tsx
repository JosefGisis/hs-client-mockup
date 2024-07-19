import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/authHooks';

interface Props {
  children?: React.ReactElement;
  component: React.ReactElement;
}

export const ProtectedRoute = ({ children, component }: Props) => {
  const { pathname, search } = useLocation();
  const { getToken } = useAuth();

  if (!getToken()) return <Navigate to={`/login?${search}`} state={{ redirectTo: pathname + search }} />;

  if (children) return children;
  if (component) return component;

  return <></>;
};
