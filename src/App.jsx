import Particless from "./Particles";
import Home from "./components/Home";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Particless />
      <div>
        <Header />
        <Home />
        <Nav />
        <Stack />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </>
  );
}

export default App;
