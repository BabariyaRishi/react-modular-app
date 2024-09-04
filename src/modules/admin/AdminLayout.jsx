import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
