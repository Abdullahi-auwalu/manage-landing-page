import "./App.css";
import Diff from "./components/diff/Diff";
import Intro from "./components/intro/Intro";
import Nav from "./components/nav/Nav";
import Simplify from "./components/simplify/Simplify";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <Diff />
      <Testimonials />
      <Simplify />
    </div>
  );
}

export default App;
