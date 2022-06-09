import './App.css';
import {Routes,Route} from 'react-router-dom';
import Registration from './Components/Registration';
import Admin from './Components/Admin';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Registration></Registration>}></Route>
      <Route path='Admin' element={<Admin/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
