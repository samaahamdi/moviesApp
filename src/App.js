import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import Favourites from "./pages/Favourites";
import LanguageContext from "./context/language";
import { useState } from "react";

function App() {
  const [contextLang, setContextLang] = useState("en");
  return (
    <Router>
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
        <NavigationBar />
        <div className="container my-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/movieDetails/:id" component={MovieDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </LanguageContext.Provider>
    </Router>
  );
}

export default App;
