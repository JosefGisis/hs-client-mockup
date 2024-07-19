import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

// Views
import DashboardView from './views/Dashboard';
import Templates from './views/Templates';
import Records from './views/Records';

import { ProtectedRoute } from './components/ProtectedRoute';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Templates /> },
    {
      path: '/dashboard',
      element: <ProtectedRoute component={<DashboardView />} />,
    },
    {
      path: '/templates',
      element: <ProtectedRoute component={<Templates />} />,
    },
    {
      path: '/records',
      element: <Records />,
    },
    {
      path: '*',
      element: <Navigate to={'/'} />,
    },
  ]);

  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );
};

export default App;
