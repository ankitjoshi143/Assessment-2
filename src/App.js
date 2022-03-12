import {Routes, Route} from "react-router-dom"

import {LoginPage, DashBoardPage, PageNotFound} from './pages'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
      <>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="dashboard" element={<DashBoardPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </>
  );
}

export default App;

 
 