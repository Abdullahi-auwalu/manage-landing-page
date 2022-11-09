import "./App.css";
import Diff from "./components/diff/Diff";
import Footer from "./components/footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
