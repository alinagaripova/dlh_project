import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map(({ path, exact, type, component: Component }) => {
            return (
              <Route key={path} path={path} exact={exact} element={<Component />}/>
            )})
          }
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
