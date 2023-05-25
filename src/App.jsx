import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navigator from "./components/Navigator/Navigator";
import Projects from "./components/Projects/Projects";

function App() {
  const mainStyle = {
    backgroundColor: "#FFF"
  };

  return (
    <>  
      <main style={mainStyle}>
        {/* Navigator */}
        <Navigator />
        {/* Home */}
        <Content />
        {/* About */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

export default App;
