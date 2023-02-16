import HomePage from './Pages/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './Pages/Customer';
import AdminPage from './Pages/AdminPage'
import DeveloperPage from './Pages/DeveloperPage'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path = "/" exact element = {<HomePage/>}></Route>
        <Route path = "/customer" exact element = {<Customer/>}></Route>
        <Route path = "/admin" exact element = {<AdminPage/>}></Route>
        <Route path = "/developer" exact element = {<DeveloperPage/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
