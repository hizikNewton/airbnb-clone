import Layout from 'components/shared/layout';
import Home from 'pages/home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { navLinks } from 'components/shared/nav/navLinks';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={"home"} element={<Home />} />
        { navLinks.map( ({name,id}) => <Route path={name.toLowerCase()} key={`${name}-${id}`} element={<Home />}/>)}
       {/*  <Route path={"*"} element={<Navigate to="/home" replace />} />
      */} </Route>
    </Routes>
  );
}

export default App;
