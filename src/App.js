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
        <div style={{color:"white", marginLeft:"50px", marginBottom: "150px"}}>
          <h1 style={{whiteSpace:"pre-wrap"}}>Energy. <br />Solutions. <br />Simplified.</h1>
        </div>
      </div>
      <Home />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
