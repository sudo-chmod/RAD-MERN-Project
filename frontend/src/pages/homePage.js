import "../assets/homepage.css";
import Home from "../components/homePageComponents/Home";
import About from "../components/homePageComponents/About";
import ContactUs from "../components/homePageComponents/ContactUs";
import Footer from "../components/homePageComponents/Footer";


function HomePage() {
    return (
        <div className="App">
            <Home />
            <About />


            <ContactUs />
            <Footer />
        </div>
    );
}

export default HomePage;
