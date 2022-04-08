import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { NameContextProvider } from "./contexts/NameContext";
import CocktailView from "./views/CocktailView";

//  VIEWS
import Home from "./views/Home";

function App() {

  return (
    <div >
      <Navbar />

      <div className="container">
        <NameContextProvider>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/searchByCocktail/:id" element={<CocktailView/>} />
        </Routes>
        </NameContextProvider>
      </div>
    </div>
  );
}

export default App;
