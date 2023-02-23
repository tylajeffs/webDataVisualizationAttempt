import {BrowserRouter, Routes,Route} from "react-router-dom";
import ParallelCoordinates from "./pages/ParallelCoordinates";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/parallel" element={<ParallelCoordinates/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
