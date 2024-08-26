import { BrowserRouter, Routes, Route } from "react-router-dom";
import Videos from "./pages/videos";
import Video from "./pages/video";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Videos />} />
      <Route path="/video" element={<Video />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
