import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from  "react-router-dom";
import Navbar from './components/navbar';
import FooterTab from './components/footer/insex';
import Earings from './components/earings';
import DesignYourOwn from './components/designYourown';
import Rings from './components/rings';
import Homepage from './components/homePage';
import ContentPage from './components/contentPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/footertab" element={<FooterTab />} />
        <Route path="/earing" element={<Earings />} />
        <Route path="/designyourown" element={<DesignYourOwn />} />
        <Route path="/ring" element={<Rings />} />
        <Route path='/contentpage' element={<ContentPage/>}/> 
        {/* <Route path="/managerdashboard" element={<ManagerDashboard />} />  */}
      </Routes>
    </BrowserRouter>  

    </div>
  );
}

export default App;
