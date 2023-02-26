import {BrowserRouter, Routes,Route} from "react-router-dom";
import ParallelCoordinates from "./pages/ParallelCoordinates2012";
import HomePage from "./pages/HomePage";
import MyParallelCoords2012 from "./pages/ParallelCoordinates2012";
import MyParallelCoords2019 from "./pages/ParallelCoordinates2019";
import MyParallelCoordsMarathon from "./pages/ParallelCoordinatesMarathon";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/parallel/2012" element={<MyParallelCoords2012/>}/>
          <Route path="/parallel/2019" element={<MyParallelCoords2019/>}/>
          <Route path="/parallel/marathon" element={<MyParallelCoordsMarathon/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
