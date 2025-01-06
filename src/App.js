import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <div className="home-contents">
          <div
            style={{
              color: "white"
            }}
          >
            <h1 style={{ whiteSpace: "pre-wrap", fontSize:'76px' }}>
              Energy. <br />
              Solutions. <br />Simplified.
            </h1>
          </div>
          <div style={{
              color: "white",
              fontSize:'25px'
            }}>
            Navigating your site’s energy use is complicated. We keep it simple
            for you and bring solutions into view.
          </div>
          <button className="btn btn-outline-secondary mt-4" style={{
              color: "white"
            }}>LEARN MORE</button>
        </div>
      </div>
      <Home />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
