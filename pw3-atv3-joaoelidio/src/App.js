import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.js'
import Criar from './components/pages/Criar.js'
import Get from './components/pages/Get.js'
import PutDelete from './components/pages/PutDelete.js';
import List from './components/pages/List.js'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<NavBar/>}>

            <Route index element={<Get/>}/>

            <Route path='criar' element={<Criar/>}/>

            <Route path='list' element={<List/>}/>

            <Route path='putDelete' element={<PutDelete/>}/>
            
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}