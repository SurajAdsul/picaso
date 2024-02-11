import "./App.css";
import Home from "./pages/Home.jsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import Header from "./components/Header.jsx";
import Gallery from "./components/Gallery.jsx";
import ImageContextProvider from "./context/ImageContext.jsx";

function App() {
  return (
    <ImageContextProvider>
      <Router basename="/gallery">
        <div className="container mx-auto my-28">
          <div className="mx-40">
            <Header />
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path=":slug" element={<Gallery />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ImageContextProvider>
  );
}

export default App;
