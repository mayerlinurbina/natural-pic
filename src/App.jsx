import {Routes, Route, NavLink} from 'react-router-dom'
import Navbar from './components/navbar';
import Favoritos from './pages/Favoritos';
import Home from './pages/Home';
export default function App() {
   return(
       <div className="App">
           <h1></h1>
           
           <Navbar/>

           <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/favoritos" element={<Favoritos/>}/>
           </Routes>
       </div>
   );
}
