import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import MyBlog from "./Components/MyBlog/MyBlog";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <About />
            <MyBlog />
            <Project />
            <Contact />
          </Route>
          <Route exact path="/details/:Id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
