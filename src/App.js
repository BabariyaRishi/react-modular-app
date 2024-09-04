import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AdminLayout = lazy(() => import('./modules/admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./modules/admin/AdminDashboard'));
const AdminSettings = lazy(() => import('./modules/admin/AdminSettings'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="admin/*" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
