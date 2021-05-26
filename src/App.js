import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from "./component/Services";
import About from "./component/About";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </>
    </BrowserRouter>
  );
}

export default App;
