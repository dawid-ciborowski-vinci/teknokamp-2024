import AdminPage from '../Pages/AdminPage';
import HomePage from '../Pages/HomePage';
import UserPage from '../Pages/UserPage';

const routes = {
  '/': HomePage,
  '/user': UserPage,
  '/admin': AdminPage,
};

export default routes;