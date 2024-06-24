import { Route, Routes } from "react-router-dom";


import Home from './components/Home';
import Header from  './components/Header';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />    
      </Routes>
    </div>
  );
}

export default App;
