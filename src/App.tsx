import Layout from 'components/shared/layout';
import Home from 'pages/home';
import { Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"home"} element={<Home />} />
        {/*  {nav.map(({ path, name }, idx) => <Route path={path} key={`${name}-${idx}`} element={<Home name={name} />} />)}
         */}<Route path={"*"} element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
