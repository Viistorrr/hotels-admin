import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Dashboard from "./components/pages/Dashboard";
import NotFoundPage from './components/pages/NotFound';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';


function App() {
  const initialState = useInitialState();
  return (   
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>   
        </Layout>
      </BrowserRouter>   
    </AppContext.Provider> 
  );
}

export default App;
