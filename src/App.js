import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, exact, type, component: Component }) => {
          return (
            <Route key={path} path={path} exact={exact} element={<Component />}/>
          )})
        }
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
