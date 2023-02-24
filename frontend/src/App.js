import {BrowserRouter, Routes,Route} from "react-router-dom";
import ParallelCoordinates from "./pages/ParallelCoordinates";
import HomePage from "./pages/HomePage";
import MyParallelCoords2012 from "./pages/ParallelCoordinates2012";
import ThisOne from "./pages/ThisOne";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/parallel/2012" element={<MyParallelCoords2012/>}/>
          <Route path="/parallel/2019" element={<ParallelCoordinates/>}/>
          <Route path="/parallel/2" element={<ThisOne/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
