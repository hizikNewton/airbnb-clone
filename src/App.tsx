import Layout from 'components/shared/layout';
import Dashboard from 'pages/dashboard';
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"dashboard"} element={<Dashboard />} />
        {/*  {nav.map(({ path, name }, idx) => <Route path={path} key={`${name}-${idx}`} element={<Home name={name} />} />)}
         */}<Route path={"*"} element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
