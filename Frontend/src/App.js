import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./pages/videos";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Videos />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
