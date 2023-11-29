import Particless from "./Particles";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Particless />
      {/* <div className=" bg-[#000] bg-no-repeat bg-cover overflow-hidden"> */}
      <div>
        <Header />
        <Banner />
        <Nav />
        <About />
        <Services />
        <Work />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </>
  );
}

export default App;
